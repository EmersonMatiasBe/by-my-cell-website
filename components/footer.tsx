import Wrapper from './ui/wrapper'
import NavigationMenu from './navigation-menu'
import Link from 'next/link'
import { RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri'

const Footer = () => {
  const items = [
    { label: 'Para sua Empresa', link: '' },
    { label: 'Para o Agro', link: '' }
  ]

  return (
    <footer className="bg-gradient-to-r from-secondary-900 to-primary-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-10 px-5">
        <div className="flex flex-col items-start gap-3 w-[400px]">
          <img src="/logo.png" alt="Company Logo" className="w-32 h-auto mb-3" />
          <p className="text-sm max-w-xs">
            Transforming ideas into innovative solutions. Your trusted partner in success.
          </p>
        </div>

        <Wrapper className="flex gap-5 text-lg font-semibold">
          <Link href="/" className="">
            Inicio
          </Link>
          <NavigationMenu label="Serviços" items={items} />
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/contato">Contato</Link>
        </Wrapper>

        <div className="flex flex-col gap-2 items-end  w-[400px]">
          <div>
            <h4 className="text-left text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-3">
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
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-5 text-center">
        <p className="text-sm mb-2">CNPJ: 12.345.678/0001-90</p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
