"use client"

import { useState, useEffect } from "react"

interface CommunityStats {
  holders: number
  transactions: number
  twitterFollowers: number
  telegramMembers: number
}

export function CommunityStats() {
  const [stats, setStats] = useState<CommunityStats>({
    holders: 1247,
    transactions: 8934,
    twitterFollowers: 2156,
    telegramMembers: 1834,
  })

  useEffect(() => {
    // Simulate growing numbers
    const interval = setInterval(() => {
      setStats((prev) => ({
        holders: prev.holders + Math.floor(Math.random() * 3),
        transactions: prev.transactions + Math.floor(Math.random() * 5),
        twitterFollowers: prev.twitterFollowers + Math.floor(Math.random() * 2),
        telegramMembers: prev.telegramMembers + Math.floor(Math.random() * 2),
      }))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Community Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4 bg-white/5 rounded-2xl transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2 animate-pulse">
            {stats.holders.toLocaleString()}
          </div>
          <div className="text-sm text-gray-300">Holders</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-2xl transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 animate-pulse">
            {stats.transactions.toLocaleString()}
          </div>
          <div className="text-sm text-gray-300">Transactions</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-2xl transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2 animate-pulse">
            {stats.twitterFollowers.toLocaleString()}
          </div>
          <div className="text-sm text-gray-300">Twitter</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-2xl transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2 animate-pulse">
            {stats.telegramMembers.toLocaleString()}
          </div>
          <div className="text-sm text-gray-300">Telegram</div>
        </div>
      </div>
    </div>
  )
}
