'use client'
import Link from 'next/link'
import Wrapper from '../ui/wrapper'
import NavigationMenu from '../navigation-menu'
import { RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri'
import translations from '@/i18n/translations'
import { useEffect, useState } from 'react'
import Container from '../ui/container'
import SideMenu from './side-menu'

export default function Header({ lang }: { lang: 'pt' | 'en' }) {
  const [location, setLocation] = useState('')

  useEffect(() => {
    const path = window.location.pathname
    setLocation(path)
  }, [])

  const header = translations(lang)?.header
  return (
    <header
      data-location={location}
      className="h-[80px] w-full fixed bg-gradient-to-bl from-primary-500  to-secondary-500  left-0 right-0  z-50"
    >
      <Container className="w-full text-white h-full px-5 flex justify-between items-center">
        <Wrapper className="w-[120px] sm:w-[200px]  flex h-full relative">
          <img src="/logo.png" alt="Logo" className="object-contain w-full h-full" />
        </Wrapper>

        <Wrapper className="gap-5 text-lg font-semibold hidden -- lg:flex">
          {header.map(({ href, items, label }, index) => {
            if (!items) {
              return (
                <Link href={href} onClick={() => setLocation('/contato')} key={index}>
                  {label}
                </Link>
              )
            } else {
              return <NavigationMenu hrefLink={href} label={label} items={items} key={index} />
            }
          })}
        </Wrapper>

        <Wrapper className="lg:w-[200px] flex text-xl justify-between">
          <Link href="/" className="hidden p-2 bg-white rounded-full text-secondary-500 lg:flex">
            <RiInstagramFill />
          </Link>
          <Link href="/" className="hidden p-2 bg-white rounded-full text-secondary-500 lg:flex">
            <RiLinkedinBoxFill />
          </Link>
          <Link href="/" className="hidden p-2 bg-white rounded-full text-secondary-500 lg:flex">
            <RiYoutubeFill />
          </Link>
          <Link href="/" className="hidden p-2 bg-white rounded-full text-secondary-500 lg:flex">
            <RiWhatsappFill />
          </Link>

          <SideMenu />
        </Wrapper>
      </Container>
    </header>
  )
}
