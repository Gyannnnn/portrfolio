import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full bg-white/20 dark:bg-black/30 backdrop-blur-xl border-t border-white/30 dark:border-black/40 py-6 mt-10">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
      <div className="text-sm text-gray-700 dark:text-gray-300 text-center md:text-left">
        &copy; {new Date().getFullYear()} Gyanaranjan Patra. All rights reserved.
      </div>
      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:underline text-primary text-sm">Home</Link>
        <Link href="/about" className="hover:underline text-primary text-sm">About</Link>
        <Link href="/projects" className="hover:underline text-primary text-sm">Projects</Link>
        <Link href="/contact" className="hover:underline text-primary text-sm">Contact</Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="https://github.com/Gyannnnn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-xl text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/higyan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-xl text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors duration-200">
          <FaLinkedin />
        </Link>
        <Link href="https://x.com/hi_gyaan?s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)" className="text-xl text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
          <FaSquareXTwitter />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer; 