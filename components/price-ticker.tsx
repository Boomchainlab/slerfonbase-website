"use client"

import { useState, useEffect } from "react"

interface PriceData {
  price: number
  change24h: number
  volume24h: number
  marketCap: number
}

export function PriceTicker() {
  const [priceData, setPriceData] = useState<PriceData>({
    price: 0.000123,
    change24h: 15.67,
    volume24h: 45678,
    marketCap: 123456,
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call - replace with real price API
    const fetchPrice = async () => {
      try {
        // Simulate price fluctuation for demo
        const mockPrice = 0.000123 + (Math.random() - 0.5) * 0.00001
        const mockChange = (Math.random() - 0.5) * 20

        setPriceData({
          price: mockPrice,
          change24h: mockChange,
          volume24h: 45678 + Math.random() * 10000,
          marketCap: mockPrice * 1000000000,
        })
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to fetch price data:", error)
        setIsLoading(false)
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 animate-pulse">
        <div className="h-6 bg-white/20 rounded mb-2"></div>
        <div className="h-4 bg-white/20 rounded"></div>
      </div>
    )
  }

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/30">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-yellow-400">SLERF/USD</span>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
          <span className="text-xs text-green-400">LIVE</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-bold">${priceData.price.toFixed(6)}</div>
          <div className={`text-sm ${priceData.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>
            {priceData.change24h >= 0 ? "+" : ""}
            {priceData.change24h.toFixed(2)}%
          </div>
        </div>
        <div className="text-right text-xs text-gray-300">
          <div>Vol: ${priceData.volume24h.toLocaleString()}</div>
          <div>MC: ${priceData.marketCap.toLocaleString()}</div>
        </div>
      </div>
    </div>
  )
}
