"use client"

import { useState } from "react"

export function ContractInfo() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0x233df63325933fa3f2dac8e695cd84bb2f91ab07"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-8">
      <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Official Contract Address</h3>
      <div className="bg-black/30 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm break-all mr-4">{contractAddress}</span>
          <button
            onClick={copyToClipboard}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
              copied ? "bg-green-400 text-black" : "bg-yellow-400 text-black hover:bg-yellow-500"
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-300 mb-4">
          Always verify this address before trading. Beware of fake contracts!
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300"
          >
            View on BaseScan
          </a>
          <a
            href="#"
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300"
          >
            View on DexScreener
          </a>
        </div>
      </div>
    </div>
  )
}
