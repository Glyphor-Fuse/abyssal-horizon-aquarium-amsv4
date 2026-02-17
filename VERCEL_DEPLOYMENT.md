# Vercel Deployment Setup

This document explains how to deploy this project to Vercel.

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- Vercel CLI installed (`npm i -g vercel`)
- Node.js and npm installed

## Initial Setup

### Step 1: Link Your Project to Vercel

Run the following command in your project directory:

```bash
vercel link
```

This command will:
1. Prompt you to log in to Vercel (if not already logged in)
2. Ask you to select a scope (your personal account or organization)
3. Link the project to an existing Vercel project or create a new one
4. Create a `.vercel` directory with `project.json` containing your project and org IDs

### Step 2: Configure Environment Variables (if needed)

If your project uses environment variables:

1. Go to your project settings on Vercel dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables for Production, Preview, and Development environments

Or use the CLI:

```bash
vercel env add VARIABLE_NAME
```

## Deploying

### Deploy to Preview

Preview deployments are created for every push to a non-production branch:

```bash
vercel
```

### Deploy to Production

To deploy to production:

```bash
vercel --prod
```

## Automatic Deployments

Vercel automatically deploys your project when you push to your Git repository:

- **Production**: Pushes to the `main` branch
- **Preview**: Pushes to any other branch

To enable this:

1. Connect your GitHub repository in Vercel dashboard
2. Go to Project Settings → Git
3. Configure the production branch (usually `main`)

## Configuration

The project includes `vercel.json` with the following settings:

- **buildCommand**: `npm run build` - Builds the Vite project
- **outputDirectory**: `dist` - Where Vite outputs the built files
- **framework**: `vite` - Tells Vercel this is a Vite project
- **rewrites**: Routes all requests to `/` for SPA client-side routing

## Troubleshooting

### Missing Project ID

If you see "No Project ID found in .vercel/project.json", run:

```bash
vercel link
```

### Build Failures

Check that:
- All dependencies are listed in `package.json`
- The build works locally: `npm run build`
- Environment variables are set correctly in Vercel

### Domain Configuration

To add a custom domain:
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as instructed

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
