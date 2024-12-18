"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { ModeToggle } from "../themeToggler/themeToggler";
import { IoPauseCircleOutline } from "react-icons/io5";

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
    <div className="bg-secondary text-white h-16 flex justify-around ">
      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center gap-5 sm:gap-10">
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="sm:text-3xl text-2xl text-primary font-sans non-italic  hover:cursor-pointer"
            >
              <span className="text-green-500 font-extrabold">G</span>
              <span className="text-yellow-500 font-extrabold">Y</span>
              <span className="font-sans italic font-extrabold line-through">
                A
              </span>
              <span className="text-red-500 font-extrabold">N</span>
            </Link>
          </div>
          <div className="flex justify-center items-center sm:gap-10 max-sm:gap-5">
            <Link
              className="font-extralight max-sm:font-light text-primary hover:underline underline-offset-2 max-sm:text-sm"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-extralight max-sm:font-light text-primary hover:underline underline-offset-2 max-sm:text-sm"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="font-extralight max-sm:font-light text-primary hover:underline underline-offset-2 max-sm:text-sm"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center sm:gap-10 gap-5">
        <Link
          className="text-lg text-primary"
          href="https://github.com/Gyannnnn"
        >
          <FaGithub />
        </Link>
        <ModeToggle />
        <div className="flex items-center justify-center" onClick={playSound}>
          {played ? (
            <button className="text-red-600 text-lg hover:cursor-pointer">
              <IoPauseCircleOutline />
            </button>
          ) : (
            <FaRegCirclePlay className="text-green-600 text-lg hover:cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}
