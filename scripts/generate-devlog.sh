#!/bin/bash

set -e

mkdir -p docs/dev-log

# 날짜 인자 받기 (없으면 오늘)
TARGET_DATE=${1:-$(date +%F)}

FILE="docs/dev-log/$TARGET_DATE.md"

COMMITS=$(git log --since="$TARGET_DATE 00:00" --until="$TARGET_DATE 23:59" --pretty=format:"- %s" || true)

if [ -z "$COMMITS" ]; then
  COMMITS="- 오늘 생성된 커밋이 없습니다."
fi

{
  echo "# $TARGET_DATE"
  echo
  echo "## 오늘 작업"
  echo "$COMMITS"
  echo
  echo "## 원본 커밋"
  git log --since="$TARGET_DATE 00:00" --until="$TARGET_DATE 23:59" --pretty=format:"- %h %s" || true
  echo
  echo "## 메모"
  echo "- "
  echo
  echo "## 내일 할 일"
  echo "- "
} > "$FILE"

echo "Generated $FILE"