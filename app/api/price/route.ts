import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Simulate real-time price data (in production, integrate with price APIs)
    const mockPriceData = {
      price: 0.00234 + (Math.random() - 0.5) * 0.0001,
      change24h: (Math.random() - 0.5) * 20,
      volume24h: 1250000 + Math.random() * 500000,
      marketCap: 23400000 + Math.random() * 1000000,
      holders: 15420 + Math.floor(Math.random() * 100),
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(mockPriceData)
  } catch (error) {
    console.error("Price fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch price data" }, { status: 500 })
  }
}
