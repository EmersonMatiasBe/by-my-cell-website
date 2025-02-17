'use client'
import Link from 'next/link'
import Wrapper from '../ui/wrapper'
import NavigationMenu from '../navigation-menu'
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMenuLine,
  RiWhatsappFill,
  RiYoutubeFill
} from 'react-icons/ri'
import translations from '@/i18n/translations'
import { useEffect, useState } from 'react'
import Container from '../ui/container'

export default function Header({ lang }: { lang: 'pt' | 'en' }) {
  const items = [
    { label: 'Para a Pesquisa', link: '/servicos/pesquisadores' },
    { label: 'Para o Agro', link: '/servicos/agro' }
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
      className={`${location === '/aa' && 'bg-gradient-to-r from-[#355184] to-[#00b04f]'}  h-[80px] w-full fixed bg-gradient-to-r from-[#355184] to-[#00b04f]  left-0 right-0  z-50`}
    >
      <Container className="w-full text-white h-full px-5 flex justify-between items-center">
        <Wrapper className="w-[120px] sm:w-[200px]  flex h-full relative">
          <img src="/logo.png" alt="Logo" className="object-contain w-full h-full" />
        </Wrapper>

        <Wrapper className="gap-5 text-lg font-semibold hidden -- lg:flex">
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

          <div className="p-2 bg-white rounded-full text-secondary-500 lg:hidden">
            <RiMenuLine className="text-xl" />
          </div>
        </Wrapper>
      </Container>
    </header>
  )
}
