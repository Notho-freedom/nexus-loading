import type React from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { PlayerBar } from "@/components/layout/player-bar"
import { Bell, Settings, Minus, Square, X } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Header */}
      <header className="fixed top-0 right-0 left-56 z-30 h-12 bg-card/80 backdrop-blur-xl border-b border-border flex items-center justify-end px-4 gap-2">
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-4 h-4" />
        </button>
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-sm">
          B
        </div>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Settings className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1 ml-4 border-l border-border pl-4">
          <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Minus className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Square className="w-3.5 h-3.5" />
          </button>
          <button className="p-1.5 text-muted-foreground hover:text-destructive transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pl-56 pt-12 pb-20">
        <div className="p-6">{children}</div>
      </main>

      <PlayerBar />
    </div>
  )
}
