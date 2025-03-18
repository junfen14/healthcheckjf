import type React from "react"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Health Condition Predictor",
  description: "Track your symptoms and find possible health conditions",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}



import './globals.css'