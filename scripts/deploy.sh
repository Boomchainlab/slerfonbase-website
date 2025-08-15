#!/bin/bash

# SLERF Token Website Deployment Script
# This script automates the deployment process

set -e  # Exit on any error

echo "🦥 Starting SLERF Token Website Deployment..."

# Check if required environment variables are set
check_env_vars() {
    echo "📋 Checking environment variables..."
    
    required_vars=(
        "SUPABASE_URL"
        "SUPABASE_ANON_KEY"
        "NEXT_PUBLIC_SUPABASE_URL"
        "NEXT_PUBLIC_SITE_URL"
    )
    
    for var in "${required_vars[@]}"; do
        if [ -z "${!var}" ]; then
            echo "❌ Error: $var is not set"
            exit 1
        fi
    done
    
    echo "✅ All required environment variables are set"
}

# Install dependencies
install_deps() {
    echo "📦 Installing dependencies..."
    npm ci --production=false
    echo "✅ Dependencies installed"
}

# Run tests and type checking
run_checks() {
    echo "🔍 Running pre-deployment checks..."
    
    # Type checking
    npm run type-check
    echo "✅ TypeScript checks passed"
    
    # Linting
    npm run lint
    echo "✅ Linting passed"
}

# Build the application
build_app() {
    echo "🏗️ Building application..."
    npm run build
    echo "✅ Build completed successfully"
}

# Run database migrations
run_migrations() {
    echo "🗄️ Running database migrations..."
    
    # Check if database is accessible
    if ! curl -f "$SUPABASE_URL/rest/v1/" -H "apikey: $SUPABASE_ANON_KEY" > /dev/null 2>&1; then
        echo "❌ Error: Cannot connect to database"
        exit 1
    fi
    
    echo "✅ Database connection verified"
    
    # Generate types
    if command -v supabase &> /dev/null; then
        npm run db:generate
        echo "✅ Database types generated"
    else
        echo "⚠️ Supabase CLI not found, skipping type generation"
    fi
}

# Deploy to Vercel
deploy_vercel() {
    echo "🚀 Deploying to Vercel..."
    
    if command -v vercel &> /dev/null; then
        vercel --prod --yes
        echo "✅ Deployed to Vercel successfully"
    else
        echo "❌ Error: Vercel CLI not found"
        echo "Install with: npm i -g vercel"
        exit 1
    fi
}

# Post-deployment checks
post_deploy_checks() {
    echo "🔍 Running post-deployment checks..."
    
    if [ -n "$NEXT_PUBLIC_SITE_URL" ]; then
        # Check if site is accessible
        if curl -f "$NEXT_PUBLIC_SITE_URL/api/health" > /dev/null 2>&1; then
            echo "✅ Health check passed"
        else
            echo "⚠️ Warning: Health check failed"
        fi
        
        # Check if sitemap is generated
        if curl -f "$NEXT_PUBLIC_SITE_URL/sitemap.xml" > /dev/null 2>&1; then
            echo "✅ Sitemap is accessible"
        else
            echo "⚠️ Warning: Sitemap not found"
        fi
    fi
}

# Main deployment flow
main() {
    echo "🦥 SLERF Token Website Deployment"
    echo "=================================="
    
    check_env_vars
    install_deps
    run_checks
    build_app
    run_migrations
    deploy_vercel
    post_deploy_checks
    
    echo ""
    echo "🎉 Deployment completed successfully!"
    echo "🌐 Site URL: $NEXT_PUBLIC_SITE_URL"
    echo "📊 Analytics: https://vercel.com/analytics"
    echo "🗄️ Database: $SUPABASE_URL"
    echo ""
    echo "Next steps:"
    echo "1. Verify all features are working"
    echo "2. Set up monitoring alerts"
    echo "3. Configure payment webhooks"
    echo "4. Test subscription flows"
    echo ""
}

# Run main function
main "$@"
