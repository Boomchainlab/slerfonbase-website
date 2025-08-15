"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Ambassador() {
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    twitter: "",
    telegram: "",
    experience: "",
    motivation: "",
  })

  const ambassadors = [
    {
      name: "SlothMaster",
      twitter: "@slothmaster_crypto",
      contributions: 156,
      rewards: 25000,
      level: "Diamond",
      avatar: "/sloth-avatar-1.png",
    },
    {
      name: "CryptoSloth",
      twitter: "@cryptosloth_base",
      contributions: 89,
      rewards: 15000,
      level: "Gold",
      avatar: "/sloth-avatar-2.png",
    },
    {
      name: "SlerfChampion",
      twitter: "@slerf_champion",
      contributions: 67,
      rewards: 12000,
      level: "Gold",
      avatar: "/sloth-avatar-3.png",
    },
    {
      name: "LazyTrader",
      twitter: "@lazy_trader_slerf",
      contributions: 45,
      rewards: 8000,
      level: "Silver",
      avatar: "/sloth-avatar-4.png",
    },
  ]

  const benefits = [
    {
      level: "Bronze",
      requirements: "10+ contributions",
      rewards: "500 SLERF/month + Exclusive badge",
      perks: ["Early access to features", "Community recognition"],
    },
    {
      level: "Silver",
      requirements: "25+ contributions",
      rewards: "1,500 SLERF/month + NFT",
      perks: ["Direct team access", "Beta testing", "Merchandise"],
    },
    {
      level: "Gold",
      requirements: "50+ contributions",
      rewards: "3,000 SLERF/month + Premium NFT",
      perks: ["Strategy calls", "Event invites", "Revenue sharing"],
    },
    {
      level: "Diamond",
      requirements: "100+ contributions",
      rewards: "5,000 SLERF/month + Legendary NFT",
      perks: ["Advisory role", "Token allocation", "Partnership opportunities"],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Application submitted! We'll review and get back to you within 48 hours.")
    setApplicationData({
      name: "",
      email: "",
      twitter: "",
      telegram: "",
      experience: "",
      motivation: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">🌟 Ambassador Program</h1>
          <p className="text-xl">Join the SLERF ambassador team and earn rewards!</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Program Overview */}
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Become a SLERF Ambassador</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Help grow the SLERF community and earn exclusive rewards! Our ambassadors are the backbone of our
                ecosystem, spreading awareness and building connections.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm">Active Ambassadors</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">500K+</p>
                  <p className="text-sm">SLERF Distributed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-sm">Countries Reached</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Top Ambassadors */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🏆 Top Ambassadors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ambassadors.map((ambassador, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                      <img
                        src={ambassador.avatar || "/placeholder.svg"}
                        alt={ambassador.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold">{ambassador.name}</p>
                            <p className="text-sm text-gray-300">{ambassador.twitter}</p>
                          </div>
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              ambassador.level === "Diamond"
                                ? "bg-purple-500/20 text-purple-400"
                                : ambassador.level === "Gold"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {ambassador.level}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                          <span>{ambassador.contributions} contributions</span>
                          <span className="text-green-400">{ambassador.rewards.toLocaleString()} SLERF earned</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Apply to Become an Ambassador</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      required
                      value={applicationData.name}
                      onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      required
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Twitter Handle</label>
                    <Input
                      value={applicationData.twitter}
                      onChange={(e) => setApplicationData({ ...applicationData, twitter: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="@yourusername"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telegram Username</label>
                    <Input
                      value={applicationData.telegram}
                      onChange={(e) => setApplicationData({ ...applicationData, telegram: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="@yourusername"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Crypto Experience</label>
                    <Textarea
                      required
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData({ ...applicationData, experience: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="Tell us about your experience in crypto and community building..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Why do you want to be a SLERF ambassador?</label>
                    <Textarea
                      required
                      value={applicationData.motivation}
                      onChange={(e) => setApplicationData({ ...applicationData, motivation: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="Share your motivation and ideas for growing the SLERF community..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Ambassador Levels */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Ambassador Levels & Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      benefit.level === "Diamond"
                        ? "bg-purple-500/20 border-purple-500"
                        : benefit.level === "Gold"
                          ? "bg-yellow-500/20 border-yellow-500"
                          : benefit.level === "Silver"
                            ? "bg-gray-400/20 border-gray-400"
                            : "bg-orange-500/20 border-orange-500"
                    }`}
                  >
                    <h4 className="font-bold text-lg mb-2">{benefit.level}</h4>
                    <p className="text-sm text-gray-300 mb-2">{benefit.requirements}</p>
                    <p className="font-semibold text-green-400 mb-3">{benefit.rewards}</p>
                    <ul className="text-xs space-y-1">
                      {benefit.perks.map((perk, perkIndex) => (
                        <li key={perkIndex}>• {perk}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
