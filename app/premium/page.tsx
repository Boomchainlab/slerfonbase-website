"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

interface SubscriptionTier {
  id: string
  name: string
  description: string
  price_monthly: number
  price_yearly: number
  features: string[]
  max_alerts: number
  max_portfolios: number
  priority_support: boolean
  early_access: boolean
}

export default function PremiumPage() {
  const [tiers, setTiers] = useState<SubscriptionTier[]>([])
  const [loading, setLoading] = useState(true)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  useEffect(() => {
    fetchSubscriptionTiers()
  }, [])

  const fetchSubscriptionTiers = async () => {
    try {
      const response = await fetch("/api/subscriptions/tiers")
      const data = await response.json()
      setTiers(data)
    } catch (error) {
      console.error("Failed to fetch subscription tiers:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubscribe = async (tierId: string) => {
    try {
      const response = await fetch("/api/subscriptions/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tierId, billingCycle }),
      })

      const { checkoutUrl } = await response.json()
      window.location.href = checkoutUrl
    } catch (error) {
      console.error("Failed to create subscription:", error)
    }
  }

  const getTierIcon = (tierName: string) => {
    switch (tierName.toLowerCase()) {
      case "free":
        return <Star className="h-6 w-6 text-gray-400" />
      case "pro":
        return <Zap className="h-6 w-6 text-blue-500" />
      case "vip":
        return <Crown className="h-6 w-6 text-yellow-500" />
      default:
        return <Star className="h-6 w-6" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading premium plans...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Unlock Premium SLERF Features</h1>
          <p className="text-xl text-blue-100 mb-8">Choose the perfect plan to maximize your SLERF experience</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === "monthly" ? "text-white font-semibold" : "text-blue-200"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-16 h-8 bg-blue-500 rounded-full transition-colors duration-200"
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                  billingCycle === "yearly" ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === "yearly" ? "text-white font-semibold" : "text-blue-200"}`}>
              Yearly
            </span>
            {billingCycle === "yearly" && <Badge className="bg-green-500 text-white">Save 17%</Badge>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative ${
                tier.name === "Pro" ? "border-2 border-yellow-400 shadow-2xl scale-105" : "border-gray-200"
              }`}
            >
              {tier.name === "Pro" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-black font-semibold px-4 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{getTierIcon(tier.name)}</div>
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${billingCycle === "monthly" ? tier.price_monthly : tier.price_yearly}
                  </span>
                  <span className="text-gray-500">/{billingCycle === "monthly" ? "month" : "year"}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{tier.max_alerts} price alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">
                      {tier.max_portfolios} portfolio{tier.max_portfolios > 1 ? "s" : ""}
                    </span>
                  </li>
                  {tier.priority_support && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Priority support</span>
                    </li>
                  )}
                  {tier.early_access && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Early access to features</span>
                    </li>
                  )}
                </ul>

                <Button
                  onClick={() => handleSubscribe(tier.id)}
                  className={`w-full ${
                    tier.name === "Free"
                      ? "bg-gray-500 hover:bg-gray-600"
                      : tier.name === "Pro"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-yellow-500 hover:bg-yellow-600 text-black"
                  }`}
                  disabled={tier.name === "Free"}
                >
                  {tier.name === "Free" ? "Current Plan" : `Subscribe to ${tier.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue Features */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Additional Revenue Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Affiliate Program</CardTitle>
                <CardDescription className="text-blue-100">Earn up to 20% commission on referrals</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Advertising Space</CardTitle>
                <CardDescription className="text-blue-100">Promote your project to SLERF community</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Premium Analytics</CardTitle>
                <CardDescription className="text-blue-100">Advanced trading insights and data</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">VIP Community</CardTitle>
                <CardDescription className="text-blue-100">Exclusive access to alpha calls</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
