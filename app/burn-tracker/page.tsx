"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BurnTracker() {
  const [burnStats, setBurnStats] = useState({
    totalBurned: 25000000,
    burnEvents: 12,
    lastBurn: "2024-01-15",
    nextBurn: "2024-02-01",
    burnRate: 2.5,
    remainingSupply: 975000000,
  })

  const burnHistory = [
    { date: "2024-01-15", amount: 5000000, txHash: "0x1234...5678", trigger: "Manual Burn", price: 0.00145 },
    { date: "2024-01-01", amount: 3000000, txHash: "0x2345...6789", trigger: "Volume Milestone", price: 0.00132 },
    { date: "2023-12-15", amount: 4000000, txHash: "0x3456...7890", trigger: "Community Vote", price: 0.00128 },
    { date: "2023-12-01", amount: 2500000, txHash: "0x4567...8901", trigger: "Auto Burn", price: 0.00119 },
    { date: "2023-11-15", amount: 6000000, txHash: "0x5678...9012", trigger: "Manual Burn", price: 0.00115 },
  ]

  const burnMechanisms = [
    {
      name: "Trading Fee Burns",
      description: "1% of all trading fees are automatically burned",
      frequency: "Continuous",
      status: "Active",
    },
    {
      name: "Volume Milestone Burns",
      description: "Burn tokens when daily volume exceeds $500K",
      frequency: "Conditional",
      status: "Active",
    },
    {
      name: "Community Vote Burns",
      description: "Community can vote to burn treasury tokens",
      frequency: "On-demand",
      status: "Active",
    },
    {
      name: "Deflationary Events",
      description: "Special burns during major milestones",
      frequency: "Quarterly",
      status: "Planned",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">🔥 Burn Tracker</h1>
          <p className="text-xl">Track SLERF token burns and deflationary mechanisms</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Burn Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Total Burned</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-red-400">{(burnStats.totalBurned / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-gray-300">SLERF</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Burn Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-orange-400">{burnStats.burnRate}%</p>
                <p className="text-xs text-gray-300">of Supply</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Burn Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-yellow-400">{burnStats.burnEvents}</p>
                <p className="text-xs text-gray-300">Total</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Remaining Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-green-400">{(burnStats.remainingSupply / 1000000).toFixed(0)}M</p>
                <p className="text-xs text-gray-300">SLERF</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Last Burn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-blue-400">{burnStats.lastBurn}</p>
                <p className="text-xs text-gray-300">Date</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs">Next Burn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-purple-400">{burnStats.nextBurn}</p>
                <p className="text-xs text-gray-300">Scheduled</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Burn History */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Burn History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {burnHistory.map((burn, index) => (
                    <div key={index} className="p-4 bg-red-500/20 border border-red-500 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-red-400">🔥 {(burn.amount / 1000000).toFixed(1)}M SLERF</p>
                          <p className="text-sm text-gray-300">{burn.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold">{burn.trigger}</p>
                          <p className="text-xs text-gray-300">Price: ${burn.price.toFixed(5)}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">TX: {burn.txHash}</span>
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                          View TX
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Burn Mechanisms */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Burn Mechanisms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {burnMechanisms.map((mechanism, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{mechanism.name}</h4>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            mechanism.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {mechanism.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">{mechanism.description}</p>
                      <p className="text-xs text-gray-400">Frequency: {mechanism.frequency}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Burn Impact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Burn Impact Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-400">-2.5%</p>
                  <p className="text-sm text-gray-300">Supply Reduction</p>
                  <p className="text-xs text-gray-400">25M tokens burned</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">+18.7%</p>
                  <p className="text-sm text-gray-300">Price Impact</p>
                  <p className="text-xs text-gray-400">Since first burn</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-400">$39K</p>
                  <p className="text-sm text-gray-300">Value Burned</p>
                  <p className="text-xs text-gray-400">Total USD value</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Burn Vote */}
          <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white mt-6">
            <CardHeader>
              <CardTitle>🗳️ Community Burn Vote</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-xl mb-4">Vote to burn 10M SLERF from treasury!</p>
                <div className="flex justify-center space-x-4 mb-4">
                  <Button className="bg-white text-black hover:bg-gray-100 font-bold py-2 px-6">Vote Yes</Button>
                  <Button className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-6">Vote No</Button>
                </div>
                <p className="text-sm">Voting ends in 5 days • 1,247 votes so far</p>
              </div>
            </CardContent>
          </Card>
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
