import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    // Get revenue summary
    const { data: revenueData, error: revenueError } = await supabase
      .from("revenue_transactions")
      .select("transaction_type, amount, created_at")
      .gte("created_at", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())

    if (revenueError) {
      throw revenueError
    }

    // Calculate metrics
    const totalRevenue = revenueData.reduce((sum, transaction) => sum + Number(transaction.amount), 0)
    const subscriptionRevenue = revenueData
      .filter((t) => t.transaction_type === "subscription")
      .reduce((sum, transaction) => sum + Number(transaction.amount), 0)
    const adRevenue = revenueData
      .filter((t) => t.transaction_type === "advertisement")
      .reduce((sum, transaction) => sum + Number(transaction.amount), 0)
    const affiliateRevenue = revenueData
      .filter((t) => t.transaction_type === "affiliate")
      .reduce((sum, transaction) => sum + Number(transaction.amount), 0)

    // Get active subscriptions count
    const { count: activeSubscriptions } = await supabase
      .from("user_subscriptions")
      .select("*", { count: "exact", head: true })
      .eq("status", "active")

    // Get active ad campaigns count
    const { count: activeCampaigns } = await supabase
      .from("ad_campaigns")
      .select("*", { count: "exact", head: true })
      .eq("status", "active")

    return NextResponse.json({
      totalRevenue,
      subscriptionRevenue,
      adRevenue,
      affiliateRevenue,
      activeSubscriptions: activeSubscriptions || 0,
      activeCampaigns: activeCampaigns || 0,
      revenueByDay: revenueData.reduce((acc: any, transaction) => {
        const date = new Date(transaction.created_at).toISOString().split("T")[0]
        acc[date] = (acc[date] || 0) + Number(transaction.amount)
        return acc
      }, {}),
    })
  } catch (error) {
    console.error("Revenue dashboard fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch revenue data" }, { status: 500 })
  }
}
