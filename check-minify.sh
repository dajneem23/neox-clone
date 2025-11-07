#!/bin/bash

# Script kiểm tra xem Cloudflare có minify CSS không
# Chạy sau khi deploy: bash check-minify.sh

echo "🔍 Kiểm tra Cloudflare Auto Minify..."
echo ""

# URL của site (thay đổi sau khi deploy)
SITE_URL="https://neox-clone.pages.dev"  # Hoặc custom domain

echo "📥 Đang tải CSS từ production..."
curl -s -I "$SITE_URL/css/style.css" | grep -i "cf-"

echo ""
echo "📊 So sánh kích thước:"
echo "Local file:"
ls -lh css/style.css | awk '{print "  Size: " $5}'

echo ""
echo "Production file:"
curl -s "$SITE_URL/css/style.css" | wc -c | awk '{print "  Size: " $1 " bytes"}'

echo ""
echo "📝 Headers từ Cloudflare:"
curl -s -I "$SITE_URL/css/style.css" | grep -E "(content-encoding|cf-cache|cf-ray)"

echo ""
echo "✅ Kiểm tra xong!"
echo ""
echo "💡 Nếu thấy 'content-encoding: gzip' hoặc 'br' = Cloudflare đang compress"
echo "💡 Để bật Auto Minify: Cloudflare Dashboard → Speed → Optimization"
