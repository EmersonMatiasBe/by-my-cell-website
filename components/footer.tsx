import Wrapper from './ui/wrapper'
import Link from 'next/link'
import { RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri'
import useTranslations from '@/i18n/translations'

const Footer = () => {
  const { socialMedias } = useTranslations('pt')

  return (
    <footer className="bg-gradient-to-r from-secondary-900 to-primary-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-10 px-5">
        <div className="flex flex-col items-center w-full gap-3 lg:w-[400px] lg:items-start">
          <img src="/logo.png" alt="Company Logo" className="w-32 h-auto mb-3" loading="lazy" />
          <p className="text-sm max-w-xs text-center lg:text-left">
            Simplificando o acesso a tecnologia genômica no Brasil
          </p>
        </div>

        <Wrapper className="flex gap-5 text-lg font-semibold w-full justify-center lg:w-fit">
          <Link href="/" className="">
            Início
          </Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/contato">Contato</Link>
        </Wrapper>

        <div className="flex flex-col gap-2 w-full items-center  lg:w-[400px] lg:items-end  ">
          <div>
            <h4 className="text-center text-lg font-semibold mb-2 lg:text-left">Siga-nos</h4>
            <div className="flex gap-3">
              <Link
                href={socialMedias.instagram}
                target="_blank"
                className="p-2 bg-white rounded-full text-secondary-500"
              >
                <RiInstagramFill />
              </Link>
              <Link
                href={socialMedias.linkedin}
                target="_blank"
                className="p-2 bg-white rounded-full text-secondary-500"
              >
                <RiLinkedinBoxFill />
              </Link>
              <Link
                href={socialMedias.youtube}
                target="_blank"
                className="p-2 bg-white rounded-full text-secondary-500"
              >
                <RiYoutubeFill />
              </Link>
              <Link
                href={socialMedias.whatsapp}
                target="_blank"
                className="p-2 bg-white rounded-full text-secondary-500"
              >
                <RiWhatsappFill />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-5 text-center">
        <p className="text-sm mb-2">CNPJ: 40.439.752/0001-78</p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} ByMyCell. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
