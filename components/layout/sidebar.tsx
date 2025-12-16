"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Search,
  Library,
  Bell,
  Heart,
  ListMusic,
  Clock,
  Disc3,
  Users,
  Video,
  AudioWaveform,
  FolderOpen,
  Download,
  Cloud,
  Music,
  ChevronLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navigationItems = [
  { name: "Accueil", href: "/dashboard", icon: Home },
  { name: "Rechercher", href: "/dashboard/search", icon: Search },
  { name: "Bibliothèque", href: "/dashboard/library", icon: Library },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
]

const musicItems = [
  { name: "Favoris", href: "/dashboard/favorites", icon: Heart, badge: 7 },
  { name: "Playlists", href: "/dashboard/playlists", icon: ListMusic },
  { name: "Récents", href: "/dashboard/recent", icon: Clock },
  { name: "Albums", href: "/dashboard/albums", icon: Disc3 },
  { name: "Artistes", href: "/dashboard/artists", icon: Users },
]

const mediaItems = [
  { name: "Vidéos", href: "/dashboard/videos", icon: Video },
  { name: "Sens Audio", href: "/dashboard/audio-analysis", icon: AudioWaveform },
]

const localItems = [
  { name: "Fichiers Locaux", href: "/dashboard/local", icon: FolderOpen },
  { name: "Téléchargements", href: "/dashboard/downloads", icon: Download },
]

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-56",
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20">
          <Music className="w-5 h-5 text-primary" />
        </div>
        {!collapsed && (
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-neon-cyan">NEXUS</span>
            <span className="text-xs text-muted-foreground">v1.0.0</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {/* Main Nav */}
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <NavItem key={item.href} item={item} isActive={pathname === item.href} collapsed={collapsed} />
          ))}
        </div>

        {/* Ma Musique */}
        <div className="mt-6">
          {!collapsed && (
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Ma Musique
            </h3>
          )}
          <div className="space-y-1">
            {musicItems.map((item) => (
              <NavItem key={item.href} item={item} isActive={pathname === item.href} collapsed={collapsed} />
            ))}
          </div>
        </div>

        {/* Médias */}
        <div className="mt-6">
          {!collapsed && (
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Médias</h3>
          )}
          <div className="space-y-1">
            {mediaItems.map((item) => (
              <NavItem key={item.href} item={item} isActive={pathname === item.href} collapsed={collapsed} />
            ))}
          </div>
        </div>

        {/* Local */}
        <div className="mt-6">
          {!collapsed && (
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Local</h3>
          )}
          <div className="space-y-1">
            {localItems.map((item) => (
              <NavItem key={item.href} item={item} isActive={pathname === item.href} collapsed={collapsed} />
            ))}
          </div>
        </div>
      </nav>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
      >
        <ChevronLeft className={cn("w-4 h-4 text-muted-foreground transition-transform", collapsed && "rotate-180")} />
      </button>

      {/* Connection Status */}
      <div className="px-4 py-3 border-t border-sidebar-border">
        <div className="flex items-center gap-2">
          <Cloud className="w-4 h-4 text-muted-foreground" />
          {!collapsed && <span className="text-sm text-muted-foreground">Non connecté</span>}
        </div>
      </div>
    </aside>
  )
}

function NavItem({
  item,
  isActive,
  collapsed,
}: {
  item: { name: string; href: string; icon: React.ElementType; badge?: number }
  isActive: boolean
  collapsed: boolean
}) {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
        isActive ? "bg-accent/20 text-accent" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
      )}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-r-full glow-green" />
      )}
      <Icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-accent")} />
      {!collapsed && (
        <>
          <span className="font-medium text-sm">{item.name}</span>
          {item.badge && (
            <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-accent/20 text-accent">{item.badge}</span>
          )}
        </>
      )}
    </Link>
  )
}
