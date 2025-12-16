import Link from "next/link"
import { Music, Github, Twitter, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/50 flex items-center justify-center">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-primary">NEXUS</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Le lecteur audio futuriste pour ceux qui recherchent une expérience musicale extraordinaire.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Produit</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#screenshots" className="text-muted-foreground hover:text-primary transition-colors">
                  Aperçu
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-muted-foreground hover:text-primary transition-colors">
                  Télécharger
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Communauté</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 NEXUS Audio System. Tous droits réservés.</p>
          <p className="text-sm text-muted-foreground">
            Fait avec <span className="text-secondary">♥</span> pour les audiophiles
          </p>
        </div>
      </div>
    </footer>
  )
}
