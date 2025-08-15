"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Staking() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [stakedBalance, setStakedBalance] = useState(2500000)
  const [rewards, setRewards] = useState(125.5)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">SLERF Staking</h1>
          <p className="text-xl">Stake your SLERF tokens and earn rewards</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Total Staked</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-yellow-400">{stakedBalance.toLocaleString()}</p>
                <p className="text-sm text-gray-300">SLERF</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Pending Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-400">{rewards.toFixed(2)}</p>
                <p className="text-sm text-gray-300">SLERF</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">APY</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-400">25.5%</p>
                <p className="text-sm text-gray-300">Annual</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Stake SLERF</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Amount to Stake</label>
                  <Input
                    type="number"
                    placeholder="Enter SLERF amount"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3">
                  Stake SLERF
                </Button>
                <p className="text-xs text-gray-300">Minimum stake: 100,000 SLERF • Lock period: 30 days</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Unstake & Rewards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Staked Balance:</span>
                    <span className="font-bold">{stakedBalance.toLocaleString()} SLERF</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending Rewards:</span>
                    <span className="font-bold text-green-400">{rewards.toFixed(2)} SLERF</span>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3">
                  Claim Rewards
                </Button>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3">Unstake All</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Staking Pool Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-400">156M</p>
                  <p className="text-sm text-gray-300">Total Pool Size</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">1,247</p>
                  <p className="text-sm text-gray-300">Total Stakers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">25.5%</p>
                  <p className="text-sm text-gray-300">Current APY</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">30 days</p>
                  <p className="text-sm text-gray-300">Lock Period</p>
                </div>
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
