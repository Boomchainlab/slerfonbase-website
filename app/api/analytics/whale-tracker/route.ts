import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { NextRequest } from "next/server" // Import NextRequest

export async function GET() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    const { data: transactions, error } = await supabase
      .from("whale_transactions")
      .select("*")
      .order("timestamp", { ascending: false })
      .limit(50)

    if (error) {
      throw error
    }

    return NextResponse.json(transactions)
  } catch (error) {
    console.error("Whale tracker fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch whale transactions" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  try {
    const body = await request.json()
    const { walletAddress, transactionHash, transactionType, amount, valueUsd } = body

    const { data, error } = await supabase
      .from("whale_transactions")
      .insert({
        wallet_address: walletAddress,
        transaction_hash: transactionHash,
        transaction_type: transactionType,
        amount: amount,
        value_usd: valueUsd,
        timestamp: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Whale transaction insert error:", error)
    return NextResponse.json({ error: "Failed to record transaction" }, { status: 500 })
  }
}
