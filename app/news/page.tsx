export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "SLERF Successfully Launches on Base Chain",
      date: "January 15, 2024",
      category: "Launch",
      excerpt:
        "SLERF token officially launches with fair distribution and locked liquidity, marking the beginning of our journey on Base blockchain.",
      content:
        "We're excited to announce the successful launch of SLERF token on the Base blockchain. With 1 billion tokens in total supply and 2-year locked liquidity, we're committed to building a sustainable and trustworthy meme coin ecosystem.",
    },
    {
      id: 2,
      title: "Community Reaches 1000+ Holders Milestone",
      date: "January 12, 2024",
      category: "Community",
      excerpt:
        "SLERF community continues to grow rapidly, reaching over 1000 unique holders within the first week of launch.",
      content:
        "Thanks to our amazing community, we've reached over 1000 holders in record time. This milestone demonstrates the strong interest and confidence in the SLERF project. We're grateful for every community member who has joined our journey.",
    },
    {
      id: 3,
      title: "DEX Integration and Trading Widget Launch",
      date: "January 10, 2024",
      category: "Development",
      excerpt:
        "New DEX aggregator widget integrated into the website, making it easier for users to trade SLERF tokens directly.",
      content:
        "We've integrated a DEX aggregator widget directly into our website, allowing users to trade SLERF tokens without leaving our platform. This enhancement improves user experience and makes trading more accessible for our community.",
    },
    {
      id: 4,
      title: "Roadmap Phase 2 Development Begins",
      date: "January 8, 2024",
      category: "Development",
      excerpt:
        "Development team begins work on Phase 2 roadmap items including major exchange listings and partnership discussions.",
      content:
        "Our development team has officially begun working on Phase 2 roadmap items. This includes preparing for major exchange listings, establishing strategic partnerships, and expanding our marketing efforts to reach a broader audience.",
    },
    {
      id: 5,
      title: "Security Audit Completed Successfully",
      date: "January 5, 2024",
      category: "Security",
      excerpt:
        "Independent security audit confirms SLERF smart contract is secure with no critical vulnerabilities found.",
      content:
        "We're pleased to announce that our smart contract has passed an independent security audit with flying colors. No critical vulnerabilities were found, confirming our commitment to security and transparency.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center animate-pulse">
          SLERF News & Updates
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <p className="text-xl text-center mb-8">
              Stay up to date with the latest SLERF developments, community milestones, and project updates.
            </p>
          </div>

          <div className="space-y-6">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold ${
                      item.category === "Launch"
                        ? "bg-green-500/20 text-green-400"
                        : item.category === "Community"
                          ? "bg-blue-500/20 text-blue-400"
                          : item.category === "Development"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-300">{item.date}</span>
                </div>

                <h2 className="text-2xl font-bold text-yellow-400 mb-4">{item.title}</h2>
                <p className="text-gray-200 mb-4 leading-relaxed">{item.excerpt}</p>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-lg mb-6">
                Follow our social media channels for real-time updates and community discussions!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://x.com/slerf00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-all duration-300"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all duration-300"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-all duration-300"
                >
                  Discord
                </a>
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
