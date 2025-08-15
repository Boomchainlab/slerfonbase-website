-- Insert sample staking pools
INSERT INTO public.staking_pools (name, description, apy, max_stake, min_stake, lock_period_days) VALUES
('SLERF Starter Pool', 'Perfect for new stakers with flexible terms', 15.5, 10000, 100, 30),
('SLERF Diamond Hands', 'High rewards for long-term believers', 25.0, 100000, 1000, 90),
('SLERF Whale Pool', 'Exclusive pool for large holders', 35.0, 1000000, 10000, 180);

-- Insert sample meme contest
INSERT INTO public.meme_contests (title, description, prize_pool, end_date, voting_end_date) VALUES
('SLERF Holiday Memes', 'Create the funniest SLERF holiday meme and win big!', 5000.00, 
 NOW() + INTERVAL '7 days', NOW() + INTERVAL '10 days');

-- Insert sample governance proposal
INSERT INTO public.governance_proposals (title, description, proposer_id, end_date) VALUES
('Implement Token Burn Mechanism', 'Proposal to burn 1% of transaction fees to reduce supply and increase value', 
 NULL, NOW() + INTERVAL '14 days');

-- Insert sample airdrop campaign
INSERT INTO public.airdrop_campaigns (name, description, total_tokens, end_date, eligibility_criteria) VALUES
('Early Adopter Airdrop', 'Reward early community members with bonus SLERF tokens', 100000.00, 
 NOW() + INTERVAL '30 days', '{"min_holding": 1000, "min_days": 7}');

-- Insert sample events
INSERT INTO public.events (title, description, event_type, start_time, end_time, registration_required, max_attendees) VALUES
('SLERF Community AMA', 'Monthly Ask Me Anything session with the SLERF team', 'ama', 
 NOW() + INTERVAL '3 days', NOW() + INTERVAL '3 days 1 hour', true, 500),
('Trading Competition Launch', 'Kick-off event for the monthly trading competition', 'trading', 
 NOW() + INTERVAL '1 day', NOW() + INTERVAL '1 day 2 hours', false, NULL),
('Partnership Announcement', 'Major partnership reveal with leading DeFi protocol', 'partnership', 
 NOW() + INTERVAL '5 days', NOW() + INTERVAL '5 days 30 minutes', false, NULL);
