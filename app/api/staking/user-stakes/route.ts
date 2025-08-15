import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { data: stakes, error } = await supabase
      .from("user_stakes")
      .select(`
        *,
        staking_pools (
          name,
          apy,
          lock_period_days
        )
      `)
      .eq("user_id", user.id)
      .eq("is_active", true)

    if (error) {
      throw error
    }

    return NextResponse.json(stakes)
  } catch (error) {
    console.error("User stakes fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch user stakes" }, { status: 500 })
  }
}
