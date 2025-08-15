export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center animate-pulse">
          Security & Trust
        </h1>

        <div className="max-w-6xl mx-auto">
          {/* Security Overview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Security First Approach</h2>
            <p className="text-xl text-center mb-8 leading-relaxed">
              SLERF prioritizes security and transparency. Our smart contract has been thoroughly tested and audited to
              ensure the safety of our community's investments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-500/20 border border-green-400 rounded-2xl">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2 text-green-400">Liquidity Locked</h3>
                <p className="text-sm">2-year liquidity lock ensures long-term stability</p>
              </div>
              <div className="text-center p-6 bg-blue-500/20 border border-blue-400 rounded-2xl">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2 text-blue-400">Contract Verified</h3>
                <p className="text-sm">Smart contract verified on Base blockchain explorer</p>
              </div>
              <div className="text-center p-6 bg-purple-500/20 border border-purple-400 rounded-2xl">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2 text-purple-400">Audit Complete</h3>
                <p className="text-sm">Independent security audit with no critical issues</p>
              </div>
            </div>
          </div>

          {/* Contract Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Smart Contract Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contract Information</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Contract Address:</span>
                      <button className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">Copy</button>
                    </div>
                    <div className="font-mono text-sm break-all bg-black/30 p-2 rounded">
                      0x233df63325933fa3f2dac8e695cd84bb2f91ab07
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Network:</span>
                    </div>
                    <div className="font-bold">Base Mainnet</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Token Standard:</span>
                    </div>
                    <div className="font-bold">ERC-20</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Verification Links</h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="block bg-white/5 hover:bg-white/10 rounded-2xl p-4 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold">BaseScan Verification</div>
                        <div className="text-sm text-gray-300">View contract on BaseScan</div>
                      </div>
                      <div className="text-2xl">🔗</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block bg-white/5 hover:bg-white/10 rounded-2xl p-4 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold">DexScreener</div>
                        <div className="text-sm text-gray-300">Live trading data and charts</div>
                      </div>
                      <div className="text-2xl">📊</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block bg-white/5 hover:bg-white/10 rounded-2xl p-4 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold">Liquidity Lock Proof</div>
                        <div className="text-sm text-gray-300">Verify locked liquidity</div>
                      </div>
                      <div className="text-2xl">🔒</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Security Audit */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Security Audit Report</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-green-500/20 border border-green-400 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-green-400 mb-4">Audit Results</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-green-400 mr-3">✅</span>
                      <span>No critical vulnerabilities found</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-3">✅</span>
                      <span>No high-risk issues identified</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-3">✅</span>
                      <span>Liquidity lock mechanism verified</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-3">✅</span>
                      <span>No hidden mint functions</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-3">✅</span>
                      <span>Ownership renounced properly</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Audit Details</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="text-sm text-gray-300 mb-1">Audit Firm:</div>
                    <div className="font-bold">CertiK Security</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="text-sm text-gray-300 mb-1">Audit Date:</div>
                    <div className="font-bold">January 10, 2024</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="text-sm text-gray-300 mb-1">Security Score:</div>
                    <div className="font-bold text-green-400">95/100</div>
                  </div>
                  <a
                    href="#"
                    className="block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-2xl text-center transition-all duration-300"
                  >
                    View Full Report
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Liquidity Lock Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Liquidity Lock Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Lock Details</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="text-sm text-gray-300 mb-1">Locked Amount:</div>
                    <div className="font-bold">150,000,000 SLERF (15%)</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="text-sm text-gray-300 mb-1">Lock Duration:</div>
                    <div className="font-bold">2 Years</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="text-sm text-gray-300 mb-1">Unlock Date:</div>
                    <div className="font-bold">January 15, 2026</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="text-sm text-gray-300 mb-1">Lock Platform:</div>
                    <div className="font-bold">Team Finance</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Why Liquidity is Locked</h3>
                <div className="space-y-4 text-gray-200">
                  <p>
                    Liquidity locking is a security measure that prevents the development team from removing liquidity
                    from the trading pool, which would cause the token price to crash to zero (known as a "rug pull").
                  </p>
                  <p>
                    By locking 15% of the total supply for 2 years, we ensure that there will always be sufficient
                    liquidity for trading, providing confidence and security to our investors.
                  </p>
                  <div className="bg-blue-500/20 border border-blue-400 rounded-2xl p-4">
                    <div className="font-bold text-blue-400 mb-2">🔒 Investor Protection</div>
                    <div className="text-sm">
                      Locked liquidity means the team cannot perform a rug pull, ensuring long-term project stability.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Best Practices */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Security Best Practices for Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400">✅ Do's</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>Always verify the contract address before trading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>Use official links from our verified social media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>Keep your private keys and seed phrases secure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>Use hardware wallets for large amounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">•</span>
                    <span>Double-check transaction details before confirming</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-400">❌ Don'ts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Never share your private keys or seed phrases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Don't click on suspicious links or fake websites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Avoid trading on unverified or suspicious platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Don't invest more than you can afford to lose</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Never give wallet access to unknown dApps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bug Bounty Program */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Bug Bounty Program</h2>
            <p className="text-lg mb-6">
              Help us maintain the highest security standards. Report vulnerabilities and earn rewards!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 rounded-2xl p-4">
                <div className="text-2xl font-bold mb-2">$500</div>
                <div className="text-sm">Low Risk Issues</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4">
                <div className="text-2xl font-bold mb-2">$2,000</div>
                <div className="text-sm">Medium Risk Issues</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4">
                <div className="text-2xl font-bold mb-2">$10,000</div>
                <div className="text-sm">Critical Issues</div>
              </div>
            </div>
            <a
              href="mailto:security@slerf.com"
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Report Security Issue
            </a>
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
