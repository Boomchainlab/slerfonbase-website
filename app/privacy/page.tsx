export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 text-center">Privacy Policy</h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Information We Collect</h2>
            <p className="text-lg leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, subscribe to our
              newsletter, or contact us for support.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Wallet addresses and transaction data</li>
              <li>Email addresses (if provided)</li>
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. How We Use Your Information</h2>
            <p className="text-lg leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Information Sharing</h2>
            <p className="text-lg leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy. We may share information in response to legal requests or to
              protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Cookies and Tracking</h2>
            <p className="text-lg leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our service and hold certain
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand usage patterns</li>
              <li>Marketing cookies for targeted advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Data Security</h2>
            <p className="text-lg leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Your Rights</h2>
            <p className="text-lg leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">7. International Transfers</h2>
            <p className="text-lg leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your jurisdiction
              where data protection laws may differ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">8. Changes to Privacy Policy</h2>
            <p className="text-lg leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">9. Contact Us</h2>
            <p className="text-lg leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our official social media
              channels or community forums.
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
