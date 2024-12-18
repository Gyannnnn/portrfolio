"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { WiMoonAltNew } from "react-icons/wi";

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-sm text-primary " />
      ) : (
        <WiMoonAltNew className="h-6 w-6 text-white font-light text-black text-sm" />
      )}
    </div>
  )
}
