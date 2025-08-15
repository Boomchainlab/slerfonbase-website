"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
    // Enable analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      })
    }
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
    // Disable analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      })
    }
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm text-white p-4 z-50 border-t border-yellow-400">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            We use cookies to enhance your experience and analyze our traffic. By continuing to use our site, you
            consent to our use of cookies.{" "}
            <a href="/privacy" className="text-yellow-400 hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={declineCookies}
            variant="outline"
            className="border-gray-400 text-gray-300 hover:bg-gray-800 bg-transparent"
          >
            Decline
          </Button>
          <Button onClick={acceptCookies} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
