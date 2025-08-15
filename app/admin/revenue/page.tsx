"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Users, TrendingUp, Target } from "lucide-react"

interface RevenueData {
  totalRevenue: number
  subscriptionRevenue: number
  adRevenue: number
  affiliateRevenue: number
  activeSubscriptions: number
  activeCampaigns: number
  revenueByDay: Record<string, number>
}

export default function RevenueDashboard() {
  const [revenueData, setRevenueData] = useState<RevenueData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRevenueData()
  }, [])

  const fetchRevenueData = async () => {
    try {
      const response = await fetch("/api/revenue/dashboard")
      const data = await response.json()
      setRevenueData(data)
    } catch (error) {
      console.error("Failed to fetch revenue data:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading revenue dashboard...</div>
      </div>
    )
  }

  if (!revenueData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
        <div className="text-white text-xl">Failed to load revenue data</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">SLERF Revenue Dashboard</h1>
          <p className="text-xl text-blue-100">Track your earnings and monetization performance</p>
        </div>

        {/* Revenue Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Revenue (30d)</CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${revenueData.totalRevenue.toLocaleString()}</div>
              <Badge className="bg-green-500/20 text-green-400 mt-2">+12.5% from last month</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Subscribers</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{revenueData.activeSubscriptions}</div>
              <Badge className="bg-blue-500/20 text-blue-400 mt-2">+8 this week</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Subscription Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${revenueData.subscriptionRevenue.toLocaleString()}</div>
              <Badge className="bg-purple-500/20 text-purple-400 mt-2">
                {((revenueData.subscriptionRevenue / revenueData.totalRevenue) * 100).toFixed(1)}% of total
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Ad Campaigns</CardTitle>
              <Target className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{revenueData.activeCampaigns}</div>
              <Badge className="bg-yellow-500/20 text-yellow-400 mt-2">
                ${revenueData.adRevenue.toLocaleString()} revenue
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Revenue Sources</CardTitle>
              <CardDescription className="text-blue-100">Breakdown by revenue stream</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Subscriptions</span>
                  <span className="text-green-400 font-semibold">
                    ${revenueData.subscriptionRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Advertising</span>
                  <span className="text-blue-400 font-semibold">${revenueData.adRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Affiliate Commissions</span>
                  <span className="text-purple-400 font-semibold">
                    ${revenueData.affiliateRevenue.toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Growth Opportunities</CardTitle>
              <CardDescription className="text-blue-100">Ways to increase revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <h4 className="text-green-400 font-semibold">Premium Features</h4>
                  <p className="text-sm text-green-100">Add more exclusive tools for VIP members</p>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <h4 className="text-blue-400 font-semibold">Sponsored Content</h4>
                  <p className="text-sm text-blue-100">Partner with projects for sponsored posts</p>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <h4 className="text-purple-400 font-semibold">Trading Fees</h4>
                  <p className="text-sm text-purple-100">Implement small fees on DEX transactions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
