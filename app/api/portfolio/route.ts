import { type NextRequest, NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // Get user portfolio
    const { data: portfolio, error } = await supabase.from("portfolios").select("*").eq("user_id", user.id).single()

    if (error && error.code !== "PGRST116") {
      throw error
    }

    // If no portfolio exists, create one
    if (!portfolio) {
      const { data: newPortfolio, error: createError } = await supabase
        .from("portfolios")
        .insert({
          user_id: user.id,
          wallet_address: "",
          slerf_balance: 0,
          eth_balance: 0,
          total_value_usd: 0,
        })
        .select()
        .single()

      if (createError) {
        throw createError
      }

      return NextResponse.json(newPortfolio)
    }

    return NextResponse.json(portfolio)
  } catch (error) {
    console.error("Portfolio fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch portfolio" }, { status: 500 })
  }
}

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
    const { walletAddress } = body

    // Simulate fetching wallet data (in production, integrate with blockchain APIs)
    const mockData = {
      slerf_balance: Math.random() * 10000,
      eth_balance: Math.random() * 5,
      total_value_usd: Math.random() * 50000,
      pnl_usd: (Math.random() - 0.5) * 10000,
      pnl_percentage: (Math.random() - 0.5) * 100,
    }

    const { data, error } = await supabase
      .from("portfolios")
      .upsert({
        user_id: user.id,
        wallet_address: walletAddress,
        ...mockData,
        last_updated: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Portfolio update error:", error)
    return NextResponse.json({ error: "Failed to update portfolio" }, { status: 500 })
  }
}
