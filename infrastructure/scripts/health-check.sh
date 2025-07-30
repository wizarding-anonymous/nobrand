#!/bin/bash

# Configuration
DOMAINS=("tehnika-design.ru" "tehnika-creator.ru" "tehnika-gift.ru" "tehnika-smeg.ru")
HEALTH_ENDPOINT="/api/health"
TIMEOUT=10

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Check function
check_domain() {
    local domain=$1
    local url="https://${domain}${HEALTH_ENDPOINT}"
    
    response=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout $TIMEOUT "$url")
    
    if [ "$response" == "200" ]; then
        echo -e "${GREEN}✓${NC} $domain - OK"
        return 0
    else
        echo -e "${RED}✗${NC} $domain - Failed (HTTP $response)"
        return 1
    fi
}

# Main
echo "Running health checks..."
echo "========================"

failed=0
for domain in "${DOMAINS[@]}"; do
    if ! check_domain "$domain"; then
        ((failed++))
    fi
done

echo "========================"

if [ $failed -eq 0 ]; then
    echo -e "${GREEN}All health checks passed!${NC}"
    exit 0
else
    echo -e "${RED}$failed health checks failed!${NC}"
    
    # Send alert
    curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
        -H "Content-Type: application/json" \
        -d "{\n            \"chat_id\": \"${TELEGRAM_CHAT_ID}\",\n            \"text\": \"❌ Health check failed!\\n\\n$failed domains are not responding correctly.\"\n        }"
    
    exit 1
fi
