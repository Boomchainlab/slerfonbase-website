"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Users, Zap, Shield, TrendingUp } from "lucide-react"

export default function Partnerships() {
  const partners = [
    {
      name: "Base Network",
      type: "Blockchain Infrastructure",
      description: "Built on Coinbase's secure and scalable Base blockchain",
      logo: "/base-network-logo.png",
      website: "https://base.org",
      status: "Active",
    },
    {
      name: "Uniswap",
      type: "DEX Integration",
      description: "Primary trading venue with deep liquidity pools",
      logo: "/uniswap-logo.png",
      website: "https://uniswap.org",
      status: "Active",
    },
    {
      name: "DexScreener",
      type: "Analytics Platform",
      description: "Real-time trading data and analytics integration",
      logo: "/dexscreener-logo.png",
      website: "https://dexscreener.com",
      status: "Active",
    },
    {
      name: "CoinGecko",
      type: "Data Provider",
      description: "Price tracking and market data aggregation",
      logo: "/coingecko-logo.png",
      website: "https://coingecko.com",
      status: "Pending",
    },
    {
      name: "CoinMarketCap",
      type: "Market Data",
      description: "Global cryptocurrency market data platform",
      logo: "/coinmarketcap-logo.png",
      website: "https://coinmarketcap.com",
      status: "In Progress",
    },
    {
      name: "Phantom Wallet",
      type: "Wallet Integration",
      description: "Seamless wallet connection and transaction support",
      logo: "/phantom-wallet-logo.png",
      website: "https://phantom.app",
      status: "Active",
    },
  ]

  const partnershipTypes = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Technology Partners",
      description: "Blockchain infrastructure, wallets, and development tools",
      benefits: ["Technical integration", "Co-development", "Shared resources"],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Exchange Partners",
      description: "Trading platforms and liquidity providers",
      benefits: ["Listing opportunities", "Market making", "Trading competitions"],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Partners",
      description: "Influencers, content creators, and community builders",
      benefits: ["Cross-promotion", "Content collaboration", "Audience sharing"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Partners",
      description: "Audit firms and security service providers",
      benefits: ["Smart contract audits", "Security assessments", "Risk management"],
    },
  ]

  const upcomingPartnerships = [
    {
      name: "Major CEX Listing",
      type: "Exchange Partnership",
      timeline: "Q2 2024",
      description: "Negotiations with top-tier centralized exchange for SLERF listing",
    },
    {
      name: "NFT Marketplace",
      type: "Platform Integration",
      timeline: "Q2 2024",
      description: "Integration with leading NFT marketplace for SLERF-based collections",
    },
    {
      name: "DeFi Protocol",
      type: "Yield Farming",
      timeline: "Q3 2024",
      description: "Partnership with major DeFi protocol for yield farming opportunities",
    },
    {
      name: "Gaming Platform",
      type: "GameFi Integration",
      timeline: "Q3 2024",
      description: "SLERF integration into popular blockchain gaming ecosystem",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">🤝 Partnerships</h1>
          <p className="text-xl">Building the SLERF ecosystem through strategic collaborations</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Partnership Overview */}
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Partnership Ecosystem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                SLERF collaborates with leading projects and platforms to create a comprehensive ecosystem that benefits
                our community and drives adoption across the Base blockchain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm">Active Partners</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm">Integration Types</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-sm">Platforms Supported</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">$2M+</p>
                  <p className="text-sm">Partnership Value</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Partners */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Current Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="w-12 h-12 rounded" />
                      <div>
                        <h4 className="font-semibold">{partner.name}</h4>
                        <p className="text-xs text-gray-300">{partner.type}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ml-auto ${
                          partner.status === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : partner.status === "Pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {partner.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">{partner.description}</p>
                    <Button
                      size="sm"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() => window.open(partner.website, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Partner
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Partnership Types */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Partnership Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {partnershipTypes.map((type, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-yellow-400">{type.icon}</div>
                      <h4 className="font-semibold text-lg">{type.title}</h4>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">{type.description}</p>
                    <div className="space-y-1">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <p key={benefitIndex} className="text-xs text-green-400">
                          • {benefit}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Partnerships */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Upcoming Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPartnerships.map((partnership, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{partnership.name}</h4>
                        <p className="text-sm text-gray-300">{partnership.type}</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-semibold">
                        {partnership.timeline}
                      </span>
                    </div>
                    <p className="text-sm text-gray-200">{partnership.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Partnership Application */}
          <Card className="bg-gradient-to-r from-green-400 to-blue-400 text-black">
            <CardHeader>
              <CardTitle>Become a Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Partnership Opportunities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Exchange listings and trading integrations</li>
                    <li>• DeFi protocol collaborations</li>
                    <li>• Wallet and infrastructure partnerships</li>
                    <li>• Marketing and community partnerships</li>
                    <li>• Technical integrations and APIs</li>
                    <li>• Cross-chain bridge partnerships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Get in Touch</h4>
                  <p className="text-sm mb-4">
                    Interested in partnering with SLERF? We're always looking for strategic collaborations that benefit
                    our community.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                      partnerships@slerfonbase.com
                    </Button>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                      Partnership Application Form
                    </Button>
                  </div>
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
