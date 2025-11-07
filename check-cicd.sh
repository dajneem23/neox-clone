#!/bin/bash

# CI/CD Setup Verification Script
# Run this to check if everything is configured correctly

echo "🔍 Checking CI/CD Setup for Cloudflare Pages..."
echo ""

# Check if GitHub Actions workflow exists
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ GitHub Actions workflow found"
else
    echo "❌ GitHub Actions workflow not found"
fi

# Check if wrangler.jsonc exists
if [ -f "wrangler.jsonc" ]; then
    echo "✅ wrangler.jsonc configuration found"
else
    echo "❌ wrangler.jsonc not found"
fi

# Check if package.json exists
if [ -f "package.json" ]; then
    echo "✅ package.json found"
    
    # Check if wrangler is installed
    if grep -q "wrangler" package.json; then
        echo "✅ Wrangler dependency found in package.json"
    else
        echo "⚠️  Wrangler not found in package.json"
    fi
else
    echo "❌ package.json not found"
fi

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "⚠️  Dependencies not installed. Run: npm install"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Set up GitHub Secrets:"
echo "   - Go to GitHub repo → Settings → Secrets → Actions"
echo "   - Add CLOUDFLARE_API_TOKEN"
echo "   - Add CLOUDFLARE_ACCOUNT_ID"
echo ""
echo "2. Get your Cloudflare credentials:"
echo "   - Account ID: https://dash.cloudflare.com → Pages"
echo "   - API Token: https://dash.cloudflare.com/profile/api-tokens"
echo ""
echo "3. Push to GitHub to trigger deployment:"
echo "   git add ."
echo "   git commit -m 'Add CI/CD configuration'"
echo "   git push origin master"
echo ""
echo "📚 For detailed instructions, see: CICD_SETUP.md"
