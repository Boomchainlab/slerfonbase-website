import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    const { data: pools, error } = await supabase
      .from("staking_pools")
      .select("*")
      .eq("is_active", true)
      .order("apy", { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json(pools)
  } catch (error) {
    console.error("Staking pools fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch staking pools" }, { status: 500 })
  }
}
