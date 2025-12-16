"use client"

import { useState, useEffect } from "react"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  ListMusic,
  Volume2,
  Maximize2,
  MoreHorizontal,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

export function PlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)
  const [currentTime, setCurrentTime] = useState("0:00")
  const totalTime = "3:55"

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 0
          }
          const newProgress = prev + 0.5
          const seconds = Math.floor((newProgress / 100) * 235)
          const mins = Math.floor(seconds / 60)
          const secs = seconds % 60
          setCurrentTime(`${mins}:${secs.toString().padStart(2, "0")}`)
          return newProgress
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-card/95 backdrop-blur-xl border-t border-border">
      <div className="flex items-center h-full px-4 gap-4">
        {/* Current Track */}
        <div className="flex items-center gap-3 w-64 min-w-0">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center">
              <span className="font-display font-bold text-lg text-primary">N</span>
            </div>
            {isPlaying && <div className="absolute inset-0 border-2 border-primary/50 rounded-lg animate-pulse-glow" />}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Tolisco - The Keys myfreemp3.vip</p>
            <p className="text-xs text-muted-foreground truncate">Artiste inconnu • Album inconnu</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex-1 flex flex-col items-center gap-1 max-w-2xl">
          <div className="flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                isPlaying
                  ? "bg-accent text-accent-foreground glow-green"
                  : "bg-accent text-accent-foreground hover:scale-105",
              )}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Repeat className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground w-10 text-right">{currentTime}</span>
            <div className="flex-1 relative h-1 group">
              <Slider
                value={[progress]}
                max={100}
                step={0.1}
                onValueChange={(value) => setProgress(value[0])}
                className="cursor-pointer"
              />
            </div>
            <span className="text-xs text-muted-foreground w-10">{totalTime}</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 w-64 justify-end">
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <ListMusic className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 w-28">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
            <Slider
              value={[volume]}
              max={100}
              step={1}
              onValueChange={(value) => setVolume(value[0])}
              className="cursor-pointer"
            />
          </div>
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
