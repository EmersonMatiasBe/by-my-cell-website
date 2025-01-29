'use client'
import Link from 'next/link'
import { useState } from 'react'

interface NavigationMenu {
  label: string
  items: {
    label: string
    link: string
  }[]
}

export default function NavigationMenu({ items, label }: NavigationMenu) {
  const [open, setOpen] = useState(false)

  return (
    <Link
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      href="/servicos"
      className="relative text-black"
    >
      <p className="text-green-500">{label}</p>
      {open && (
        <div className="absolute bottom-0 translate-y-full w-fit flex flex-col ">
          <div className="h-3"></div>
          <div className="bg-white w-[240px] py-2 text-left rounded-xl flex flex-col border border-neutral-500">
            {items.map(({ label, link }, index) => (
              <Link
                href={link}
                className="py-2 hover:bg-black hover:bg-opacity-15 px-5 font-normal"
                key={index}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </Link>
  )
}
