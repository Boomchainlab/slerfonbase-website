"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TradingCompetition() {
  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, address: "0x1234...5678", volume: 125000, pnl: 15.5, prize: "10,000 SLERF" },
    { rank: 2, address: "0x2345...6789", volume: 98000, pnl: 12.3, prize: "7,500 SLERF" },
    { rank: 3, address: "0x3456...7890", volume: 87500, pnl: 10.8, prize: "5,000 SLERF" },
    { rank: 4, address: "0x4567...8901", volume: 76000, pnl: 9.2, prize: "2,500 SLERF" },
    { rank: 5, address: "0x5678...9012", volume: 65000, pnl: 8.1, prize: "1,000 SLERF" },
  ])

  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 18,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Trading Competition</h1>
          <p className="text-xl">Compete for amazing SLERF prizes!</p>
        </div>

        {/* Competition Timer */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center">Competition Ends In</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-yellow-400">{timeLeft.days}</p>
                <p className="text-sm text-gray-300">Days</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">{timeLeft.hours}</p>
                <p className="text-sm text-gray-300">Hours</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">{timeLeft.minutes}</p>
                <p className="text-sm text-gray-300">Minutes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">{timeLeft.seconds}</p>
                <p className="text-sm text-gray-300">Seconds</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prize Pool */}
        <Card className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black mb-8 max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Total Prize Pool</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold">50,000 SLERF</p>
            <p className="text-lg">+ Exclusive NFTs</p>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center">🏆 Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((trader) => (
                  <div
                    key={trader.rank}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      trader.rank === 1
                        ? "bg-yellow-400/20 border border-yellow-400"
                        : trader.rank === 2
                          ? "bg-gray-400/20 border border-gray-400"
                          : trader.rank === 3
                            ? "bg-orange-400/20 border border-orange-400"
                            : "bg-white/5"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          trader.rank === 1
                            ? "bg-yellow-400 text-black"
                            : trader.rank === 2
                              ? "bg-gray-400 text-black"
                              : trader.rank === 3
                                ? "bg-orange-400 text-black"
                                : "bg-white/20 text-white"
                        }`}
                      >
                        {trader.rank}
                      </div>
                      <div>
                        <p className="font-semibold">{trader.address}</p>
                        <p className="text-sm text-gray-300">Volume: ${trader.volume.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-400">+{trader.pnl}%</p>
                      <p className="text-sm text-yellow-400">{trader.prize}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Competition Rules */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Competition Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Competition runs for 30 days from launch</li>
                <li>• Rankings based on trading volume and P&L performance</li>
                <li>• Minimum 10 trades required to qualify</li>
                <li>• Winners announced within 48 hours of competition end</li>
                <li>• Prizes distributed automatically to winning wallets</li>
                <li>• Top 3 winners receive exclusive SLERF NFTs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full mr-4">
            Join Competition
          </Button>
          <a href="/" className="text-yellow-400 hover:text-yellow-300 underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
