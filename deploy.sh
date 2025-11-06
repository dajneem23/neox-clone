#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔══════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  NeoX Clone - Cloudflare Deployer   ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════╝${NC}"
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo -e "${RED}❌ Wrangler CLI is not installed${NC}"
    echo -e "${BLUE}Installing Wrangler...${NC}"
    npm install -g wrangler
fi

# Check if user is logged in
echo -e "${BLUE}🔐 Checking Cloudflare authentication...${NC}"
wrangler whoami

if [ $? -ne 0 ]; then
    echo -e "${BLUE}🔑 Please login to Cloudflare...${NC}"
    wrangler login
fi

# Deploy to Cloudflare Pages
echo -e "${BLUE}🚀 Deploying to Cloudflare Pages...${NC}"
wrangler pages publish . --project-name=neox-clone

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Your site is now live on Cloudflare Pages${NC}"
else
    echo ""
    echo -e "${RED}❌ Deployment failed${NC}"
    echo -e "${RED}Please check the error messages above${NC}"
    exit 1
fi
