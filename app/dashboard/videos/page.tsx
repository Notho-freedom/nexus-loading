"use client"

import { useState } from "react"
import Image from "next/image"

const thumbnails = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  time: `${Math.floor(i * 0.6)}:${((i * 36) % 60).toString().padStart(2, "0")}`,
}))

const players = [
  { name: "Reyna", agent: "Reyna", avatar: "/valorant-reyna-character.jpg" },
  { name: "TIMHANEGUNDAKC", agent: "Raze", avatar: "/valorant-raze-character.jpg" },
  { name: "ZenaTan125", agent: "Jett", avatar: "/valorant-jett-character.jpg" },
  { name: "muminking00", agent: "Viper", avatar: "/valorant-viper-character.jpg" },
  { name: "Neon", agent: "Neon", avatar: "/placeholder.svg?height=60&width=60" },
]

export default function VideosPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(12)
  const [volume, setVolume] = useState(80)

  return (
    <div className="space-y-4 -mx-6 -mt-6">
      {/* Video Player Container */}
      <div className="relative bg-black aspect-video max-h-[70vh] overflow-hidden">
        {/* Video Background */}
        <Image src="/placeholder.svg?height=720&width=1280" alt="Video" fill className="object-cover" />

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-3 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-destructive/80 text-white text-xs font-semibold rounded">B</span>
          </div>
          {/* Additional code can be added here */}
        </div>
      </div>
    </div>
  )
}
