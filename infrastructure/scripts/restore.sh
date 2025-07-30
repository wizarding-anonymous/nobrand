#!/bin/bash
set -e

BACKUP_FILE=$1
if [ -z "$BACKUP_FILE" ]; then
  echo "Usage: restore.sh <backup_file>" >&2
  exit 1
fi

docker exec -i premium-tech-postgres-1 psql -U $DB_USER $DB_NAME < "$BACKUP_FILE"

echo "Restore completed"
