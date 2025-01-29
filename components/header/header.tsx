'use client'
import Link from 'next/link'
import Wrapper from '../ui/wrapper'
import NavigationMenu from '../navigation-menu'
import { RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri'
import translations from '@/i18n/translations'
import { useEffect, useState } from 'react'
import Container from '../ui/container'

export default function Header({ lang }: { lang: 'pt' | 'en' }) {
  const items = [
    { label: 'Para sua Empresa', link: '' },
    { label: 'Para o Agro', link: '' }
  ]

  const [location, setLocation] = useState('')

  useEffect(() => {
    const path = window.location.pathname
    setLocation(path)
  }, [])

  const aa = translations(lang)
  return (
    <header
      data-location={location}
      className={`${location === '/aa' && 'bg-gradient-to-r from-[#355184] to-[#00b04f]'}  h-[80px] w-full absolute left-0 right-0  z-10`}
    >
      <Container className="w-full text-white h-full px-10 flex justify-between items-center">
        <Wrapper className="w-[200px]  flex h-full relative">
          <img src="/logo.png" alt="Logo" className="object-contain w-full h-full" />
        </Wrapper>

        <Wrapper className="flex gap-5 text-lg font-semibold">
          <Link href="/" className="" onClick={() => setLocation('/')}>
            {aa?.header[0].label}
          </Link>
          <NavigationMenu label="Serviços" items={items} />
          <Link href="/quem-somos" onClick={() => setLocation('/quem-somos')}>
            {aa?.header[2].label}
          </Link>
          <Link href="/contato" onClick={() => setLocation('/contato')}>
            {aa?.header[3].label}
          </Link>
        </Wrapper>

        <Wrapper className="w-[200px] flex text-xl justify-between">
          <Link href="/" className="p-2 bg-white rounded-full text-secondary-500">
            <RiInstagramFill />
          </Link>
          <Link href="/" className="p-2 bg-white rounded-full text-secondary-500">
            <RiLinkedinBoxFill />
          </Link>
          <Link href="/" className="p-2 bg-white rounded-full text-secondary-500">
            <RiYoutubeFill />
          </Link>
          <Link href="/" className="p-2 bg-white rounded-full text-secondary-500">
            <RiWhatsappFill />
          </Link>
        </Wrapper>
      </Container>
    </header>
  )
}
