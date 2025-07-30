#!/bin/bash
set -e

# Configuration
DEPLOY_USER="deploy"
DEPLOY_HOST="your-server.com"
DEPLOY_PATH="/var/www/premium-tech"
BACKUP_PATH="/var/backups/premium-tech"
GITHUB_REPO="https://github.com/your-username/premium-tech-landing.git"
BRANCH="${1:-main}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Functions
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
    exit 1
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Pre-deployment checks
log "Starting deployment of branch: $BRANCH"

# Create backup
log "Creating backup..."
ssh $DEPLOY_USER@$DEPLOY_HOST << 'EOS'
    mkdir -p $BACKUP_PATH
    if [ -d "$DEPLOY_PATH" ]; then
        tar -czf $BACKUP_PATH/backup-$(date +%Y%m%d-%H%M%S).tar.gz -C $DEPLOY_PATH .
        find $BACKUP_PATH -name "backup-*.tar.gz" -mtime +7 -delete
    fi
EOS

# Deploy
log "Deploying application..."
ssh $DEPLOY_USER@$DEPLOY_HOST << 'EOS'
    set -e
    
    # Clone or update repository
    if [ ! -d "$DEPLOY_PATH/.git" ]; then
        git clone $GITHUB_REPO $DEPLOY_PATH
    fi
    
    cd $DEPLOY_PATH
    
    # Fetch and checkout
    git fetch origin
    git checkout $BRANCH
    git pull origin $BRANCH
    
    # Load environment variables
    set -a
    source .env.production
    set +a
    
    # Install dependencies
    npm ci --production
    
    # Generate Prisma client
    npx prisma generate
    
    # Run database migrations
    npx prisma migrate deploy
    
    # Build application
    npm run build
    
    # Restart services
    docker-compose -f infrastructure/docker/docker-compose.production.yml up -d --build
    
    # Wait for health check
    sleep 10
    curl -f http://localhost:3000/api/health || exit 1
EOS

# Post-deployment
log "Running post-deployment tasks..."
ssh $DEPLOY_USER@$DEPLOY_HOST << 'EOS'
    cd $DEPLOY_PATH
    
    # Clear caches
    docker-compose -f infrastructure/docker/docker-compose.production.yml exec redis redis-cli FLUSHALL
    
    # Warm up cache
    curl -s http://localhost:3000 > /dev/null
    
    # Check all domains
    for domain in tehnika-design.ru tehnika-creator.ru tehnika-gift.ru tehnika-smeg.ru; do
        curl -s -o /dev/null -w "%{http_code}" https://$domain | grep -q "200" || echo "Domain $domain returned non-200 status"
    done
EOS

log "Deployment completed successfully!"

# Send notification
curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    -H "Content-Type: application/json" \
    -d "{\n        \"chat_id\": \"${TELEGRAM_CHAT_ID}\",\n        \"text\": \"✅ Deployment completed successfully!\\n\\nBranch: ${BRANCH}\\nTime: $(date)\"\n    }" > /dev/null

exit 0
