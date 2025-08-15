const { createClient } = require("@supabase/supabase-js")

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

async function seedDatabase() {
  console.log("🌱 Starting database seeding...")

  try {
    // Seed subscription tiers
    console.log("📊 Seeding subscription tiers...")
    const { error: tiersError } = await supabase.from("subscription_tiers").upsert(
      [
        {
          name: "Free",
          description: "Basic access to SLERF features",
          price_monthly: 0.0,
          price_yearly: 0.0,
          features: ["Basic portfolio tracking", "Community access", "Standard alerts"],
          max_alerts: 3,
          max_portfolios: 1,
          priority_support: false,
          early_access: false,
        },
        {
          name: "Pro",
          description: "Enhanced features for serious traders",
          price_monthly: 19.99,
          price_yearly: 199.99,
          features: ["Advanced analytics", "Unlimited alerts", "Priority support", "Multiple portfolios"],
          max_alerts: 50,
          max_portfolios: 5,
          priority_support: true,
          early_access: false,
        },
        {
          name: "VIP",
          description: "Premium access with exclusive benefits",
          price_monthly: 49.99,
          price_yearly: 499.99,
          features: ["All Pro features", "Early access", "VIP community", "Personal advisor", "Custom alerts"],
          max_alerts: 999,
          max_portfolios: 20,
          priority_support: true,
          early_access: true,
        },
      ],
      { onConflict: "name" },
    )

    if (tiersError) throw tiersError
    console.log("✅ Subscription tiers seeded")

    // Seed staking pools
    console.log("🏊 Seeding staking pools...")
    const { error: poolsError } = await supabase.from("staking_pools").upsert(
      [
        {
          name: "SLERF Starter Pool",
          description: "Perfect for new stakers with flexible terms",
          apy: 15.5,
          max_stake: 10000,
          min_stake: 100,
          lock_period_days: 30,
        },
        {
          name: "SLERF Diamond Hands",
          description: "High rewards for long-term believers",
          apy: 25.0,
          max_stake: 100000,
          min_stake: 1000,
          lock_period_days: 90,
        },
        {
          name: "SLERF Whale Pool",
          description: "Exclusive pool for large holders",
          apy: 35.0,
          max_stake: 1000000,
          min_stake: 10000,
          lock_period_days: 180,
        },
      ],
      { onConflict: "name" },
    )

    if (poolsError) throw poolsError
    console.log("✅ Staking pools seeded")

    // Seed ad spaces
    console.log("📺 Seeding advertising spaces...")
    const { error: adError } = await supabase.from("ad_spaces").upsert(
      [
        {
          name: "Header Banner",
          location: "header",
          dimensions: "728x90",
          price_per_day: 25.0,
        },
        {
          name: "Sidebar Square",
          location: "sidebar",
          dimensions: "300x250",
          price_per_day: 15.0,
        },
        {
          name: "Footer Banner",
          location: "footer",
          dimensions: "728x90",
          price_per_day: 20.0,
        },
        {
          name: "Mobile Banner",
          location: "mobile",
          dimensions: "320x50",
          price_per_day: 10.0,
        },
      ],
      { onConflict: "name" },
    )

    if (adError) throw adError
    console.log("✅ Ad spaces seeded")

    // Seed sample events
    console.log("📅 Seeding events...")
    const futureDate1 = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
    const futureDate2 = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
    const futureDate3 = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 days from now

    const { error: eventsError } = await supabase.from("events").upsert(
      [
        {
          title: "SLERF Community AMA",
          description: "Monthly Ask Me Anything session with the SLERF team",
          event_type: "ama",
          start_time: futureDate1.toISOString(),
          end_time: new Date(futureDate1.getTime() + 60 * 60 * 1000).toISOString(),
          registration_required: true,
          max_attendees: 500,
        },
        {
          title: "Trading Competition Launch",
          description: "Kick-off event for the monthly trading competition",
          event_type: "trading",
          start_time: futureDate2.toISOString(),
          end_time: new Date(futureDate2.getTime() + 2 * 60 * 60 * 1000).toISOString(),
          registration_required: false,
        },
        {
          title: "Partnership Announcement",
          description: "Major partnership reveal with leading DeFi protocol",
          event_type: "partnership",
          start_time: futureDate3.toISOString(),
          end_time: new Date(futureDate3.getTime() + 30 * 60 * 1000).toISOString(),
          registration_required: false,
        },
      ],
      { onConflict: "title" },
    )

    if (eventsError) throw eventsError
    console.log("✅ Events seeded")

    console.log("🎉 Database seeding completed successfully!")
  } catch (error) {
    console.error("❌ Error seeding database:", error)
    process.exit(1)
  }
}

// Run seeding
seedDatabase()
