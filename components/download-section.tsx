import { Download, Monitor, Apple, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function DownloadSection() {
  return (
    <section id="download" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wider mb-4">
              <span className="text-foreground">Téléchargez</span>{" "}
              <span className="text-primary text-glow-cyan">NEXUS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Prêt à transformer votre expérience audio ? Téléchargez NEXUS gratuitement et découvrez le futur de la
              musique sur desktop.
            </p>

            {/* Download Buttons */}
            <div className="space-y-4">
              {/* Windows - Available */}
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider glow-cyan justify-start px-8"
              >
                <Monitor className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Télécharger pour</div>
                  <div className="font-semibold">Windows 10/11</div>
                </div>
                <Download className="w-5 h-5 ml-auto" />
              </Button>

              {/* macOS - Coming Soon */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border text-muted-foreground cursor-not-allowed opacity-50 justify-start px-8 bg-transparent"
                disabled
              >
                <Apple className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Bientôt disponible</div>
                  <div className="font-semibold">macOS</div>
                </div>
              </Button>

              {/* Linux - Coming Soon */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border text-muted-foreground cursor-not-allowed opacity-50 justify-start px-8 bg-transparent"
                disabled
              >
                <Terminal className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Bientôt disponible</div>
                  <div className="font-semibold">Linux</div>
                </div>
              </Button>
            </div>

            {/* System Requirements */}
            <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-border">
              <h3 className="font-display font-semibold text-foreground mb-2">Configuration requise</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Windows 10 64-bit ou supérieur</li>
                <li>• 4 Go de RAM minimum</li>
                <li>• 200 Mo d{"'"}espace disque</li>
                <li>• Carte graphique avec support DirectX 11</li>
              </ul>
            </div>

            {/* Version Info */}
            <p className="mt-6 text-sm text-muted-foreground">
              Version actuelle : <span className="text-foreground font-mono">v1.0.0</span> • Build 2024.12.08
            </p>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 blur-3xl" />
            <div className="relative glass rounded-2xl p-2 animate-pulse-glow">
              <div className="relative rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/screenshot-202025-12-16-20133706.png"
                  alt="NEXUS Green Theme"
                  width={1000}
                  height={625}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
