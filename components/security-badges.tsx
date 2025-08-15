export function SecurityBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <div className="bg-green-500/20 border border-green-400 rounded-2xl px-4 py-2 flex items-center">
        <span className="text-green-400 mr-2">🔒</span>
        <span className="text-sm font-bold">Liquidity Locked</span>
      </div>
      <div className="bg-blue-500/20 border border-blue-400 rounded-2xl px-4 py-2 flex items-center">
        <span className="text-blue-400 mr-2">✅</span>
        <span className="text-sm font-bold">Contract Verified</span>
      </div>
      <div className="bg-purple-500/20 border border-purple-400 rounded-2xl px-4 py-2 flex items-center">
        <span className="text-purple-400 mr-2">🛡️</span>
        <span className="text-sm font-bold">Audit Passed</span>
      </div>
      <div className="bg-orange-500/20 border border-orange-400 rounded-2xl px-4 py-2 flex items-center">
        <span className="text-orange-400 mr-2">🚫</span>
        <span className="text-sm font-bold">0% Tax</span>
      </div>
    </div>
  )
}
