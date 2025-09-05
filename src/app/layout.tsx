import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PowerProject - AI-Powered Software Development",
  description: "Transform your ideas into cutting-edge software solutions with our expert team. Get your MVP developed in just 6 weeks with the latest technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&family=Fira+Code:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="gradient-bg text-white">
        <main>{children}</main>
      </body>
    </html>
  )
}
