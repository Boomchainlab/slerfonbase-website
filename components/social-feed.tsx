"use client"

import { useState } from "react"

interface SocialPost {
  id: number
  platform: "twitter" | "telegram"
  content: string
  timestamp: string
  likes?: number
  retweets?: number
}

export function SocialFeed() {
  const [posts, setPosts] = useState<SocialPost[]>([
    {
      id: 1,
      platform: "twitter",
      content:
        "🚀 SLERF community is growing stronger every day! Thanks to all our diamond hands holders. #SLERF #Base #DeFi",
      timestamp: "2 hours ago",
      likes: 47,
      retweets: 23,
    },
    {
      id: 2,
      platform: "telegram",
      content: "New partnership announcement coming soon! Stay tuned SLERF army 🔥",
      timestamp: "4 hours ago",
    },
    {
      id: 3,
      platform: "twitter",
      content: "Liquidity locked ✅ Community growing ✅ Good vibes spreading ✅ SLERF is the way! 🦥💎",
      timestamp: "6 hours ago",
      likes: 89,
      retweets: 45,
    },
  ])

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Latest Updates</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                  post.platform === "twitter" ? "bg-blue-400 text-white" : "bg-blue-500 text-white"
                }`}
              >
                {post.platform === "twitter" ? "🐦" : "✈️"}
              </div>
              <span className="text-sm text-gray-300">{post.timestamp}</span>
            </div>
            <p className="text-gray-200 leading-relaxed mb-3">{post.content}</p>
            {post.platform === "twitter" && (
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center">❤️ {post.likes}</span>
                <span className="flex items-center">🔄 {post.retweets}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a
          href="https://x.com/slerf00"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition-all duration-300"
        >
          Follow for More
        </a>
      </div>
    </div>
  )
}
