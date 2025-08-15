import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "SLERF - The Chillest Sloth Token on Base Chain | Buy $SLERF",
  description:
    "Slerf the Sloth is a laid back sloth spreading good vibes on the base chain. Join the SLERF revolution with 100% rug-free tokenomics and locked liquidity.",
  keywords: "SLERF, sloth token, Base chain, meme coin, cryptocurrency, DeFi, $SLERF, blockchain",
  authors: [{ name: "SLERF Team" }],
  creator: "SLERF",
  publisher: "SLERF",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://slerfonbase.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SLERF - The Chillest Sloth Token on Base Chain",
    description:
      "Join the SLERF revolution! The most trusted and approachable meme token on Base blockchain with locked liquidity and community-driven ecosystem.",
    url: "https://slerfonbase.com",
    siteName: "SLERF Token",
    images: [
      {
        url: "/slerf-logo.png",
        width: 1200,
        height: 630,
        alt: "SLERF - Sloth Token Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLERF - The Chillest Sloth Token on Base Chain",
    description: "Join the SLERF revolution! 100% rug-free sloth token with locked liquidity on Base chain.",
    site: "@slerf00",
    creator: "@slerf00",
    images: ["/slerf-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SLERF Token",
              description: "The chillest sloth token on Base chain",
              url: "https://slerfonbase.com",
              logo: "https://slerfonbase.com/slerf-logo.png",
              sameAs: ["https://x.com/slerf00", "https://t.me/slerf"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
            }),
          }}
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.dextools.io" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
