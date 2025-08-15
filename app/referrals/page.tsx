"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Referrals() {
  const [referralCode, setReferralCode] = useState("SLERF-ABC123")
  const [referralStats, setReferralStats] = useState({
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarned: 2450.5,
    pendingRewards: 125.0,
  })

  const referralHistory = [
    { date: "2024-01-15", address: "0x1234...5678", reward: 250, status: "Active" },
    { date: "2024-01-14", address: "0x2345...6789", reward: 250, status: "Active" },
    { date: "2024-01-13", address: "0x3456...7890", reward: 250, status: "Inactive" },
    { date: "2024-01-12", address: "0x4567...8901", reward: 250, status: "Active" },
  ]

  const copyReferralLink = () => {
    const link = `https://slerf.com?ref=${referralCode}`
    navigator.clipboard.writeText(link)
    alert("Referral link copied to clipboard!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Referral Program</h1>
          <p className="text-xl">Earn 250 SLERF for each successful referral!</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Referral Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Total Referrals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-yellow-400">{referralStats.totalReferrals}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Active Referrals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-400">{referralStats.activeReferrals}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Total Earned</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-400">{referralStats.totalEarned.toFixed(1)}</p>
                <p className="text-sm text-gray-300">SLERF</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Pending Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-400">{referralStats.pendingRewards.toFixed(1)}</p>
                <p className="text-sm text-gray-300">SLERF</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Referral Link */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Your Referral Link</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Referral Code</label>
                  <div className="flex space-x-2">
                    <Input value={referralCode} readOnly className="bg-white/10 border-white/20 text-white" />
                    <Button
                      onClick={copyReferralLink}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4"
                    >
                      Copy Link
                    </Button>
                  </div>
                </div>
                <div className="bg-yellow-400/20 border border-yellow-400 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">How it works:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Share your referral link with friends</li>
                    <li>• They buy SLERF using your link</li>
                    <li>• You earn 250 SLERF per successful referral</li>
                    <li>• They get 5% bonus on their first purchase</li>
                  </ul>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3">
                  Claim Pending Rewards
                </Button>
              </CardContent>
            </Card>

            {/* Referral History */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Referral History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {referralHistory.map((referral, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="font-semibold">{referral.address}</p>
                        <p className="text-sm text-gray-300">{referral.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-400">+{referral.reward} SLERF</p>
                        <p className={`text-xs ${referral.status === "Active" ? "text-green-400" : "text-gray-400"}`}>
                          {referral.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Referral Tiers */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Referral Tiers & Bonuses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Bronze Referrer</h4>
                  <p className="text-3xl font-bold mb-2">1-10</p>
                  <p className="text-sm text-gray-300 mb-4">Referrals</p>
                  <p className="text-green-400 font-semibold">250 SLERF per referral</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-blue-400">
                  <h4 className="text-xl font-bold text-blue-400 mb-2">Silver Referrer</h4>
                  <p className="text-3xl font-bold mb-2">11-25</p>
                  <p className="text-sm text-gray-300 mb-4">Referrals</p>
                  <p className="text-green-400 font-semibold">300 SLERF per referral</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">Gold Referrer</h4>
                  <p className="text-3xl font-bold mb-2">26+</p>
                  <p className="text-sm text-gray-300 mb-4">Referrals</p>
                  <p className="text-green-400 font-semibold">400 SLERF per referral</p>
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
