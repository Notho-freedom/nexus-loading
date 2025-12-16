"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const screenshots = [
  {
    id: "dashboard",
    title: "Accueil",
    description: "Vue d'ensemble avec musiques récentes et favoris",
    src: "/images/screenshot-202025-12-16-20132532.png",
  },
  {
    id: "favorites",
    title: "Favoris",
    description: "Gérez vos titres préférés avec vue liste ou grille",
    src: "/images/screenshot-202025-12-16-20132556.png",
  },
  {
    id: "albums",
    title: "Albums",
    description: "Parcourez votre collection d'albums",
    src: "/images/screenshot-202025-12-16-20132612.png",
  },
  {
    id: "video",
    title: "Lecteur Vidéo",
    description: "Lecteur vidéo avec timeline et miniatures",
    src: "/images/screenshot-202025-12-16-20132734.png",
  },
  {
    id: "audio-analysis",
    title: "Analyse Audio",
    description: "Visualisation complète des paramètres audio",
    src: "/images/screenshot-202025-12-16-20132801.png",
  },
  {
    id: "downloads",
    title: "Téléchargements",
    description: "Gérez vos téléchargements et fichiers uploadés",
    src: "/images/screenshot-202025-12-16-20132829.png",
  },
  {
    id: "cloud",
    title: "Cloud Storage",
    description: "Connectez Cloudinary, Bunny ou le serveur NEXUS",
    src: "/images/screenshot-202025-12-16-20133326.png",
  },
  {
    id: "subscription",
    title: "Abonnements",
    description: "Plans gratuit et Pro avec avantages exclusifs",
    src: "/images/screenshot-202025-12-16-20133337.png",
  },
]

export function ScreenshotsSection() {
  const [activeScreenshot, setActiveScreenshot] = useState(screenshots[0])

  return (
    <section id="screenshots" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wider mb-4">
            <span className="text-foreground">Découvrez</span>{" "}
            <span className="text-secondary text-glow-magenta">l{"'"}Interface</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une interface intuitive et élégante conçue pour une expérience utilisateur exceptionnelle.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Screenshot Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
            {screenshots.map((screenshot) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveScreenshot(screenshot)}
                className={cn(
                  "flex-shrink-0 text-left p-4 rounded-xl border transition-all duration-300",
                  activeScreenshot.id === screenshot.id
                    ? "bg-primary/10 border-primary/50 glow-cyan"
                    : "bg-card/50 border-border hover:border-primary/30",
                )}
              >
                <h3 className="font-display font-semibold text-foreground mb-1">{screenshot.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{screenshot.description}</p>
              </button>
            ))}
          </div>

          {/* Screenshot Display */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 blur-3xl" />
            <div className="relative glass rounded-2xl p-2 animate-pulse-glow">
              <div className="relative rounded-xl overflow-hidden border border-border">
                <Image
                  src={activeScreenshot.src || "/placeholder.svg"}
                  alt={activeScreenshot.title}
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="font-display text-xl font-semibold text-foreground">{activeScreenshot.title}</h3>
              <p className="text-muted-foreground">{activeScreenshot.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
