import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    const { data: campaigns, error } = await supabase
      .from("airdrop_campaigns")
      .select("*")
      .eq("status", "active")
      .order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json(campaigns)
  } catch (error) {
    console.error("Airdrop campaigns fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch campaigns" }, { status: 500 })
  }
}
