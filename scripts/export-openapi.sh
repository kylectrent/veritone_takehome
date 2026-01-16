#!/usr/bin/env bash
set -euo pipefail

OUT_DIR="openapi"
OUT_FILE="${OUT_DIR}/openapi.json"
URL="${OPENAPI_URL:-http://localhost:8080/v3/api-docs}"

mkdir -p "$OUT_DIR"
curl -sS "$URL" -o "$OUT_FILE"
echo "Exported OpenAPI spec to $OUT_FILE (from $URL)"