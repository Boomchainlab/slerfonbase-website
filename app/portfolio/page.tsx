"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [portfolio, setPortfolio] = useState({
    slerfBalance: 0,
    slerfValue: 0,
    totalValue: 0,
    pnl: 0,
    pnlPercentage: 0,
  })

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        setWalletAddress(accounts[0])
        setWalletConnected(true)
        // Simulate portfolio data
        setPortfolio({
          slerfBalance: 1500000,
          slerfValue: 2340.5,
          totalValue: 2340.5,
          pnl: 340.5,
          pnlPercentage: 17.05,
        })
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Portfolio Tracker</h1>
          <p className="text-xl">Track your SLERF holdings and performance</p>
        </div>

        {!walletConnected ? (
          <div className="max-w-md mx-auto text-center">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Connect Your Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={connectWallet}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full w-full"
                >
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <p className="text-sm text-gray-300">
                Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-sm">SLERF Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-yellow-400">{portfolio.slerfBalance.toLocaleString()}</p>
                  <p className="text-sm text-gray-300">SLERF</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-sm">Portfolio Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-400">${portfolio.totalValue.toFixed(2)}</p>
                  <p className="text-sm text-gray-300">USD</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-sm">P&L</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-2xl font-bold ${portfolio.pnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                    ${portfolio.pnl.toFixed(2)}
                  </p>
                  <p className={`text-sm ${portfolio.pnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {portfolio.pnlPercentage >= 0 ? "+" : ""}
                    {portfolio.pnlPercentage.toFixed(2)}%
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-sm">SLERF Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-400">$0.00156</p>
                  <p className="text-sm text-green-400">+12.5%</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <div>
                        <p className="text-green-400 font-semibold">Buy</p>
                        <p className="text-sm text-gray-300">2 hours ago</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white">500,000 SLERF</p>
                        <p className="text-sm text-gray-300">$780.00</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <div>
                        <p className="text-green-400 font-semibold">Buy</p>
                        <p className="text-sm text-gray-300">1 day ago</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white">1,000,000 SLERF</p>
                        <p className="text-sm text-gray-300">$1,220.00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Price Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Alert when SLERF reaches $0.002</span>
                      <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                        Set Alert
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Alert when SLERF drops to $0.001</span>
                      <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                        Set Alert
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <a href="/" className="text-yellow-400 hover:text-yellow-300 underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
