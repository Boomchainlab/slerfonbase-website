"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Rewards() {
  const [userPoints, setUserPoints] = useState(2450)
  const [userLevel, setUserLevel] = useState(3)
  const [nextLevelPoints, setNextLevelPoints] = useState(3000)
  const [claimableRewards, setClaimableRewards] = useState(125.5)

  const achievements = [
    { id: 1, name: "First Purchase", description: "Buy your first SLERF tokens", completed: true, points: 100 },
    { id: 2, name: "Diamond Hands", description: "Hold SLERF for 30 days", completed: true, points: 500 },
    { id: 3, name: "Community Member", description: "Join Telegram and Twitter", completed: true, points: 200 },
    { id: 4, name: "Whale Status", description: "Hold 1M+ SLERF tokens", completed: false, points: 1000 },
    { id: 5, name: "Referral Master", description: "Refer 10 new holders", completed: false, points: 750 },
    { id: 6, name: "Staking Pro", description: "Stake tokens for 60 days", completed: false, points: 800 },
  ]

  const rewardTiers = [
    { level: 1, points: 0, name: "Sleepy Sloth", rewards: "5% trading fee discount" },
    { level: 2, points: 1000, name: "Active Sloth", rewards: "10% trading fee discount + NFT" },
    { level: 3, points: 2500, name: "Energetic Sloth", rewards: "15% discount + Exclusive merch" },
    { level: 4, points: 5000, name: "Super Sloth", rewards: "20% discount + VIP access" },
    { level: 5, points: 10000, name: "Legendary Sloth", rewards: "25% discount + All perks" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Holder Rewards</h1>
          <p className="text-xl">Earn points and unlock exclusive benefits</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* User Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Total Points</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-yellow-400">{userPoints.toLocaleString()}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Current Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-400">{userLevel}</p>
                <p className="text-sm text-gray-300">{rewardTiers[userLevel - 1]?.name}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Next Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-400">{nextLevelPoints - userPoints}</p>
                <p className="text-sm text-gray-300">points needed</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Claimable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-400">{claimableRewards}</p>
                <p className="text-sm text-gray-300">SLERF tokens</p>
              </CardContent>
            </Card>
          </div>

          {/* Progress Bar */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Level Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Level {userLevel}</span>
                  <span>Level {userLevel + 1}</span>
                </div>
                <Progress value={(userPoints / nextLevelPoints) * 100} className="h-3" />
                <p className="text-sm text-gray-300 text-center">
                  {userPoints} / {nextLevelPoints} points
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Achievements */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🏆 Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border ${
                        achievement.completed ? "bg-green-500/20 border-green-500" : "bg-white/5 border-white/10"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{achievement.name}</h4>
                          <p className="text-sm text-gray-300">{achievement.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-yellow-400 font-bold">+{achievement.points}</p>
                          {achievement.completed && <p className="text-green-400 text-xs">✓ Completed</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reward Tiers */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🎁 Reward Tiers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rewardTiers.map((tier) => (
                    <div
                      key={tier.level}
                      className={`p-4 rounded-lg border ${
                        userLevel >= tier.level ? "bg-yellow-400/20 border-yellow-400" : "bg-white/5 border-white/10"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">
                            Level {tier.level}: {tier.name}
                          </h4>
                          <p className="text-sm text-gray-300">{tier.rewards}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-blue-400 font-bold">{tier.points.toLocaleString()}</p>
                          {userLevel >= tier.level && <p className="text-yellow-400 text-xs">✓ Unlocked</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full mr-4">
              Claim Rewards
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full">
              View Referrals
            </Button>
          </div>
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
