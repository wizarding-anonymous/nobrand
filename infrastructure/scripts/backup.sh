#!/bin/bash
set -e

# Configuration
BACKUP_DIR="/var/backups/premium-tech"
DB_CONTAINER="premium-tech-postgres-1"
S3_BUCKET="s3://premium-tech-backups"
RETENTION_DAYS=30

# Create backup directory
mkdir -p $BACKUP_DIR

# Timestamp
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Database backup
echo "Backing up database..."
docker exec $DB_CONTAINER pg_dump -U $DB_USER $DB_NAME > $BACKUP_DIR/db_backup_$TIMESTAMP.sql

# Application files backup
echo "Backing up application files..."
tar -czf $BACKUP_DIR/files_backup_$TIMESTAMP.tar.gz \
    --exclude=node_modules \
    --exclude=.next \
    --exclude=.git \
    /var/www/premium-tech

# Compress database backup
gzip $BACKUP_DIR/db_backup_$TIMESTAMP.sql

# Upload to S3 (if configured)
if command -v aws &> /dev/null; then
    echo "Uploading to S3..."
    aws s3 cp $BACKUP_DIR/db_backup_$TIMESTAMP.sql.gz $S3_BUCKET/database/
    aws s3 cp $BACKUP_DIR/files_backup_$TIMESTAMP.tar.gz $S3_BUCKET/files/
fi

# Clean old backups
echo "Cleaning old backups..."
find $BACKUP_DIR -name "*.gz" -mtime +$RETENTION_DAYS -delete

# Verify backup
echo "Verifying backup..."
gunzip -t $BACKUP_DIR/db_backup_$TIMESTAMP.sql.gz

echo "Backup completed successfully!"

# Send notification
curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    -H "Content-Type: application/json" \
    -d "{\n        \"chat_id\": \"${TELEGRAM_CHAT_ID}\",\n        \"text\": \"✅ Backup completed successfully!\\n\\nDatabase: db_backup_$TIMESTAMP.sql.gz\\nFiles: files_backup_$TIMESTAMP.tar.gz\"\n    }"
