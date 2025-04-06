import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import { Primary, Secondary } from '@/components/ui/button/index'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import Link from 'next/link'

export default function Services() {
  const { services } = useTranslations('pt')

  return (
    <Container className="max-w-full h-dvh relative">
      <Wrapper className="absolute z-10 left-1/2 -translate-x-1/2 top-40 hidden md:block">
        <h2 className="text-4xl font-bold text-white text-center mb-2">{services.title}</h2>
        <p className="text-white text-lg">{services.subtitle}</p>
      </Wrapper>

      <Wrapper className="flex h-dvh flex-col md:flex-row">
        <Wrapper className="w-full h-1/2 md:w-1/2 md:h-full relative group">
          <img
            src="/laboratory.webp"
            className="w-full h-full object-cover brightness-50 md:brightness-[0.2] md:group-hover:brightness-50 absolute top-0 left-0 -z-10"
            alt="Background do laboratório"
            loading="lazy"
          />

          <div className="mt-5 md:mt-0 left-1/2 absolute -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col w-full px-5">
            <p className="text-3xl font-bold text-secondary-100 text-center mb-2 md:text-secondary-500 md:group-hover:text-secondary-100  md:text-5xl ">
              {services.search.title}
            </p>
            <p className="text-white text-center md:invisible md:group-hover:visible mb-6">
              {services.search.subtitle}
            </p>

            <Link
              href="/servicos/pesquisadores"
              className="text-white mx-auto md:invisible md:group-hover:visible"
            >
              <Secondary className="transition-none">{services.search.labelButton}</Secondary>
            </Link>
          </div>
        </Wrapper>

        <Wrapper className="w-full  h-1/2 md:w-1/2 md:h-full relative group">
          <img
            src="/agro.webp"
            className="w-full h-full object-cover brightness-50 absolute top-0 left-0 -z-10 md:brightness-[0.2] md:group-hover:brightness-50 "
            alt="Background do Agro"
            loading="lazy"
          />

          <div className="left-1/2 absolute -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col w-full px-5">
            <p className="text-3xl font-bold text-primary-100 text-center mb-2 md:text-primary-500 md:group-hover:text-primary-100 md:text-5xl">
              {services.agro.title}
            </p>
            <p className="text-white text-center mb-6 md:invisible md:group-hover:visible">
              {services.agro.subtitle}
            </p>

            <Link
              href="/servicos/agro"
              className="text-white  mx-auto md:invisible md:group-hover:visible"
            >
              <Primary className="transition-none">{services.agro.labelButton}</Primary>
            </Link>
          </div>
        </Wrapper>
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
