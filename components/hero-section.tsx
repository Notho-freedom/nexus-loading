"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Play, Star, Users, Music } from "lucide-react"

export function HeroSection() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Version 1.0.0 disponible</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-6">
              <span className="text-foreground">Experience</span>
              <br />
              <span className="text-primary text-glow-cyan">NEXUS</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-display tracking-wide">AUDIO SYSTEM</p>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Un lecteur audio futuriste conçu pour ceux qui recherchent quelque chose d{"'"}extraordinaire. Analyse
              audio en temps réel, 9 thèmes personnalisables, synchronisation cloud et bien plus.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-foreground font-semibold">4.9/5</span>
                <span className="text-muted-foreground text-sm">Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground font-semibold">10K+</span>
                <span className="text-muted-foreground text-sm">Utilisateurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-secondary" />
                <span className="text-foreground font-semibold">∞</span>
                <span className="text-muted-foreground text-sm">Formats</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider text-lg px-8 glow-cyan"
              >
                <Link href="#download">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger Gratuitement
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-display tracking-wider text-lg px-8 bg-transparent"
              >
                <Link href="#screenshots">
                  <Play className="w-5 h-5 mr-2" />
                  Voir en Action
                </Link>
              </Button>
            </div>

            {/* Platforms */}
            <p className="mt-8 text-sm text-muted-foreground">
              Disponible sur <span className="text-foreground">Windows</span> •{" "}
              <span className="text-muted-foreground/50">macOS bientôt</span> •{" "}
              <span className="text-muted-foreground/50">Linux bientôt</span>
            </p>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl opacity-50" />

            {/* Loading Screen Preview */}
            <div className="relative glass rounded-2xl p-1 animate-float">
              <div className="relative rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/screenshot-202025-12-16-20133842.png"
                  alt="NEXUS Loading Screen"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />

                {/* Animated Progress Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                  <div
                    className="h-full transition-all duration-100"
                    style={{
                      width: `${progress}%`,
                      background: "linear-gradient(90deg, hsl(180 100% 50%), hsl(320 100% 60%))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-card border border-border p-3 glass animate-pulse-glow">
              <Image
                src="/images/album-cover-1.png"
                alt="Album Cover"
                width={80}
                height={80}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-card border border-border glass">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-foreground font-medium">Système prêt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
