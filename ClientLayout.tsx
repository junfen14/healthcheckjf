"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, User } from "lucide-react"
import { ThemeProvider } from "next-themes"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const pathname = usePathname()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold tracking-tight px-4 py-2">Health Condition Predictor</span>
              </Link>
            </div>
            <nav className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
                }`}
              >
                Dashboard
              </Link>
              <ThemeToggle />
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                >
                  <User className="h-5 w-5" />
                  <span className="sr-only">Toggle profile menu</span>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                        role="menuitem"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                        role="menuitem"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Settings
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2023 Health Condition Predictor. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/guide"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Guide
              </Link>
              <a
                href="mailto:juneaufennell1@gmail.com"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check for dark mode preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
    >
      {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

