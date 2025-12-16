import { Check, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    period: "pour toujours",
    description: "Parfait pour découvrir NEXUS",
    features: [
      "Lecteur audio complet",
      "Lecteur vidéo intégré",
      "9 thèmes personnalisables",
      "Analyse audio temps réel",
      "Fichiers locaux illimités",
      "Raccourcis clavier",
      "Notifications desktop",
    ],
    notIncluded: ["Stockage cloud", "Synchronisation auto", "Support prioritaire"],
    cta: "Télécharger",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "9,99€",
    period: "/mois",
    yearlyPrice: "7,99€/mois",
    yearlySaving: "Économisez 20%",
    description: "Pour les audiophiles exigeants",
    features: [
      "Tout le plan Gratuit",
      "Stockage cloud illimité",
      "Bunny Storage ultra-rapide",
      "Serveur NEXUS dédié",
      "Synchronisation automatique",
      "Support prioritaire 24/7",
      "Accès aux fonctionnalités avancées",
      "Mises à jour en avant-première",
    ],
    notIncluded: [],
    cta: "Passer au Pro",
    highlighted: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wider mb-4">
            <span className="text-foreground">Choisissez</span>{" "}
            <span className="text-accent glow-green">Votre Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Commencez gratuitement et passez au Pro quand vous êtes prêt pour plus de puissance.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-card border-accent glow-green"
                  : "bg-card/50 border-border hover:border-primary/50"
              }`}
            >
              {/* Badge for Pro */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-display font-semibold flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  Recommandé
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  {plan.name}
                  {plan.highlighted && <Sparkles className="w-5 h-5 text-accent" />}
                </h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                {plan.yearlyPrice && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">ou {plan.yearlyPrice} (annuel)</span>
                    <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                      {plan.yearlySaving}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 opacity-50">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-0.5 bg-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full font-display tracking-wider ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 glow-green"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                size="lg"
              >
                <Link href="#download">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
