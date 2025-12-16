"use client"

import { Play, Shuffle, Search, MoreHorizontal, List, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useState } from "react"

const favorites = [
  {
    id: 1,
    title: "Alok_&_Alan_Walker_-_Headlight_(Fajar_Asia_Remix)_feat._KIDDO(0)",
    artist: "Artiste inconnu",
    album: "Album inconnu",
    duration: "2:45",
  },
  {
    id: 2,
    title: "Billie_Eilish_Khalid_-_lovely(0)",
    artist: "Artiste inconnu",
    album: "Album inconnu",
    duration: "3:21",
  },
  {
    id: 3,
    title: "Ninho - Tokarev",
    artist: "Artiste inconnu",
    album: "Album inconnu",
    duration: "3:49",
  },
  {
    id: 4,
    title: "Tommee_Profitt_-_It's_Got_My_Name_On_It_(Mellen_Gi_Remix)(0)",
    artist: "Artiste inconnu",
    album: "Album inconnu",
    duration: "2:28",
  },
  {
    id: 5,
    title: "Zaho_-_Jardin_d'Eden_(Clip_officiel)(128kbps)",
    artist: "Artiste inconnu",
    album: "Album inconnu",
    duration: "4:12",
  },
  {
    id: 6,
    title: "Zaho_-_Je_Te_Promets_(Clip_Officiel)(128kbps)",
    artist: "Artiste inconnu",
    album: "Album inconnu",
    duration: "4:09",
  },
  {
    id: 7,
    title: "Z_Kietu(128kbps)",
    artist: "Artiste inconnu",
    album: "Album inconnu",
    duration: "3:52",
  },
]

export default function FavoritesPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null)

  const totalDuration = "24 min"

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-4xl font-bold text-foreground">Favoris</h1>
          <p className="text-muted-foreground mt-1">
            {favorites.length} titres • {totalDuration}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <span>Titre</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Titre</DropdownMenuItem>
              <DropdownMenuItem>Artiste</DropdownMenuItem>
              <DropdownMenuItem>Album</DropdownMenuItem>
              <DropdownMenuItem>Durée</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode("list")}
            className={cn(viewMode === "list" && "bg-muted")}
          >
            <List className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode("grid")}
            className={cn(viewMode === "grid" && "bg-muted")}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Play className="w-4 h-4" />
            Tout lire
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Shuffle className="w-4 h-4" />
            Aléatoire
          </Button>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Rechercher..." className="pl-9 bg-card/50 border-border" />
        </div>
      </div>

      {/* Track List */}
      <div className="bg-card/30 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-3 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <span className="w-8 text-center">#</span>
          <span>Titre</span>
          <span>Album</span>
          <span className="w-20 text-right">Durée</span>
        </div>

        {/* Tracks */}
        <div className="divide-y divide-border/50">
          {favorites.map((track, index) => (
            <div
              key={track.id}
              className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-3 items-center hover:bg-muted/30 transition-colors group cursor-pointer"
              onMouseEnter={() => setHoveredTrack(track.id)}
              onMouseLeave={() => setHoveredTrack(null)}
            >
              <div className="w-8 flex items-center justify-center">
                {hoveredTrack === track.id ? (
                  <Play className="w-4 h-4 text-foreground" />
                ) : (
                  <span className="text-sm text-muted-foreground">{index + 1}</span>
                )}
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-10 h-10 rounded bg-muted flex-shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/30 to-neon-magenta/30" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{track.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground truncate">{track.album}</span>
              <div className="flex items-center gap-2 w-20 justify-end">
                <span className="text-sm text-muted-foreground">{track.duration}</span>
                <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
