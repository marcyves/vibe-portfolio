# Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be live with automatic deployments on git push

### 2. Netlify
1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder
4. Or connect your GitHub repository for automatic deployments

### 3. GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Run: `npm run deploy`

### 4. Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## Environment Variables
If you add environment variables, make sure to:
1. Prefix them with `VITE_` (e.g., `VITE_API_URL`)
2. Add them to your deployment platform's environment variables section

## Custom Domain
Most platforms allow you to add a custom domain in their settings after deployment.
