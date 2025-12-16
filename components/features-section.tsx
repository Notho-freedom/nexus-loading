import {
  Music,
  Radio,
  Video,
  Cloud,
  Palette,
  Download,
  BarChart3,
  Keyboard,
  Bell,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Lecteur Audio Avancé",
    description: "Support de tous les formats audio populaires avec une qualité sonore exceptionnelle.",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Analyse Audio Temps Réel",
    description: "Visualisez waveform, FFT spectrum, energy bands et plus encore en temps réel.",
    color: "secondary",
  },
  {
    icon: Video,
    title: "Lecteur Vidéo Intégré",
    description: "Regardez vos vidéos avec timeline, miniatures et contrôles avancés.",
    color: "primary",
  },
  {
    icon: Palette,
    title: "9 Thèmes Uniques",
    description: "Personnalisez votre expérience avec des thèmes inspirés de Spotify, Apple Music, Tidal et plus.",
    color: "secondary",
  },
  {
    icon: Cloud,
    title: "Synchronisation Cloud",
    description: "Cloudinary, Bunny Storage et serveur NEXUS pour un stockage illimité.",
    color: "primary",
  },
  {
    icon: Download,
    title: "Gestionnaire de Téléchargements",
    description: "Téléchargez et gérez vos fichiers facilement avec suivi de progression.",
    color: "secondary",
  },
  {
    icon: Keyboard,
    title: "Raccourcis Clavier",
    description: "Contrôlez tout avec des raccourcis intuitifs pour une productivité maximale.",
    color: "primary",
  },
  {
    icon: Bell,
    title: "Notifications Desktop",
    description: "Restez informé avec des notifications élégantes sur le titre en cours.",
    color: "secondary",
  },
  {
    icon: Radio,
    title: "Bibliothèque Intelligente",
    description: "Organisez favoris, playlists, albums et artistes automatiquement.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Performance Ultra",
    description: "Interface fluide et réactive grâce à une architecture optimisée.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Fichiers Locaux",
    description: "Accédez à votre musique locale sans connexion internet.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Design Futuriste",
    description: "Une esthétique cyberpunk unique avec effets néon et glassmorphism.",
    color: "secondary",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wider mb-4">
            <span className="text-foreground">Fonctionnalités</span>{" "}
            <span className="text-primary text-glow-cyan">Next-Gen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            NEXUS repousse les limites de ce qu{"'"}un lecteur audio peut offrir. Découvrez des fonctionnalités pensées
            pour les audiophiles exigeants.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                  }`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>

                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
