import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    const { data: spaces, error } = await supabase
      .from("ad_spaces")
      .select("*")
      .eq("is_active", true)
      .order("price_per_day", { ascending: true })

    if (error) {
      throw error
    }

    return NextResponse.json(spaces)
  } catch (error) {
    console.error("Ad spaces fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch ad spaces" }, { status: 500 })
  }
}
