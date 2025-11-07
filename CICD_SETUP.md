# CI/CD Setup Guide for Cloudflare Pages

This repository is configured to automatically deploy to Cloudflare Pages using GitHub Actions.

## Prerequisites

- A Cloudflare account
- A GitHub repository
- Node.js 18+ installed locally

## Setup Instructions

### 1. Get Your Cloudflare Credentials

#### Get Your Account ID

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages** in the left sidebar
3. Your Account ID is visible in the right sidebar or in the URL

#### Create an API Token

1. Go to [Cloudflare Dashboard → My Profile → API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Use the **"Edit Cloudflare Workers"** template or create a custom token with these permissions:
   - **Account** → **Cloudflare Pages** → **Edit**
4. Click **Continue to summary** → **Create Token**
5. **Copy the token immediately** (you won't see it again!)

### 2. Add Secrets to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these two secrets:

   - **Name:** `CLOUDFLARE_API_TOKEN`
     - **Value:** Your Cloudflare API token from step 1

   - **Name:** `CLOUDFLARE_ACCOUNT_ID`
     - **Value:** Your Cloudflare Account ID

### 3. How It Works

The CI/CD pipeline will automatically:

- ✅ **Trigger on push to `master` or `main` branch**
- ✅ **Trigger on pull requests** (creates preview deployments)
- ✅ **Can be manually triggered** via GitHub Actions UI
- ✅ **Install dependencies** using npm
- ✅ **Deploy to Cloudflare Pages**

### 4. Deployment Types

- **Production Deployment:** Pushes to `master`/`main` branch
- **Preview Deployment:** Pull requests create preview URLs
- **Manual Deployment:** Use "Run workflow" button in GitHub Actions

### 5. Verify Deployment

After pushing to GitHub:

1. Go to your repository's **Actions** tab
2. You'll see the workflow running
3. Once complete, check your [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
4. Your site should be live!

## Local Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Preview production build
npm run preview

# Manual deploy (requires local wrangler auth)
npm run deploy
```

## Troubleshooting

### Deployment fails with authentication error

- Verify your `CLOUDFLARE_API_TOKEN` is correct
- Ensure the token has **Cloudflare Pages Edit** permissions
- Check that `CLOUDFLARE_ACCOUNT_ID` matches your account

### Project not found error

- Make sure the `projectName` in `.github/workflows/deploy.yml` matches your Cloudflare Pages project name
- Create the project first by running `npm run deploy` locally or through the Cloudflare Dashboard

### Build fails

- Check the Actions logs for specific error messages
- Ensure `package.json` dependencies are correct
- Verify Node.js version compatibility

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Cloudflare Pages GitHub Action](https://github.com/cloudflare/pages-action)

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD configuration
├── assets/                     # Static assets
├── css/
│   └── style.css
├── js/
│   └── main.js
├── index.html
├── package.json
├── wrangler.jsonc             # Cloudflare configuration
└── README.md
```

## Environment Variables

You can add environment variables in the Cloudflare Pages dashboard:

1. Go to your Pages project
2. **Settings** → **Environment variables**
3. Add variables for production and preview environments

## Custom Domain

To add a custom domain:

1. Go to your Pages project in Cloudflare
2. **Custom domains** → **Set up a custom domain**
3. Follow the instructions to configure DNS
