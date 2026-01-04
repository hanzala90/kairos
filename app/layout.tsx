import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FloatingElements } from "@/components/ui/floating-elements"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KAIROS - The Revolutionary Memecoin",
  description: "The memecoin that's actually going places! Funding AI startups through the power of memes.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark-gradient min-h-screen`} suppressHydrationWarning>
        <FloatingElements />
        {children}
      </body>
    </html>
  )
}



import './globals.css'