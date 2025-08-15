"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Copy } from "lucide-react"

export default function PressKit() {
  const brandAssets = [
    {
      name: "SLERF Logo (PNG)",
      description: "High-resolution logo with transparent background",
      size: "512x512px",
      file: "/slerf-logo.png",
    },
    {
      name: "SLERF Logo (SVG)",
      description: "Vector logo for scalable applications",
      size: "Vector",
      file: "/slerf-logo.svg",
    },
    {
      name: "Brand Colors",
      description: "Official SLERF color palette",
      colors: ["#3B82F6", "#FCD34D", "#10B981", "#F59E0B"],
    },
    {
      name: "Typography",
      description: "Official fonts: Geist Sans & Geist Mono",
      fonts: ["Geist Sans", "Geist Mono"],
    },
  ]

  const mediaAssets = [
    {
      name: "Hero Banner",
      description: "Main promotional banner",
      size: "1200x630px",
      file: "/slerf-banner-1.png",
    },
    {
      name: "Social Media Kit",
      description: "Twitter headers, profile pictures, stories",
      size: "Various",
      file: "/social-media-kit.zip",
    },
    {
      name: "Promotional Videos",
      description: "Short promotional clips and animations",
      size: "MP4, 1080p",
      file: "/promo-videos.zip",
    },
  ]

  const factSheet = {
    name: "SLERF Token",
    symbol: "$SLERF",
    blockchain: "Base Chain",
    totalSupply: "1,000,000,000",
    contractAddress: "0x233df63325933fa3f2dac8e695cd84bb2f91ab07",
    launchDate: "January 2024",
    website: "https://slerfonbase.com",
    twitter: "https://x.com/slerf00",
    telegram: "https://t.me/BoomTokn",
  }

  const keyMessages = [
    "SLERF is the chillest sloth token on Base chain, spreading good vibes in the crypto space.",
    "100% rug-free with locked liquidity, providing investor confidence and protection.",
    "Community-driven ecosystem focused on transparency, security, and positive engagement.",
    "Leading meme token on Base blockchain with innovative DeFi features and gamification.",
  ]

  const teamBios = [
    {
      name: "Anonymous Team",
      role: "Core Development",
      bio: "Experienced blockchain developers focused on building secure and innovative DeFi solutions on Base chain.",
    },
    {
      name: "Community Leaders",
      role: "Community Management",
      bio: "Dedicated community managers and ambassadors working to grow the SLERF ecosystem globally.",
    },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  const downloadAsset = (filename: string) => {
    // In a real implementation, this would trigger a download
    alert(`Downloading ${filename}...`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">📰 Press Kit</h1>
          <p className="text-xl">Media resources and brand assets for journalists and content creators</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Facts */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <p className="text-gray-300 text-sm">Token Name</p>
                  <p className="font-bold text-yellow-400">{factSheet.name}</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Symbol</p>
                  <p className="font-bold text-green-400">{factSheet.symbol}</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Blockchain</p>
                  <p className="font-bold text-blue-400">{factSheet.blockchain}</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Total Supply</p>
                  <p className="font-bold text-purple-400">{factSheet.totalSupply}</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Launch Date</p>
                  <p className="font-bold">{factSheet.launchDate}</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Website</p>
                  <a href={factSheet.website} className="font-bold text-yellow-400 hover:underline">
                    slerfonbase.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Twitter</p>
                  <a href={factSheet.twitter} className="font-bold text-blue-400 hover:underline">
                    @slerf00
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Telegram</p>
                  <a href={factSheet.telegram} className="font-bold text-blue-300 hover:underline">
                    BoomTokn
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-300 text-sm mb-2">Contract Address</p>
                <div className="flex items-center space-x-2">
                  <code className="bg-black/20 px-3 py-1 rounded text-sm font-mono">{factSheet.contractAddress}</code>
                  <Button
                    size="sm"
                    onClick={() => copyToClipboard(factSheet.contractAddress)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Brand Assets */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Brand Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {brandAssets.map((asset, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="font-semibold">{asset.name}</p>
                        <p className="text-sm text-gray-300">{asset.description}</p>
                        {asset.size && <p className="text-xs text-gray-400">{asset.size}</p>}
                        {asset.colors && (
                          <div className="flex space-x-2 mt-2">
                            {asset.colors.map((color, colorIndex) => (
                              <div
                                key={colorIndex}
                                className="w-6 h-6 rounded border border-white/20"
                                style={{ backgroundColor: color }}
                                title={color}
                              />
                            ))}
                          </div>
                        )}
                        {asset.fonts && <div className="text-xs text-gray-400 mt-1">{asset.fonts.join(", ")}</div>}
                      </div>
                      {asset.file && (
                        <Button
                          size="sm"
                          onClick={() => downloadAsset(asset.file!)}
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Media Assets */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Media Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mediaAssets.map((asset, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="font-semibold">{asset.name}</p>
                        <p className="text-sm text-gray-300">{asset.description}</p>
                        <p className="text-xs text-gray-400">{asset.size}</p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => downloadAsset(asset.file)}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Messages */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Key Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {keyMessages.map((message, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-yellow-400 font-bold">{index + 1}.</span>
                    <p className="text-gray-200">{message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Information */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Team Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamBios.map((member, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-1">{member.name}</h4>
                    <p className="text-sm text-gray-300 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-200">{member.bio}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black">
            <CardHeader>
              <CardTitle>Media Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">For Press Inquiries:</h4>
                  <p>Email: press@slerfonbase.com</p>
                  <p>Twitter: @slerf00</p>
                  <p>Telegram: @BoomTokn</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Partnership Inquiries:</h4>
                  <p>Email: partnerships@slerfonbase.com</p>
                  <p>Response time: 24-48 hours</p>
                  <p>Available: Monday-Friday, 9 AM - 6 PM UTC</p>
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
