"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { ModeToggle } from "../themeToggler/themeToggler";
import { IoPauseCircleOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogAction, AlertDialogCancel, AlertDialogDescription } from "@/components/ui/alert-dialog";

export default function Navbar() {
  const [played, setPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  function playSound() {
    if (!audioRef.current) {
      audioRef.current = new Audio("/bgm_portfolio.mp3");
      audioRef.current.loop = true;
    }

    if (played) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlayed(!played);
  }

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-20 w-[98vw] max-w-5xl rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-black/40 flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3 transition-all duration-300">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-1 sm:text-4xl text-2xl font-extrabold font-sans hover:scale-105 transition-transform duration-200"
      >
        <span className="text-green-500">G</span>
        <span className="text-yellow-500">Y</span>
        <span className="italic line-through text-primary">A</span>
        <span className="text-red-500">N</span>
      </Link>
      {/* Nav Links (Desktop) */}
      <div className="hidden sm:flex gap-6 items-center">
        <Link
          className="font-light text-primary px-3 py-1 rounded-lg hover:bg-white/40 dark:hover:bg-black/40 transition-colors duration-200 hover:backdrop-blur-md"
          href="/about"
        >
          About
        </Link>
        <Link
          className="font-light text-primary px-3 py-1 rounded-lg hover:bg-white/40 dark:hover:bg-black/40 transition-colors duration-200 hover:backdrop-blur-md"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="font-light text-primary px-3 py-1 rounded-lg hover:bg-white/40 dark:hover:bg-black/40 transition-colors duration-200 hover:backdrop-blur-md"
          href="/contact"
        >
          Contact
        </Link>
      </div>
      {/* Mobile Nav (AlertDialog) - menu icon on right */}
      <div className="flex items-center gap-2 sm:gap-4">
        
        <Link
          className="flex items-center justify-center w-9 h-9 text-2xl text-primary hover:scale-110 transition-transform duration-200"
          href="https://github.com/Gyannnnn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
        <div className="flex items-center justify-center w-9 h-9 text-2xl">
          <ModeToggle />
        </div>
        <button
          className="flex items-center justify-center w-9 h-9 text-2xl rounded-full hover:bg-white/30 dark:hover:bg-black/40 transition-colors duration-200"
          onClick={playSound}
          aria-label={played ? "Pause background music" : "Play background music"}
        >
          {played ? (
            <IoPauseCircleOutline className="text-red-600" />
          ) : (
            <FaRegCirclePlay className="text-green-600" />
          )}
        </button>
        <div className="sm:hidden flex items-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-10 w-10" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Menu</AlertDialogTitle>
                <AlertDialogDescription className="text-center">Navigate to a page</AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex flex-col gap-4 items-center py-4">
              <AlertDialogAction asChild>
                  <Link href="/" className="w-full text-center py-2 rounded-lg hover:bg-accent transition-colors text-lg font-medium">Home</Link>
                </AlertDialogAction>
                <AlertDialogAction asChild>
                  <Link href="/about" className="w-full text-center py-2 rounded-lg hover:bg-accent transition-colors text-lg font-medium">About</Link>
                </AlertDialogAction>
                <AlertDialogAction asChild>
                  <Link href="/projects" className="w-full text-center py-2 rounded-lg hover:bg-accent transition-colors text-lg font-medium">Projects</Link>
                </AlertDialogAction>
                <AlertDialogAction asChild>
                  <Link href="/contact" className="w-full text-center py-2 rounded-lg hover:bg-accent transition-colors text-lg font-medium">Contact</Link>
                </AlertDialogAction>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </nav>
  );
}
