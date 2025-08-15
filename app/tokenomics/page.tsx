export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center animate-pulse">TOKENOMICS</h1>

        <div className="max-w-6xl mx-auto">
          {/* Token Overview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Token Overview</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Token Name:</span>
                    <span className="text-lg font-bold">SLERF</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Symbol:</span>
                    <span className="text-lg font-bold">$SLERF</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Blockchain:</span>
                    <span className="text-lg font-bold">Base Chain</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Total Supply:</span>
                    <span className="text-lg font-bold">1,000,000,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-lg">Contract:</span>
                    <span className="text-sm font-mono bg-black/30 px-2 py-1 rounded">
                      0x233df63325933fa3f2dac8e695cd84bb2f91ab07
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="w-64 h-64 rounded-full overflow-hidden animate-spin"
                  style={{ animationDuration: "10s" }}
                >
                  <img src="/slerf-logo.png" alt="SLERF Logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Token Distribution */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Token Distribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">70%</div>
                <div className="text-lg font-semibold mb-2">Public Sale</div>
                <div className="text-sm">700,000,000 SLERF</div>
                <div className="text-xs mt-2 opacity-80">Available for community purchase</div>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">15%</div>
                <div className="text-lg font-semibold mb-2">Liquidity Pool</div>
                <div className="text-sm">150,000,000 SLERF</div>
                <div className="text-xs mt-2 opacity-80">Locked for 2 years</div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">10%</div>
                <div className="text-lg font-semibold mb-2">Team & Development</div>
                <div className="text-sm">100,000,000 SLERF</div>
                <div className="text-xs mt-2 opacity-80">Vested over 24 months</div>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">5%</div>
                <div className="text-lg font-semibold mb-2">Marketing & Partnerships</div>
                <div className="text-sm">50,000,000 SLERF</div>
                <div className="text-xs mt-2 opacity-80">Community growth initiatives</div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2">Liquidity Locked</h3>
                <p className="text-sm opacity-80">2-year liquidity lock ensures stability and prevents rug pulls</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="text-xl font-bold mb-2">No Tax</h3>
                <p className="text-sm opacity-80">0% buy/sell tax for seamless trading experience</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-2">Community Driven</h3>
                <p className="text-sm opacity-80">Decisions made by the community through governance</p>
              </div>
            </div>
          </div>

          {/* Utility & Use Cases */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Utility & Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Current Utilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Community governance voting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Exclusive holder benefits
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Trading and speculation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Community events participation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Future Utilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-3">⏳</span>
                    NFT marketplace integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-3">⏳</span>
                    Staking rewards program
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-3">⏳</span>
                    Gaming ecosystem integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-3">⏳</span>
                    Cross-chain bridge support
                  </li>
                </ul>
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
