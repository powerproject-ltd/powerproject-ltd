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
      <body className="gradient-bg text-white">
        <main>{children}</main>
      </body>
    </html>
  )
}
