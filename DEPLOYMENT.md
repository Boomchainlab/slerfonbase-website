# SLERF Token Website - Deployment Guide

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/slerf-token-website)

## 📋 Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Supabase project created
- [ ] Database tables created (run SQL scripts)
- [ ] Environment variables configured
- [ ] Stripe account set up (for payments)
- [ ] Domain configured (optional)

### 2. Database Setup
\`\`\`bash
# 1. Create Supabase project at https://supabase.com
# 2. Run SQL scripts in Supabase SQL Editor:
scripts/01-create-tables.sql
scripts/02-seed-data.sql
scripts/03-monetization-tables.sql

# 3. Generate TypeScript types
npm run db:generate
\`\`\`

### 3. Environment Variables
Set these in Vercel dashboard or `.env.local`:

\`\`\`env
# Required
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=

# Optional but recommended
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_GA_ID=
\`\`\`

## 🔧 Manual Deployment Steps

### 1. Clone and Install
\`\`\`bash
git clone https://github.com/your-username/slerf-token-website.git
cd slerf-token-website
npm install
\`\`\`

### 2. Configure Environment
\`\`\`bash
cp .env.example .env.local
# Edit .env.local with your values
\`\`\`

### 3. Set Up Database
\`\`\`bash
# Seed database with initial data
npm run db:seed
\`\`\`

### 4. Build and Deploy
\`\`\`bash
# Test build locally
npm run build
npm start

# Deploy to Vercel
npm i -g vercel
vercel login
vercel --prod
\`\`\`

## 🔍 Post-Deployment Verification

### 1. Health Check
Visit `https://your-domain.com/api/health` - should return:
\`\`\`json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
\`\`\`

### 2. Feature Testing
- [ ] User registration/login works
- [ ] Portfolio tracking displays data
- [ ] Staking pools are visible
- [ ] Payment flow works (test mode)
- [ ] Admin dashboard accessible
- [ ] Analytics tracking active

### 3. Performance Check
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals pass
- [ ] Images optimized
- [ ] API responses < 500ms

## 🛠 Troubleshooting

### Common Issues

**Database Connection Failed**
\`\`\`bash
# Check environment variables
echo $SUPABASE_URL
echo $SUPABASE_ANON_KEY

# Test connection
curl -H "apikey: $SUPABASE_ANON_KEY" $SUPABASE_URL/rest/v1/
\`\`\`

**Build Errors**
\`\`\`bash
# Clear cache and rebuild
rm -rf .next
npm run build
\`\`\`

**Stripe Webhooks**
\`\`\`bash
# Set webhook URL in Stripe dashboard:
https://your-domain.com/api/webhooks/stripe

# Test webhook
stripe listen --forward-to localhost:3000/api/webhooks/stripe
\`\`\`

## 📊 Monitoring Setup

### 1. Vercel Analytics
- Enable in Vercel dashboard
- Add `VERCEL_ANALYTICS_ID` to environment variables

### 2. Error Tracking
- Logs available in Vercel dashboard
- Set up alerts for 4xx/5xx errors

### 3. Performance Monitoring
- Core Web Vitals in Vercel Speed Insights
- Custom metrics in `/admin/revenue` dashboard

## 🔄 Updates and Maintenance

### Regular Tasks
\`\`\`bash
# Update dependencies monthly
npm update

# Backup database weekly
# (Supabase handles automatic backups)

# Monitor error logs daily
# Check Vercel dashboard

# Review analytics weekly
# Visit /admin/revenue dashboard
\`\`\`

### Scaling Considerations
- **Database**: Supabase auto-scales, monitor usage
- **API Limits**: Implement rate limiting (already configured)
- **CDN**: Vercel Edge Network handles global distribution
- **Monitoring**: Set up alerts for high traffic/errors

## 🆘 Support

If you encounter issues:

1. Check the [troubleshooting section](#troubleshooting)
2. Review Vercel deployment logs
3. Check Supabase dashboard for database issues
4. Contact support: support@slerf-token.com

---

**Happy Deploying!** 🦥🚀
