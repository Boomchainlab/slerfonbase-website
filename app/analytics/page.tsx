"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Analytics() {
  const [marketData, setMarketData] = useState({
    price: 0.00156,
    marketCap: 1560000,
    volume24h: 245000,
    holders: 12847,
    transactions24h: 1456,
    liquidityLocked: 85.5,
  })

  const [whaleMovements, setWhaleMovements] = useState([
    { time: "2 min ago", address: "0x1234...5678", type: "Buy", amount: 2500000, value: 3900, impact: "+2.1%" },
    { time: "15 min ago", address: "0x2345...6789", type: "Sell", amount: 1800000, value: 2808, impact: "-1.8%" },
    { time: "32 min ago", address: "0x3456...7890", type: "Buy", amount: 3200000, value: 4992, impact: "+3.2%" },
    { time: "1 hour ago", address: "0x4567...8901", type: "Transfer", amount: 5000000, value: 7800, impact: "0%" },
  ])

  const [holderDistribution, setHolderDistribution] = useState([
    { range: "1M+ SLERF", holders: 156, percentage: 1.2, tokens: "45%" },
    { range: "100K-1M", holders: 1247, percentage: 9.7, tokens: "35%" },
    { range: "10K-100K", holders: 3891, percentage: 30.3, tokens: "15%" },
    { range: "1K-10K", holders: 5234, percentage: 40.7, tokens: "4%" },
    { range: "<1K", holders: 2319, percentage: 18.1, tokens: "1%" },
  ])

  const [sentimentData, setSentimentData] = useState({
    twitter: { score: 78, trend: "up", mentions: 1247 },
    reddit: { score: 82, trend: "up", mentions: 456 },
    telegram: { score: 85, trend: "stable", members: 8934 },
    overall: { score: 81, trend: "up" },
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Analytics Dashboard</h1>
          <p className="text-xl">Real-time SLERF token analytics and insights</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Price</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-green-400">${marketData.price.toFixed(5)}</p>
                <p className="text-xs text-green-400">+12.5%</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Market Cap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-yellow-400">${(marketData.marketCap / 1000000).toFixed(2)}M</p>
                <p className="text-xs text-green-400">+8.3%</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">24h Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-blue-400">${(marketData.volume24h / 1000).toFixed(0)}K</p>
                <p className="text-xs text-green-400">+15.7%</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Holders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-purple-400">{marketData.holders.toLocaleString()}</p>
                <p className="text-xs text-green-400">+156</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">24h Txns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-orange-400">{marketData.transactions24h.toLocaleString()}</p>
                <p className="text-xs text-green-400">+23.1%</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Liquidity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-green-400">{marketData.liquidityLocked}%</p>
                <p className="text-xs text-gray-300">Locked</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="whale-tracker" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white/10">
              <TabsTrigger value="whale-tracker">Whale Tracker</TabsTrigger>
              <TabsTrigger value="holders">Holder Analytics</TabsTrigger>
              <TabsTrigger value="sentiment">Social Sentiment</TabsTrigger>
              <TabsTrigger value="trading">Trading Heat</TabsTrigger>
            </TabsList>

            <TabsContent value="whale-tracker">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">鲸 Whale Movements</CardTitle>
                  <p className="text-gray-300 text-sm">Large transactions (&gt;$1000) in real-time</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {whaleMovements.map((movement, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          movement.type === "Buy"
                            ? "bg-green-500/20 border-green-500"
                            : movement.type === "Sell"
                              ? "bg-red-500/20 border-red-500"
                              : "bg-blue-500/20 border-blue-500"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span
                                className={`px-2 py-1 rounded text-xs font-semibold ${
                                  movement.type === "Buy"
                                    ? "bg-green-500 text-white"
                                    : movement.type === "Sell"
                                      ? "bg-red-500 text-white"
                                      : "bg-blue-500 text-white"
                                }`}
                              >
                                {movement.type}
                              </span>
                              <span className="text-sm text-gray-300">{movement.time}</span>
                            </div>
                            <p className="font-semibold mt-1">{movement.address}</p>
                            <p className="text-sm text-gray-300">
                              {movement.amount.toLocaleString()} SLERF (${movement.value.toLocaleString()})
                            </p>
                          </div>
                          <div className="text-right">
                            <p
                              className={`font-bold ${
                                movement.impact.startsWith("+") ? "text-green-400" : "text-red-400"
                              }`}
                            >
                              {movement.impact}
                            </p>
                            <p className="text-xs text-gray-300">Price Impact</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="holders">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Holder Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {holderDistribution.map((tier, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{tier.range}</span>
                            <span>
                              {tier.holders} holders ({tier.percentage}%)
                            </span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${tier.percentage * 2}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-300">Controls {tier.tokens} of supply</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Diamond Hands Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-yellow-400">73.2%</p>
                        <p className="text-sm text-gray-300">Holders for 30+ days</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-xl font-bold text-green-400">89.5%</p>
                          <p className="text-xs text-gray-300">7+ days</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-blue-400">45.8%</p>
                          <p className="text-xs text-gray-300">90+ days</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Average Hold Time</span>
                          <span className="font-bold">42 days</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Longest Holder</span>
                          <span className="font-bold">156 days</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>New Holders (24h)</span>
                          <span className="font-bold text-green-400">+156</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sentiment">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Social Sentiment Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-green-400">{sentimentData.overall.score}</p>
                        <p className="text-sm text-gray-300">Overall Sentiment Score</p>
                        <p className="text-xs text-green-400">↗ Trending {sentimentData.overall.trend}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-400">🐦 Twitter</span>
                            <span className="text-sm text-gray-300">{sentimentData.twitter.mentions} mentions</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-green-400">{sentimentData.twitter.score}</span>
                            <span className="text-xs text-green-400 ml-1">↗</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <span className="text-orange-400">📱 Reddit</span>
                            <span className="text-sm text-gray-300">{sentimentData.reddit.mentions} mentions</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-green-400">{sentimentData.reddit.score}</span>
                            <span className="text-xs text-green-400 ml-1">↗</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-300">✈️ Telegram</span>
                            <span className="text-sm text-gray-300">{sentimentData.telegram.members} members</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-green-400">{sentimentData.telegram.score}</span>
                            <span className="text-xs text-gray-400 ml-1">→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Trending Keywords</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {[
                          { word: "moon", count: 234 },
                          { word: "diamond hands", count: 189 },
                          { word: "hodl", count: 156 },
                          { word: "base chain", count: 134 },
                          { word: "slerf army", count: 98 },
                          { word: "bullish", count: 87 },
                          { word: "gem", count: 76 },
                          { word: "sloth power", count: 65 },
                        ].map((keyword, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold"
                          >
                            #{keyword.word} ({keyword.count})
                          </span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Recent Mentions</h4>
                        <div className="space-y-2 text-sm">
                          <p className="text-gray-300">"SLERF is the next big thing on Base! 🚀" - @cryptowhale</p>
                          <p className="text-gray-300">"Diamond handing my SLERF bag 💎" - @slothhodler</p>
                          <p className="text-gray-300">"Best community in crypto! #SLERF" - @basebuilder</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trading">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Trading Volume Heatmap</CardTitle>
                  <p className="text-gray-300 text-sm">24-hour trading activity by hour (UTC)</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-12 gap-1 mb-4">
                    {Array.from({ length: 24 }, (_, i) => {
                      const volume = Math.random() * 100
                      const intensity = volume > 75 ? "high" : volume > 50 ? "medium" : volume > 25 ? "low" : "minimal"
                      return (
                        <div key={i} className="text-center">
                          <div
                            className={`h-8 rounded mb-1 ${
                              intensity === "high"
                                ? "bg-red-500"
                                : intensity === "medium"
                                  ? "bg-yellow-500"
                                  : intensity === "low"
                                    ? "bg-green-500"
                                    : "bg-gray-600"
                            }`}
                            title={`${i}:00 UTC - $${(volume * 1000).toFixed(0)}`}
                          ></div>
                          <span className="text-xs text-gray-400">{i}</span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex justify-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-gray-600 rounded"></div>
                      <span>Low</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span>Medium</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                      <span>High</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span>Very High</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-400">14:00</p>
                      <p className="text-sm text-gray-300">Peak Trading Hour</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-400">$89K</p>
                      <p className="text-sm text-gray-300">Peak Hour Volume</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-400">456</p>
                      <p className="text-sm text-gray-300">Peak Hour Transactions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="text-yellow-400 hover:text-yellow-300 underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
