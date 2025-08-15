"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function Airdrop() {
  const [walletAddress, setWalletAddress] = useState("")
  const [isEligible, setIsEligible] = useState<boolean | null>(null)
  const [claimAmount, setClaimAmount] = useState(0)
  const [hasClaimed, setHasClaimed] = useState(false)

  const airdropCampaigns = [
    {
      id: 1,
      name: "Early Adopter Airdrop",
      description: "Reward for early SLERF supporters",
      totalTokens: 50000000,
      claimed: 35000000,
      participants: 2847,
      status: "Active",
      endDate: "2024-02-15",
    },
    {
      id: 2,
      name: "Community Builder Airdrop",
      description: "For active community members and contributors",
      totalTokens: 25000000,
      claimed: 8500000,
      participants: 1256,
      status: "Active",
      endDate: "2024-02-28",
    },
    {
      id: 3,
      name: "Social Media Airdrop",
      description: "Reward for social media engagement",
      totalTokens: 15000000,
      claimed: 15000000,
      participants: 3421,
      status: "Completed",
      endDate: "2024-01-31",
    },
  ]

  const eligibilityCriteria = [
    { criteria: "Hold SLERF for 30+ days", points: 1000, met: true },
    { criteria: "Follow @slerf00 on Twitter", points: 500, met: true },
    { criteria: "Join Telegram community", points: 500, met: true },
    { criteria: "Refer 3+ new holders", points: 1500, met: false },
    { criteria: "Participate in governance", points: 2000, met: false },
    { criteria: "Create SLERF content", points: 1000, met: true },
  ]

  const checkEligibility = () => {
    // Simulate eligibility check
    const totalPoints = eligibilityCriteria.filter((c) => c.met).reduce((sum, c) => sum + c.points, 0)
    const eligible = totalPoints >= 2000
    setIsEligible(eligible)
    setClaimAmount(eligible ? Math.floor(totalPoints * 10) : 0)
  }

  const claimAirdrop = () => {
    if (isEligible && !hasClaimed) {
      setHasClaimed(true)
      // In real implementation, this would interact with smart contract
      alert(`Successfully claimed ${claimAmount.toLocaleString()} SLERF tokens!`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">🪂 Airdrop Campaigns</h1>
          <p className="text-xl">Claim your free SLERF tokens!</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Active Campaigns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {airdropCampaigns.map((campaign) => (
              <Card key={campaign.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white text-lg">{campaign.name}</CardTitle>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        campaign.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{campaign.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{((campaign.claimed / campaign.totalTokens) * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={(campaign.claimed / campaign.totalTokens) * 100} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-300">Total Pool</p>
                        <p className="font-bold text-yellow-400">{(campaign.totalTokens / 1000000).toFixed(0)}M</p>
                      </div>
                      <div>
                        <p className="text-gray-300">Participants</p>
                        <p className="font-bold text-green-400">{campaign.participants.toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">Ends: {campaign.endDate}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Eligibility Checker */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Check Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Wallet Address</label>
                  <Input
                    placeholder="0x..."
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                <Button
                  onClick={checkEligibility}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3"
                  disabled={!walletAddress}
                >
                  Check Eligibility
                </Button>

                {isEligible !== null && (
                  <div
                    className={`p-4 rounded-lg ${isEligible ? "bg-green-500/20 border border-green-500" : "bg-red-500/20 border border-red-500"}`}
                  >
                    {isEligible ? (
                      <div>
                        <p className="font-semibold text-green-400 mb-2">✅ You're Eligible!</p>
                        <p className="text-sm mb-3">You can claim {claimAmount.toLocaleString()} SLERF tokens</p>
                        <Button
                          onClick={claimAirdrop}
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold"
                          disabled={hasClaimed}
                        >
                          {hasClaimed ? "Claimed!" : "Claim Airdrop"}
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <p className="font-semibold text-red-400 mb-2">❌ Not Eligible</p>
                        <p className="text-sm">You need to meet more criteria to qualify for the airdrop.</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Eligibility Criteria */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {eligibilityCriteria.map((criterion, index) => (
                    <div key={index} className={`p-3 rounded-lg ${criterion.met ? "bg-green-500/20" : "bg-white/5"}`}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{criterion.criteria}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-400 font-bold text-sm">+{criterion.points}</span>
                          {criterion.met ? (
                            <span className="text-green-400 text-xs">✓</span>
                          ) : (
                            <span className="text-gray-400 text-xs">○</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-yellow-400/20 rounded-lg">
                  <p className="text-sm font-semibold">Minimum 2,000 points required to qualify</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Airdrops */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Upcoming Airdrops</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold mb-2">🎯 Trader Rewards Airdrop</h4>
                  <p className="text-sm text-gray-300 mb-2">Reward active traders and liquidity providers</p>
                  <p className="text-xs text-gray-400">Launch: March 2024 • Pool: 30M SLERF</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold mb-2">🌟 Anniversary Airdrop</h4>
                  <p className="text-sm text-gray-300 mb-2">Celebrate SLERF's first anniversary</p>
                  <p className="text-xs text-gray-400">Launch: April 2024 • Pool: 100M SLERF</p>
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
