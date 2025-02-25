"use client";

import * as React from "react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { GiMoon } from "react-icons/gi";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-sm text-primary " />
      ) : (
        <GiMoon className="h-6 w-6  font-light text-black text-sm" />
      )}
    </div>
  );
}
