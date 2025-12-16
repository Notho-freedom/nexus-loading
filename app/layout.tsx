import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Rajdhani } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "NEXUS Player - Futuristic Audio System",
  description:
    "Experience music like never before. NEXUS is a next-gen desktop audio player with real-time audio analysis, video playback, cloud sync, and 9 stunning themes.",
  keywords: ["music player", "audio player", "desktop app", "audio analysis", "visualizer"],
  authors: [{ name: "NEXUS Team" }],
  openGraph: {
    title: "NEXUS Player - Futuristic Audio System",
    description: "Experience music like never before with the most advanced desktop audio player.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${orbitron.variable} ${rajdhani.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
