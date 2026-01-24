# Deployment Guide

This guide covers deploying the Transparent Charity Tracker application to production.

## Pre-Deployment Checklist

- [ ] Smart contract deployed to Base Mainnet
- [ ] Contract addresses updated in environment variables
- [ ] All environment variables configured
- [ ] Production build tested locally
- [ ] Domain name configured (if using custom domain)
- [ ] SSL certificate configured

## Deployment Platforms

### Vercel (Recommended)

Vercel is the recommended deployment platform for Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   In Vercel dashboard, go to Settings → Environment Variables and add:
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   NEXT_PUBLIC_CHAIN_ID=8453
   NEXT_PUBLIC_RPC_URL=https://mainnet.base.org
   NEXT_PUBLIC_CHARITY_TRACKER_ADDRESS=0x...
   NEXT_PUBLIC_USDC_ADDRESS=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

5. **Custom Domain (Optional)**
   - Go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment Variables**
   - Add all `NEXT_PUBLIC_*` variables in Netlify dashboard

3. **Deploy**
   - Connect GitHub repository
   - Deploy automatically on push

### Self-Hosted

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

3. **Use a process manager** (PM2 recommended)
   ```bash
   npm install -g pm2
   pm2 start npm --name "tct" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure reverse proxy** (Nginx example)
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

### Required Variables

- `NEXT_PUBLIC_APP_URL`: Your production URL
- `NEXT_PUBLIC_CHAIN_ID`: 8453 (Base Mainnet)
- `NEXT_PUBLIC_RPC_URL`: Base Mainnet RPC endpoint
- `NEXT_PUBLIC_CHARITY_TRACKER_ADDRESS`: Deployed contract address
- `NEXT_PUBLIC_USDC_ADDRESS`: USDC token address on Base

### Optional Variables

- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: For WalletConnect connector
- `SENTRY_DSN`: For error tracking
- `NEXT_PUBLIC_GA_ID`: For Google Analytics

## Post-Deployment Testing

After deployment, test the following:

1. **Wallet Connection**
   - [ ] Connect wallet
   - [ ] Switch to Base Mainnet
   - [ ] Verify network connection

2. **Project Listing**
   - [ ] View all projects
   - [ ] Filter projects
   - [ ] Navigate to project details

3. **Donations**
   - [ ] Donate ETH
   - [ ] Donate ERC20 (USDC)
   - [ ] Verify transaction on BaseScan

4. **Voting**
   - [ ] Vote on milestone
   - [ ] Verify vote recorded
   - [ ] Check voting progress

5. **Project Creation (NGO)**
   - [ ] Verify NGO status
   - [ ] Create project
   - [ ] Add milestones

6. **Fund Release (NGO)**
   - [ ] Release funds for approved milestone
   - [ ] Verify funds released

7. **Error Handling**
   - [ ] Test with wrong network
   - [ ] Test with insufficient balance
   - [ ] Verify error messages display

## Monitoring

### Error Tracking

Consider setting up error tracking:
- **Sentry**: Add `SENTRY_DSN` environment variable
- **LogRocket**: For session replay
- **Vercel Analytics**: Built-in with Vercel

### Performance Monitoring

- Use Vercel Analytics (if on Vercel)
- Google Analytics for user behavior
- Web Vitals monitoring

## Troubleshooting

### Build Failures

- Check Node.js version (18+ required)
- Verify all dependencies installed
- Check for TypeScript errors: `npm run lint`

### Runtime Errors

- Check environment variables are set
- Verify contract addresses are correct
- Check RPC endpoint is accessible
- Review browser console for errors

### Network Issues

- Verify wallet is connected to Base Mainnet
- Check RPC endpoint is working
- Ensure contract is deployed and verified

## Rollback

If deployment has issues:

1. **Vercel**: Go to Deployments → Select previous deployment → Promote to Production
2. **Netlify**: Go to Deploys → Select previous deploy → Publish deploy
3. **Self-hosted**: Revert to previous build or git commit

## Security Checklist

- [ ] Environment variables not exposed in client code
- [ ] HTTPS enabled
- [ ] CORS configured correctly
- [ ] Rate limiting configured (if applicable)
- [ ] Error messages don't expose sensitive information

## Support

For deployment issues, check:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- Project GitHub Issues

