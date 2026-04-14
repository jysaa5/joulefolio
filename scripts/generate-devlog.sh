#!/bin/bash

set -e

mkdir -p docs/dev-log

TODAY=$(date +%F)
FILE="docs/dev-log/$TODAY.md"

COMMITS=$(git log --since="today 00:00" --pretty=format:"- %s" || true)

if [ -z "$COMMITS" ]; then
  COMMITS="- 오늘 생성된 커밋이 없습니다."
fi

{
  echo "# $TODAY"
  echo
  echo "## 오늘 작업"
  echo "$COMMITS"
  echo
  echo "## 원본 커밋"
  git log --since="today 00:00" --pretty=format:"- %h %s" || true
  echo
  echo "## 메모"
  echo "- "
  echo
  echo "## 내일 할 일"
  echo "- "
} > "$FILE"

echo "Generated $FILE"