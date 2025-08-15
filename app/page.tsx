"use client"
import { RiskDisclaimer } from "@/components/risk-disclaimer"
import { PriceTicker } from "@/components/price-ticker"
import { SecurityBadges } from "@/components/security-badges"
import { ContractInfo } from "@/components/contract-info"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-950 text-white overflow-hidden">
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      <div className="fixed top-10 left-10 z-10">
        <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm rotate-12">
          🚀 SLERF TO THE MOON!
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 text-center">
        <RiskDisclaimer />

        <SecurityBadges />

        <div className="mb-8 max-w-md mx-auto">
          <PriceTicker />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-8 drop-shadow-lg" role="banner">
          {t("hero.title")}
        </h1>

        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 rounded-full border-4 border-yellow-400 overflow-hidden shadow-2xl">
            <img src="/slerf-logo.png" alt="SLERF Logo" className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">{t("hero.description")}</p>

        <ContractInfo />

        <nav className="mb-8" role="navigation" aria-label="Main navigation">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/portfolio"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="View your portfolio"
            >
              {t("nav.portfolio")}
            </a>
            <a
              href="/staking"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t("nav.staking")}
            </a>
            <a
              href="/trading-competition"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Competition
            </a>
            <a
              href="/rewards"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Rewards
            </a>
            <a
              href="/meme-contest"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Meme Contest
            </a>
            <a
              href="/referrals"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Referrals
            </a>
            <a
              href="/governance"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Governance
            </a>
            <a
              href="/analytics"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t("nav.analytics")}
            </a>
            <a
              href="/burn-tracker"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Burn Tracker
            </a>
            <a
              href="/airdrop"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Airdrop
            </a>
            <a
              href="/ambassador"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Ambassador
            </a>
            <a
              href="/press-kit"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Press Kit
            </a>
            <a
              href="/partnerships"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Partnerships
            </a>
            <a
              href="/events"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Events
            </a>
            <a
              href="/tokenomics"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t("nav.tokenomics")}
            </a>
            <a
              href="/roadmap"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t("nav.roadmap")}
            </a>
            <a
              href="/faq"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t("nav.faq")}
            </a>
            <a
              href="/community"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t("nav.community")}
            </a>
            <a
              href="/news"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t("nav.news")}
            </a>
            <a
              href="/security"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {t("nav.security")}
            </a>
          </div>
        </nav>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://apestore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="View SLERF on ApeStore"
          >
            🍌 APESTORE
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="View SLERF on DexScreener"
          >
            📊 DEXSCREENER
          </a>
          <a
            href="https://t.me/BoomTokn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Join SLERF Telegram"
          >
            📱 TELEGRAM
          </a>
          <a
            href="https://uniswap.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
            aria-label="Trade SLERF on Uniswap"
          >
            🦄 UNISWAP
          </a>
          <a
            href="https://phantom.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Use Phantom Wallet"
          >
            👻 PHANTOM
          </a>
          <a
            href="https://x.com/slerf00"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Follow SLERF on Twitter"
          >
            🐦 TWITTER
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">{t("trading.title")}</h2>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <iframe
                id="dextswap-aggregator-widget"
                title="DEXTswap Aggregator"
                width="400"
                height="420"
                src="https://www.dextools.io/widget-aggregator/en/swap/base/0x233df63325933fa3f2dac8e695cd84bb2f91ab07"
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">{t("tokenomics.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Total Supply</h3>
              <p className="text-2xl text-yellow-400">1,000,000,000</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Liquidity Locked</h3>
              <p className="text-2xl text-green-400">100%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Team Allocation</h3>
              <p className="text-2xl text-blue-400">5%</p>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="/terms" className="text-white/70 hover:text-white transition-colors">
              {t("footer.terms")}
            </a>
            <a href="/privacy" className="text-white/70 hover:text-white transition-colors">
              {t("footer.privacy")}
            </a>
          </div>
          <p className="text-white/50 text-sm">© 2024 SLERF Token. {t("footer.disclaimer")}</p>
        </footer>
      </div>
    </div>
  )
}
