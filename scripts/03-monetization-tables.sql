-- Premium subscriptions
CREATE TABLE public.subscription_tiers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price_monthly DECIMAL(10,2) NOT NULL,
    price_yearly DECIMAL(10,2),
    features JSONB NOT NULL,
    max_alerts INTEGER DEFAULT 5,
    max_portfolios INTEGER DEFAULT 1,
    priority_support BOOLEAN DEFAULT false,
    early_access BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User subscriptions
CREATE TABLE public.user_subscriptions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    tier_id UUID REFERENCES public.subscription_tiers(id),
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired', 'pending')),
    current_period_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    current_period_end TIMESTAMP WITH TIME ZONE,
    stripe_subscription_id TEXT UNIQUE,
    stripe_customer_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Advertising spaces
CREATE TABLE public.ad_spaces (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL, -- 'header', 'sidebar', 'footer', 'banner'
    dimensions TEXT NOT NULL, -- '728x90', '300x250', etc.
    price_per_day DECIMAL(10,2) NOT NULL,
    max_duration_days INTEGER DEFAULT 30,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Advertisement campaigns
CREATE TABLE public.ad_campaigns (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    advertiser_email TEXT NOT NULL,
    advertiser_name TEXT NOT NULL,
    ad_space_id UUID REFERENCES public.ad_spaces(id),
    title TEXT NOT NULL,
    image_url TEXT NOT NULL,
    target_url TEXT NOT NULL,
    start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    total_cost DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'active', 'paused', 'completed')),
    impressions INTEGER DEFAULT 0,
    clicks INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Affiliate tracking
CREATE TABLE public.affiliate_links (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    partner_name TEXT NOT NULL,
    affiliate_url TEXT NOT NULL,
    commission_rate DECIMAL(5,4) NOT NULL, -- 0.05 = 5%
    clicks INTEGER DEFAULT 0,
    conversions INTEGER DEFAULT 0,
    total_earned DECIMAL(15,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Revenue tracking
CREATE TABLE public.revenue_transactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id),
    transaction_type TEXT NOT NULL CHECK (transaction_type IN ('subscription', 'advertisement', 'affiliate', 'trading_fee', 'premium_feature')),
    amount DECIMAL(15,2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    stripe_payment_intent_id TEXT,
    description TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Premium features usage tracking
CREATE TABLE public.feature_usage (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    feature_name TEXT NOT NULL,
    usage_count INTEGER DEFAULT 1,
    last_used TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, feature_name)
);

-- Insert subscription tiers
INSERT INTO public.subscription_tiers (name, description, price_monthly, price_yearly, features, max_alerts, max_portfolios, priority_support, early_access) VALUES
('Free', 'Basic access to SLERF features', 0.00, 0.00, '["Basic portfolio tracking", "Community access", "Standard alerts"]', 3, 1, false, false),
('Pro', 'Enhanced features for serious traders', 19.99, 199.99, '["Advanced analytics", "Unlimited alerts", "Priority support", "Multiple portfolios"]', 50, 5, true, false),
('VIP', 'Premium access with exclusive benefits', 49.99, 499.99, '["All Pro features", "Early access", "VIP community", "Personal advisor", "Custom alerts"]', 999, 20, true, true);

-- Insert ad spaces
INSERT INTO public.ad_spaces (name, location, dimensions, price_per_day) VALUES
('Header Banner', 'header', '728x90', 25.00),
('Sidebar Square', 'sidebar', '300x250', 15.00),
('Footer Banner', 'footer', '728x90', 20.00),
('Mobile Banner', 'mobile', '320x50', 10.00);

-- Insert affiliate links
INSERT INTO public.affiliate_links (user_id, partner_name, affiliate_url, commission_rate) VALUES
(NULL, 'Binance', 'https://binance.com/ref/slerf', 0.20),
(NULL, 'Coinbase', 'https://coinbase.com/join/slerf', 0.10),
(NULL, 'MetaMask', 'https://metamask.io/?ref=slerf', 0.15);
