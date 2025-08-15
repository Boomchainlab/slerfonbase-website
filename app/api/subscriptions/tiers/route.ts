import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    const { data: tiers, error } = await supabase
      .from("subscription_tiers")
      .select("*")
      .eq("is_active", true)
      .order("price_monthly", { ascending: true })

    if (error) {
      throw error
    }

    return NextResponse.json(tiers)
  } catch (error) {
    console.error("Subscription tiers fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch subscription tiers" }, { status: 500 })
  }
}
