export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center">Terms of Service</h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Acceptance of Terms</h2>
            <p className="text-lg leading-relaxed">
              By accessing and using the SLERF token website and services, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. Investment Risks</h2>
            <p className="text-lg leading-relaxed mb-4">
              SLERF tokens are highly speculative and involve substantial risk of loss. You should carefully consider
              whether trading or holding digital assets is suitable for you in light of your financial condition.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Cryptocurrency investments are volatile and can result in total loss</li>
              <li>Past performance does not guarantee future results</li>
              <li>Regulatory changes may affect token value and utility</li>
              <li>Smart contract risks and potential bugs may exist</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. No Financial Advice</h2>
            <p className="text-lg leading-relaxed">
              The information provided on this website does not constitute investment advice, financial advice, trading
              advice, or any other sort of advice. You should not treat any of the website's content as such.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Prohibited Uses</h2>
            <p className="text-lg leading-relaxed mb-4">You may not use our service:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>
                To violate any international, federal, provincial, or state regulations, rules, laws, or local
                ordinances
              </li>
              <li>
                To infringe upon or violate our intellectual property rights or the intellectual property rights of
                others
              </li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-lg leading-relaxed">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law,
              this Company excludes all representations, warranties, conditions and terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Limitation of Liability</h2>
            <p className="text-lg leading-relaxed">
              In no event shall SLERF, nor its directors, employees, partners, agents, suppliers, or affiliates, be
              liable for any indirect, incidental, punitive, consequential, or similar damages whatsoever.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">7. Governing Law</h2>
            <p className="text-lg leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
              in which SLERF operates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">8. Changes to Terms</h2>
            <p className="text-lg leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-300">Last updated: January 15, 2024</p>
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
