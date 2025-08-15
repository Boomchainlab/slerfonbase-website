"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What is SLERF?",
    answer:
      "SLERF is a community-driven meme token on the Base blockchain featuring a laid-back sloth mascot. It's designed to spread good vibes while providing a secure and transparent investment opportunity with locked liquidity and no rug-pull risks.",
  },
  {
    question: "How do I buy SLERF tokens?",
    answer:
      "You can buy SLERF tokens by: 1) Getting a crypto wallet like MetaMask, 2) Purchasing ETH from any major exchange, 3) Connecting your wallet to Uniswap or our DEX widget, 4) Swapping your ETH for SLERF tokens using our contract address.",
  },
  {
    question: "What makes SLERF different from other meme coins?",
    answer:
      "SLERF stands out with 100% rug-free tokenomics, 2-year locked liquidity, 0% buy/sell tax, and a strong focus on community governance. We prioritize transparency, security, and positive community engagement over quick profits.",
  },
  {
    question: "Is SLERF safe to invest in?",
    answer:
      "While all cryptocurrency investments carry risk, SLERF has implemented several safety measures: locked liquidity for 2 years, fair launch distribution, transparent tokenomics, and no hidden fees. However, please only invest what you can afford to lose.",
  },
  {
    question: "What is the total supply of SLERF?",
    answer:
      "SLERF has a total supply of 1 billion tokens with the following distribution: 70% public sale, 15% liquidity pool (locked), 10% team & development (vested), and 5% marketing & partnerships.",
  },
  {
    question: "Where can I track SLERF's price?",
    answer:
      "You can track SLERF's price on DexScreener, our website's trading widget, and soon on CoinGecko and CoinMarketCap. We're working on getting listed on major price tracking platforms.",
  },
  {
    question: "Does SLERF have any utility?",
    answer:
      "Currently, SLERF offers community governance voting, exclusive holder benefits, and participation in community events. Future utilities include NFT marketplace integration, staking rewards, gaming ecosystem integration, and cross-chain bridge support.",
  },
  {
    question: "How can I join the SLERF community?",
    answer:
      "Join our community through Twitter (@slerf00), Telegram, and Discord. Follow our social media for updates, participate in community discussions, and stay informed about upcoming developments and events.",
  },
  {
    question: "Are there any taxes on SLERF transactions?",
    answer:
      "No! SLERF has 0% buy and sell taxes, making it completely fee-free to trade. You only pay standard blockchain gas fees for transactions, but there are no additional token taxes.",
  },
  {
    question: "What are the future plans for SLERF?",
    answer:
      "Our roadmap includes major exchange listings, NFT collection launch, staking rewards program, mobile app development, DAO formation, and real-world utility partnerships. Check our roadmap page for detailed timelines.",
  },
  {
    question: "How is liquidity protected?",
    answer:
      "SLERF's liquidity is locked for 2 years through a smart contract, making it impossible for the team to remove liquidity and ensuring long-term stability. This protects investors from rug pulls and provides confidence in the project's longevity.",
  },
  {
    question: "Can I stake my SLERF tokens?",
    answer:
      "Staking is not currently available but is planned for Phase 3 of our roadmap (Q3-Q4 2024). The staking program will offer rewards to long-term holders and help reduce circulating supply.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center animate-pulse">
          Frequently Asked Questions
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <p className="text-xl text-center mb-8">
              Got questions about SLERF? Find answers to the most common questions below. If you can't find what you're
              looking for, reach out to our community on social media!
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 hover:bg-white/10 transition-all duration-300 flex justify-between items-center"
                  >
                    <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
                    <div
                      className={`text-2xl transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-white/20 pt-4">
                        <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6">
              Join our community and get answers from fellow SLERF holders and team members!
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
