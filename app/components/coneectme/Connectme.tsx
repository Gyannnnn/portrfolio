import Link from 'next/link'
import React from 'react'

export default function Connectme() {
  return (
    <div className='w-[67vw] h-40 flex flex-col items-start justify-start gap-2  '>
      <h1 className='text-3xl font-light'>Connect</h1>
      <h1 className='flex gap-2'>Email:<Link className='underline' href="">hi.gyanaranjanpatra@gmail.com</Link></h1>
      <Link className='underline' href="/resume">Download Resume</Link>
    </div>
  )
}
