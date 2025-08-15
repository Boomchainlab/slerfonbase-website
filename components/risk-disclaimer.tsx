export function RiskDisclaimer() {
  return (
    <div className="bg-red-500/20 border border-red-400 rounded-2xl p-6 mb-8">
      <h3 className="text-xl font-bold text-red-300 mb-3 flex items-center">⚠️ Risk Disclaimer</h3>
      <p className="text-sm leading-relaxed text-red-100">
        <strong>High Risk Investment:</strong> SLERF tokens are highly speculative and involve substantial risk of loss.
        Cryptocurrency investments are volatile and can result in total loss of capital. Only invest what you can afford
        to lose. This is not financial advice. Past performance does not guarantee future results. Please read our{" "}
        <a href="/terms" className="underline hover:text-yellow-300">
          Terms of Service
        </a>{" "}
        before proceeding.
      </p>
    </div>
  )
}
