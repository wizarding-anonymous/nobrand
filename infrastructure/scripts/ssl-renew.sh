#!/bin/bash
set -e

certbot renew --quiet

docker exec nginx nginx -s reload || true
