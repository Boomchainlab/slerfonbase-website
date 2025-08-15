"use client"

import { Button } from "@/components/ui/button"
import { CookieConsent } from "@/components/cookie-consent"
import { RiskDisclaimer } from "@/components/risk-disclaimer"
import { PriceTicker } from "@/components/price-ticker"
import { SecurityBadges } from "@/components/security-badges"
import { ContractInfo } from "@/components/contract-info"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white overflow-hidden">
      {/* Fixed banners */}
      <div className="fixed top-10 left-10 z-10">
        <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm rotate-12">
          🚀 SLERF TO THE MOON!
        </div>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-4 py-8 text-center">
        {/* Risk Disclaimer */}
        <RiskDisclaimer />

        {/* Security Badges */}
        <SecurityBadges />

        {/* Price Ticker */}
        <div className="mb-8 max-w-md mx-auto">
          <PriceTicker />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-8 drop-shadow-lg">SLERF</h1>

        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 rounded-full border-4 border-yellow-400 overflow-hidden shadow-2xl">
            <img src="/slerf-logo.png" alt="SLERF Logo" className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Slerf the Sloth is a laid back sloth spreading good vibes on the base chain
        </p>

        {/* Contract Info */}
        <ContractInfo />

        {/* Navigation Menu */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/tokenomics"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            >
              Tokenomics
            </a>
            <a
              href="/roadmap"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            >
              Roadmap
            </a>
            <a
              href="/community"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            >
              Community
            </a>
            <a
              href="/security"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            >
              Security
            </a>
            <a
              href="/news"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            >
              News
            </a>
            <a
              href="/faq"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition-colors duration-300">
            🍌 APESTORE
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            DEXSCREENER 🔍
          </Button>
          <Button
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            onClick={() => window.open("https://t.me/BoomTokn", "_blank")}
          >
            TELEGRAM ✈️
          </Button>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            🦄 UNISWAP
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            👻 phantom
          </Button>
          <Button
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            onClick={() => window.open("https://x.com/slerf00", "_blank")}
          >
            twitter 🐦
          </Button>
        </div>

        {/* Promotional banner */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-4 px-8 rounded-full inline-block text-lg">
            🎉 JOIN THE SLERF REVOLUTION! 🎉
          </div>
        </div>

        <div className="text-left max-w-4xl mx-auto space-y-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">LAUNCH</h2>
            <p className="text-lg leading-relaxed">
              Slerf The Sloth is fair launched on Ape.store with 1 billion token supply with 30% team allocation. Slerf
              is 100% rug-free with liquidity locked, providing investor confidence and protection against dumps.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">VISION</h2>
            <p className="text-lg leading-relaxed">
              Slerf The Sloth aims to be the most trusted and approachable meme token on the Base blockchain, fostering
              a transparent, community-driven ecosystem that prioritizes security and positive engagement.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">PLAN</h2>
            <p className="text-lg leading-relaxed">
              Establish Slerf The Sloth as the leading meme token on the Base blockchain, known for its integrity,
              community focus, and ability to bring people together in a secure, positive space.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">How to Buy SLERF</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white text-black p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">GET A WALLET</h3>
              <p className="text-sm">DOWNLOAD METAMASK OR YOUR PREFERRED CRYPTO WALLET</p>
            </div>

            <div className="bg-white text-black p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">CONNECT TO DEX</h3>
              <p className="text-sm">CONNECT YOUR WALLET TO UNISWAP OR PANCAKESWAP</p>
            </div>

            <div className="bg-white text-black p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">BUY ETH</h3>
              <p className="text-sm">PURCHASE ETHEREUM FROM ANY MAJOR EXCHANGE</p>
            </div>

            <div className="bg-white text-black p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">SWAP FOR SLERF</h3>
              <p className="text-sm">EXCHANGE YOUR ETH FOR SLERF TOKENS</p>
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-full text-lg underline transition-colors duration-300">
              BUY $SLERF
            </Button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">TRADE SLERF</h2>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
              <iframe
                id="dextswap-aggregator-widget"
                title="DEXTswap Aggregator"
                width="400"
                height="420"
                src="https://www.dextools.io/widget-aggregator/en/swap/base/0x233df63325933fa3f2dac8e695cd84bb2f91ab07"
                className="rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8">TOKENOMICS</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                  <img src="/slerf-logo.png" alt="SLERF Tokenomics" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Token Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Supply:</span>
                    <span className="font-bold">1,000,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Sale:</span>
                    <span className="font-bold text-green-400">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Liquidity:</span>
                    <span className="font-bold text-blue-400">15% (Locked)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team:</span>
                    <span className="font-bold text-purple-400">10% (Vested)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing:</span>
                    <span className="font-bold text-orange-400">5%</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="/tokenomics"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition-colors duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-8">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold py-6 px-12 rounded-full inline-block text-xl">
            🌟 SLERF: THE CHILLEST TOKEN ON BASE! 🌟
          </div>
        </div>

        {/* Footer with legal links */}
        <footer className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/terms" className="text-sm hover:text-yellow-300 transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-sm hover:text-yellow-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/tokenomics" className="text-sm hover:text-yellow-300 transition-colors">
              Tokenomics
            </a>
            <a href="/roadmap" className="text-sm hover:text-yellow-300 transition-colors">
              Roadmap
            </a>
            <a href="/community" className="text-sm hover:text-yellow-300 transition-colors">
              Community
            </a>
            <a href="/security" className="text-sm hover:text-yellow-300 transition-colors">
              Security
            </a>
            <a href="/news" className="text-sm hover:text-yellow-300 transition-colors">
              News
            </a>
            <a href="/faq" className="text-sm hover:text-yellow-300 transition-colors">
              FAQ
            </a>
            <a
              href="https://x.com/slerf00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-yellow-300 transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-xs text-gray-300">© 2024 SLERF Token. All rights reserved. Not financial advice.</p>
        </footer>
      </div>

      <CookieConsent />
    </div>
  )
}
