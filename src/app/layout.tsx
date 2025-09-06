import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PowerProject - AI-Powered Software Development | MVP in 6 Weeks",
  description: "Transform your ideas into cutting-edge software solutions with our expert team. Get your MVP developed in just 6 weeks using React, Next.js, Node.js, and AI technologies.",
  keywords: [
    "software development",
    "MVP development",
    "AI-powered development",
    "React development",
    "Next.js development",
    "Node.js development",
    "web application development",
    "mobile app development",
    "custom software solutions",
    "startup development",
    "tech consulting",
    "full-stack development"
  ],
  authors: [{ name: "PowerProject Team" }],
  creator: "PowerProject",
  publisher: "PowerProject",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://powerproject.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "PowerProject - AI-Powered Software Development",
    description: "Transform your ideas into cutting-edge software solutions. Get your MVP developed in just 6 weeks with the latest technologies.",
    url: 'https://powerproject.dev',
    siteName: 'PowerProject',
    images: [
      {
        url: 'https://ik.imagekit.io/meaas6nsi/public/assets/powerproject.png',
        width: 1200,
        height: 630,
        alt: 'PowerProject - AI-Powered Software Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PowerProject - AI-Powered Software Development",
    description: "Transform your ideas into cutting-edge software solutions. Get your MVP developed in just 6 weeks.",
    images: ['https://ik.imagekit.io/meaas6nsi/public/assets/powerproject.png'],
    creator: '@powerproject',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PowerProject",
    "description": "AI-Powered Software Development Company specializing in MVP development",
    "url": "https://powerproject.dev",
    "logo": "https://ik.imagekit.io/meaas6nsi/public/assets/powerproject.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@powerproject.dev"
    },
    "sameAs": [
      "https://twitter.com/powerproject",
      "https://linkedin.com/company/powerproject"
    ],
    "offers": {
      "@type": "Offer",
      "description": "MVP Development in 6 weeks",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&family=Fira+Code:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="https://ik.imagekit.io/meaas6nsi/assets/powerproject.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="gradient-bg text-white">
        <main>{children}</main>
      </body>
    </html>
  )
}
