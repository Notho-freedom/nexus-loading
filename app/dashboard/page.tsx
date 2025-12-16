"use client"

import { Clock, Heart, Play, MoreHorizontal } from "lucide-react"
import Image from "next/image"

const recentlyPlayed = [
  {
    id: 1,
    title: "Tolisco - The Keys ...",
    artist: "Artiste inconnu",
    cover: "/neon-abstract-album-art.jpg",
  },
]

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
    title: "Tommee_Profitt_-_It's_Got_My_Name_On_It_(Mellen_Gi_Remix)(0)",
    artist: "Artiste inconnu",
    album: "Album inconnu",
    duration: "2:28",
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
    title: "Billie_Eilish_Khalid_-_lovely(0)",
    artist: "Artiste inconnu",
    album: "Album inconnu",
    duration: "3:21",
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
]

export default function DashboardPage() {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Bonjour"
    if (hour < 18) return "Bon après-midi"
    return "Bonsoir"
  }

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">
          {getGreeting()}, <span className="text-foreground">Boby Momo</span>, bienvenue sur{" "}
          <span className="text-neon-green">NEXUS</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          406 pistes disponibles dans votre bibliothèque • <span className="text-accent">Gratuit</span>
        </p>
      </div>

      {/* Recently Played */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-muted-foreground" />
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">Écouté Récemment</h2>
        </div>
        <div className="flex gap-4">
          {recentlyPlayed.map((track) => (
            <div
              key={track.id}
              className="flex items-center gap-3 p-3 rounded-lg bg-card/50 hover:bg-card transition-colors cursor-pointer group"
            >
              <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-muted">
                <Image src={track.cover || "/placeholder.svg"} alt={track.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-primary hover:underline cursor-pointer">{track.title}</p>
                <p className="text-xs text-muted-foreground">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Favorites */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-destructive fill-destructive" />
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">Vos Favoris</h2>
          <span className="text-sm text-muted-foreground ml-2">7 titres</span>
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
              <TrackRow key={track.id} track={track} index={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function TrackRow({
  track,
  index,
}: {
  track: (typeof favorites)[0]
  index: number
}) {
  return (
    <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-3 items-center hover:bg-muted/30 transition-colors group cursor-pointer">
      <span className="w-8 text-center text-sm text-muted-foreground group-hover:hidden">{index}</span>
      <div className="w-8 hidden group-hover:flex items-center justify-center">
        <Play className="w-4 h-4 text-foreground" />
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
  )
}
