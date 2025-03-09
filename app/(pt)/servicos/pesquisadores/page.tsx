import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import Link from 'next/link'
import { IoArrowForwardCircle } from 'react-icons/io5'

export default function Agro() {
  const { search } = useTranslations('pt')

  return (
    <Container className="pb-20 pt-40 px-5">
      <Wrapper className="text-white text-center mb-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold">{search.title}</h2>
        <p className="text-lg text-white mt-4 max-w-[900px]">{search.subtitle}</p>
      </Wrapper>

      <Wrapper className="flex w-full justify-center flex-wrap  gap-x-5 gap-y-10">
        {search.items.map(({ title, subtitle, image, link }, index) => (
          <div
            className="flex flex-col w-full h-[420px] max-w-[600px] md:max-w-[400px] bg-white overflow-hidden rounded-lg"
            key={index}
          >
            <img
              className="w-[600px] h-[250px] min-h-[250px] object-cover object-center"
              src={image}
              alt=""
              loading="lazy"
            />
            <div className="px-4 py-4 flex flex-col h-full">
              <p className="font-semibold text-secondary-800 text-lg">{title}</p>
              <p className="line-clamp-3 font-light mb-2">{subtitle}</p>
              <Link href={`/servicos/pesquisadores/${link}`} className="mt-auto">
                <IoArrowForwardCircle className="text-4xl ml-auto text-secondary-800" />
              </Link>
            </div>
          </div>
        ))}
      </Wrapper>

      <Wrapper className="w-full h-dvh fixed top-0 left-0 -z-10 brightness-[0.2]">
        <img src="/laboratory.jpg" className="w-full h-full" alt="" loading="lazy" />
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
