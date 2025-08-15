import { CommunityStats } from "@/components/community-stats"
import { SocialFeed } from "@/components/social-feed"
import { PriceTicker } from "@/components/price-ticker"

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center animate-pulse">
          SLERF Community Hub
        </h1>

        <div className="max-w-6xl mx-auto">
          {/* Price Ticker */}
          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <PriceTicker />
            </div>
          </div>

          {/* Community Stats */}
          <div className="mb-12">
            <CommunityStats />
          </div>

          {/* Social Feed and Community Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <SocialFeed />

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Join Our Community</h2>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">🐦 Twitter</h3>
                  <p className="text-gray-300 mb-4">
                    Follow us for real-time updates, memes, and community highlights.
                  </p>
                  <a
                    href="https://x.com/slerf00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full font-bold transition-all duration-300"
                  >
                    Follow @slerf00
                  </a>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">✈️ Telegram</h3>
                  <p className="text-gray-300 mb-4">Join our active community chat for discussions and support.</p>
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-bold transition-all duration-300"
                  >
                    Join Chat
                  </a>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">👻 Discord</h3>
                  <p className="text-gray-300 mb-4">Connect with fellow SLERF holders in our Discord server.</p>
                  <a
                    href="#"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-bold transition-all duration-300"
                  >
                    Join Server
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Community Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-400">✅ Do's</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Be respectful and kind to all members</li>
                  <li>• Share constructive feedback and ideas</li>
                  <li>• Help newcomers understand SLERF</li>
                  <li>• Share relevant news and updates</li>
                  <li>• Engage in meaningful discussions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-400">❌ Don'ts</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• No spam or excessive promotion</li>
                  <li>• No financial advice or price predictions</li>
                  <li>• No harassment or toxic behavior</li>
                  <li>• No sharing of other projects</li>
                  <li>• No spreading FUD or misinformation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community Events */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Upcoming Community Events</h2>
            <p className="text-lg mb-6">Stay tuned for exciting community events, contests, and giveaways!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/20 rounded-2xl p-4">
                <h3 className="font-bold mb-2">🎨 Meme Contest</h3>
                <p className="text-sm">Create the best SLERF meme and win tokens!</p>
                <p className="text-xs mt-2 font-bold">Coming Soon</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-4">
                <h3 className="font-bold mb-2">🎁 Community Giveaway</h3>
                <p className="text-sm">Weekly giveaways for active members</p>
                <p className="text-xs mt-2 font-bold">Every Friday</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-4">
                <h3 className="font-bold mb-2">🗳️ Governance Vote</h3>
                <p className="text-sm">Vote on important community decisions</p>
                <p className="text-xs mt-2 font-bold">Monthly</p>
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
