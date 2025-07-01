import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Connectme() {
  return (
    <div className='flex flex-row gap-6 items-center justify-center w-full'>
      <Link
        href="https://github.com/Gyannnnn"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200 bg-white/70 dark:bg-black/40 rounded-full p-3 shadow-md hover:scale-110"
        aria-label="GitHub"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/higyan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors duration-200 bg-white/70 dark:bg-black/40 rounded-full p-3 shadow-md hover:scale-110"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </Link>
      <Link
        href="https://instagram.com/hi.gyan_"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-pink-500 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-200 transition-colors duration-200 bg-white/70 dark:bg-black/40 rounded-full p-3 shadow-md hover:scale-110"
        aria-label="Instagram"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://x.com/hi_gyaan?s=08"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 bg-white/70 dark:bg-black/40 rounded-full p-3 shadow-md hover:scale-110"
        aria-label="Twitter (X)"
      >
        <FaSquareXTwitter />
      </Link>
    </div>
  )
}
