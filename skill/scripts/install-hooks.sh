#!/usr/bin/env bash
# Einmal pro Clone: git nutzt .githooks/ statt .git/hooks/
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"
if [ ! -d .git ]; then
  echo "kein Git-Repo: $ROOT" >&2
  exit 1
fi
chmod +x .githooks/pre-commit .githooks/pre-push
git config core.hooksPath .githooks
echo "core.hooksPath=$(git config core.hooksPath)"
echo "pre-commit und pre-push aktiv."
