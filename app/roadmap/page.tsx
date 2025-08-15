export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center animate-pulse">ROADMAP</h1>

        <div className="max-w-4xl mx-auto">
          {/* Phase 1 - Completed */}
          <div className="mb-12">
            <div className="bg-green-500/20 border border-green-400 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  ✓
                </div>
                <h2 className="text-3xl font-bold text-green-400">Phase 1: Launch & Foundation</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Completed ✅</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Smart contract deployment
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Website launch
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Social media presence
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Community building
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Liquidity locked for 2 years
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Fair launch on Ape.store
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      DEX listings (Uniswap)
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Initial community of 1000+ holders
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 - In Progress */}
          <div className="mb-12">
            <div className="bg-yellow-500/20 border border-yellow-400 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4 animate-pulse">
                  2
                </div>
                <h2 className="text-3xl font-bold text-yellow-400">Phase 2: Growth & Expansion</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">In Progress 🚧</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">⏳</span>
                      CoinGecko & CoinMarketCap listings
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">⏳</span>
                      Influencer partnerships
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">⏳</span>
                      Community contests & giveaways
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">⏳</span>
                      Marketing campaign launch
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">🎯</span>
                      10,000+ holders
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">🎯</span>
                      $1M+ market cap
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">🎯</span>
                      Major exchange listings
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">🎯</span>
                      Partnership announcements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 - Upcoming */}
          <div className="mb-12">
            <div className="bg-blue-500/20 border border-blue-400 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  3
                </div>
                <h2 className="text-3xl font-bold text-blue-400">Phase 3: Utility & Innovation</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Planned Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">🔮</span>
                      SLERF NFT collection launch
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">🔮</span>
                      Staking rewards program
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">🔮</span>
                      Governance voting system
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">🔮</span>
                      Mobile app development
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Ecosystem</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">🔮</span>
                      SLERF merchandise store
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">🔮</span>
                      Community DAO formation
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">🔮</span>
                      Cross-chain bridge integration
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">🔮</span>
                      Gaming partnerships
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 4 - Future */}
          <div className="mb-12">
            <div className="bg-purple-500/20 border border-purple-400 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                  4
                </div>
                <h2 className="text-3xl font-bold text-purple-400">Phase 4: Global Expansion</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Long-term Vision</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">🌟</span>
                      Major CEX listings (Binance, Coinbase)
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">🌟</span>
                      SLERF ecosystem expansion
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">🌟</span>
                      Real-world utility partnerships
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">🌟</span>
                      Metaverse integration
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Ultimate Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">🌟</span>
                      100,000+ holders worldwide
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">🌟</span>
                      $100M+ market cap
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">🌟</span>
                      Top 100 cryptocurrency ranking
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">🌟</span>
                      Global brand recognition
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-green-500/20 rounded-2xl">
                <div className="text-2xl font-bold text-green-400 mb-2">Q1 2024</div>
                <div className="text-sm">Launch & Foundation</div>
              </div>
              <div className="p-4 bg-yellow-500/20 rounded-2xl">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Q2 2024</div>
                <div className="text-sm">Growth & Expansion</div>
              </div>
              <div className="p-4 bg-blue-500/20 rounded-2xl">
                <div className="text-2xl font-bold text-blue-400 mb-2">Q3-Q4 2024</div>
                <div className="text-sm">Utility & Innovation</div>
              </div>
              <div className="p-4 bg-purple-500/20 rounded-2xl">
                <div className="text-2xl font-bold text-purple-400 mb-2">2025+</div>
                <div className="text-sm">Global Expansion</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
