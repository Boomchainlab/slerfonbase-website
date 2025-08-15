"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, X } from "lucide-react"

export function NotificationManager() {
  const [permission, setPermission] = useState<NotificationPermission>("default")
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission)

      // Show prompt if permission is default and user hasn't dismissed it
      if (Notification.permission === "default" && !localStorage.getItem("notification-prompt-dismissed")) {
        setTimeout(() => setShowPrompt(true), 5000) // Show after 5 seconds
      }
    }
  }, [])

  const requestPermission = async () => {
    if ("Notification" in window) {
      const result = await Notification.requestPermission()
      setPermission(result)
      setShowPrompt(false)

      if (result === "granted") {
        // Send welcome notification
        new Notification("SLERF Notifications Enabled!", {
          body: "You'll now receive price alerts and important updates",
          icon: "/slerf-logo.png",
          badge: "/favicon-32x32.png",
        })

        // Register for price alerts
        registerPriceAlerts()
      }
    }
  }

  const registerPriceAlerts = () => {
    // Simulate price monitoring (in real app, this would be a service worker)
    setInterval(() => {
      const shouldAlert = Math.random() > 0.95 // 5% chance every check
      if (shouldAlert && permission === "granted") {
        const priceChange = (Math.random() - 0.5) * 20 // -10% to +10%
        const isPositive = priceChange > 0

        new Notification(`SLERF Price Alert!`, {
          body: `SLERF is ${isPositive ? "up" : "down"} ${Math.abs(priceChange).toFixed(1)}% - $${(0.00156 * (1 + priceChange / 100)).toFixed(5)}`,
          icon: "/slerf-logo.png",
          badge: "/favicon-32x32.png",
          tag: "price-alert",
        })
      }
    }, 30000) // Check every 30 seconds
  }

  const dismissPrompt = () => {
    setShowPrompt(false)
    localStorage.setItem("notification-prompt-dismissed", "true")
  }

  if (!showPrompt || !("Notification" in window)) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Enable Notifications
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={dismissPrompt} className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-gray-300 mb-3">Get instant price alerts and important SLERF updates!</p>
          <div className="flex space-x-2">
            <Button
              onClick={requestPermission}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs"
            >
              Enable
            </Button>
            <Button onClick={dismissPrompt} variant="outline" className="flex-1 text-xs bg-transparent">
              Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
