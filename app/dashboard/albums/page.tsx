"use client"

import { Play, MoreHorizontal } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

const albums = [
  {
    id: 1,
    title: "Album inconnu",
    artist: "Artiste inconnu",
    tracks: 234,
    cover: "/neon-geometric-abstract-album-cover-cyan-magenta.jpg",
  },
  {
    id: 2,
    title: "Album inconnu",
    artist: "Halo",
    tracks: 1,
    cover: "/neon-geometric-abstract-album-cover-blue-pink.jpg",
  },
  {
    id: 3,
    title: "Ceinture noire",
    artist: "Maître Gims",
    tracks: 1,
    cover: "/man-sunglasses-black-white-album-cover.jpg",
  },
  {
    id: 4,
    title: "Ceinture noire (Transcendance)",
    artist: "Maître Gims",
    tracks: 2,
    cover: "/placeholder-zmevh.png",
  },
  {
    id: 5,
    title: "Comme Prévu",
    artist: "Ninho",
    tracks: 30,
    cover: "/ninho-red-pattern-album-cover.jpg",
  },
  {
    id: 6,
    title: "Destin",
    artist: "Ninho",
    tracks: 10,
    cover: "/man-road-sky-album-cover-cinematic.jpg",
  },
  {
    id: 7,
    title: "Eternel Insatisfait",
    artist: "Black M",
    tracks: 30,
    cover: "/neon-geometric-blue-purple-abstract.jpg",
  },
  {
    id: 8,
    title: "Goutte d'eau",
    artist: "Ninho",
    tracks: 2,
    cover: "/man-sky-clouds-dramatic-album-cover.jpg",
  },
  {
    id: 9,
    title: "M.I.L.S 3 - Www.33rapfr.com",
    artist: "Ninho - Www.33rapmp3.com",
    tracks: 37,
    cover: "/placeholder-qg4ed.png",
  },
  {
    id: 10,
    title: "M.I.L.S 3 (Réédition) - Www.Ti...",
    artist: "Ninho",
    tracks: 49,
    cover: "/mils-3-reedition-ninho.jpg",
  },
]

export default function AlbumsPage() {
  const [hoveredAlbum, setHoveredAlbum] = useState<number | null>(null)
  const totalTracks = albums.reduce((acc, album) => acc + album.tracks, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground">Albums</h1>
        <p className="text-muted-foreground mt-1">
          {albums.length} albums • {totalTracks} titres
        </p>
      </div>

      {/* Albums Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredAlbum(album.id)}
            onMouseLeave={() => setHoveredAlbum(null)}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden bg-card mb-3">
              <Image
                src={album.cover || "/placeholder.svg"}
                alt={album.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className={cn(
                  "absolute inset-0 bg-black/50 flex items-center justify-center gap-2 transition-opacity duration-200",
                  hoveredAlbum === album.id ? "opacity-100" : "opacity-0",
                )}
              >
                <button className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform glow-green">
                  <Play className="w-6 h-6 text-accent-foreground ml-0.5" />
                </button>
                <button className="w-8 h-8 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm text-foreground truncate group-hover:text-primary transition-colors">
                {album.title}
              </h3>
              <p className="text-xs text-muted-foreground truncate">{album.artist}</p>
              <p className="text-xs text-muted-foreground">{album.tracks} titres</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
