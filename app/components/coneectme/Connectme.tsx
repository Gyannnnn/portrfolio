import Link from 'next/link'
import React from 'react'

export default function Connectme() {
  return (
    <div className='sm:w-[67vw] max-sm:w-[90vw] h-40 flex flex-col items-start justify-start gap-2  '>
      <h1 className='text-3xl font-light'>Connect</h1>
      <h1 className='flex gap-2'>Email:<Link className='underline' href="mailto:hi.gyanaranjanpatra@gmail.com">hi.gyanaranjanpatra@gmail.com</Link></h1>
      <Link className='underline' href="/resume">Download Resume</Link>
    </div>
  )
}
