"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#features", label: "Fonctionnalités" },
  { href: "#screenshots", label: "Aperçu" },
  { href: "#themes", label: "Thèmes" },
  { href: "#pricing", label: "Tarifs" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
              <Music className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display text-xl font-bold tracking-wider text-primary text-glow-cyan">NEXUS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider glow-cyan"
            >
              <Link href="#download">Télécharger</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border p-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider mt-2"
              >
                <Link href="#download">Télécharger</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
