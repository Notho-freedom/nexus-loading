"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const themes = [
  {
    id: "dark",
    name: "Sombre",
    description: "Thème par défaut futuriste",
    gradient: "from-slate-600 to-slate-800",
    src: "/images/screenshot-202025-12-16-20133402.png",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Design épuré noir et blanc",
    gradient: "from-gray-400 to-gray-600",
    src: "/images/screenshot-202025-12-16-20133407.png",
  },
  {
    id: "youtube",
    name: "YouTube Music",
    description: "Inspiré de YouTube Music",
    gradient: "from-red-500 to-red-700",
    src: "/images/screenshot-202025-12-16-20133411.png",
  },
  {
    id: "tidal",
    name: "Tidal",
    description: "Style Tidal élégant",
    gradient: "from-cyan-400 to-cyan-600",
    src: "/images/screenshot-202025-12-16-20133417.png",
  },
  {
    id: "deezer",
    name: "Deezer",
    description: "Couleurs vibrantes Deezer",
    gradient: "from-cyan-500 to-pink-500",
    src: "/images/screenshot-202025-12-16-20133432.png",
  },
  {
    id: "apple",
    name: "Apple Music",
    description: "Esthétique Apple Music",
    gradient: "from-pink-500 to-red-500",
    src: "/images/screenshot-202025-12-16-20133437.png",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    description: "Néon jaune futuriste",
    gradient: "from-yellow-400 to-orange-500",
    src: "/images/screenshot-202025-12-16-20133442.png",
  },
]

export function ThemesSection() {
  const [activeTheme, setActiveTheme] = useState(themes[0])

  return (
    <section id="themes" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wider mb-4">
            <span className="text-foreground">9 Thèmes</span>{" "}
            <span className="text-accent text-glow-cyan">Uniques</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Personnalisez NEXUS avec des thèmes inspirés des meilleures plateformes musicales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Theme Preview */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 blur-3xl" />
            <div className="relative glass rounded-2xl p-2">
              <div className="relative rounded-xl overflow-hidden border border-border">
                <Image
                  src={activeTheme.src || "/placeholder.svg"}
                  alt={activeTheme.name}
                  width={1000}
                  height={625}
                  className="w-full h-auto transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Theme Selector */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  className={cn(
                    "relative p-4 rounded-xl border transition-all duration-300 text-left group",
                    activeTheme.id === theme.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card/50 hover:border-primary/50",
                  )}
                >
                  {/* Selection indicator */}
                  {activeTheme.id === theme.id && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                  )}

                  {/* Gradient Preview */}
                  <div className={cn("w-full h-8 rounded-lg bg-gradient-to-r mb-3", theme.gradient)} />

                  <h3 className="font-display font-semibold text-foreground text-sm">{theme.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{theme.description}</p>
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              + 2 thèmes supplémentaires : <span className="text-foreground">Clair</span> et{" "}
              <span className="text-foreground">Spotify</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
