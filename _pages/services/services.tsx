import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import Link from 'next/link'
import { RiArrowRightCircleFill } from 'react-icons/ri'

export default function Services() {
  return (
    <Container className="max-w-full h-dvh relative">
      <Wrapper className="absolute z-10 left-1/2 -translate-x-1/2 top-40 hidden md:block">
        <h2 className="text-4xl font-bold text-white text-center mb-2">Nossos Serviços</h2>
        <p className="text-white text-lg">Escolha a área que mais te representa</p>
      </Wrapper>

      <Wrapper className="flex h-dvh flex-col md:flex-row">
        <Wrapper className="w-full h-1/2 md:w-1/2 md:h-full relative group">
          <img
            src="/laboratory.jpg"
            className="w-full h-full object-cover brightness-50 md:brightness-[0.2] md:group-hover:brightness-50 absolute top-0 left-0 -z-10"
            alt=""
          />

          <div className=" left-1/2 absolute -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col w-full px-5">
            <p className="text-3xl font-bold text-secondary-100 text-center mb-2 md:text-secondary-500 md:group-hover:text-secondary-100  md:text-5xl ">
              Para PESQUISA
            </p>
            <p className="text-white text-center md:invisible md:group-hover:visible mb-6">
              Veja os serviços que oferecemos exclusivo para os pesquisadores
            </p>

            <Link
              href="/servicos/pesquisadores"
              className="text-white text-5xl mx-auto md:invisible md:group-hover:visible"
            >
              <RiArrowRightCircleFill />
            </Link>
          </div>
        </Wrapper>

        <Wrapper className="w-full  h-1/2 md:w-1/2 md:h-full relative group">
          <img
            src="/onion-plantation.jpg"
            className="w-full h-full object-cover brightness-50 absolute top-0 left-0 -z-10 md:brightness-[0.2] md:group-hover:brightness-50 "
            alt=""
          />

          <div className="left-1/2 absolute -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col w-full px-5">
            <p className="text-3xl font-bold text-primary-100 text-center mb-2 md:text-primary-500 md:group-hover:text-primary-100 md:text-5xl">
              Para o AGRO
            </p>
            <p className="text-white text-center mb-6 md:invisible md:group-hover:visible">
              Veja os serviços que oferecemos exclusivo para os pesquisadores
            </p>

            <Link
              href="/servicos/agro"
              className="text-white text-5xl mx-auto md:invisible md:group-hover:visible"
            >
              <RiArrowRightCircleFill />
            </Link>
          </div>
        </Wrapper>
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
