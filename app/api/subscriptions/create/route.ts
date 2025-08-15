import { type NextRequest, NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { tierId, billingCycle } = body

    // Get tier details
    const { data: tier, error: tierError } = await supabase
      .from("subscription_tiers")
      .select("*")
      .eq("id", tierId)
      .single()

    if (tierError || !tier) {
      return NextResponse.json({ error: "Invalid subscription tier" }, { status: 400 })
    }

    // In production, integrate with Stripe
    // For now, simulate checkout URL
    const checkoutUrl = `https://checkout.stripe.com/pay/cs_test_${tierId}_${billingCycle}`

    // Create pending subscription record
    await supabase.from("user_subscriptions").insert({
      user_id: user.id,
      tier_id: tierId,
      status: "pending",
      current_period_end: new Date(
        Date.now() + (billingCycle === "yearly" ? 365 : 30) * 24 * 60 * 60 * 1000,
      ).toISOString(),
    })

    return NextResponse.json({ checkoutUrl })
  } catch (error) {
    console.error("Subscription creation error:", error)
    return NextResponse.json({ error: "Failed to create subscription" }, { status: 500 })
  }
}
