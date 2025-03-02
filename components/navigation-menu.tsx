'use client'
import Link from 'next/link'

interface NavigationMenu {
  label: string
  items: {
    label: string
    link: string
  }[]
  hrefLink?: string
}

export default function NavigationMenu({ items, label, hrefLink }: NavigationMenu) {
  return (
    <div className="relative group">
      <Link href={hrefLink ?? ''} className="text-black">
        <p className="text-white">{label}</p>
      </Link>

      <div className="absolute bottom-0 translate-y-full w-fit hidden flex-col group-hover:flex ">
        <div className="h-3"></div>
        <div className="bg-white w-[240px] py-2 text-left rounded-xl flex flex-col border border-neutral-500 text-black">
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
    </div>
  )
}
