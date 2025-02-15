import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import { RiArrowRightCircleFill } from 'react-icons/ri'

export default function Services() {
  return (
    <Container className="max-w-full h-dvh relative">
      <Wrapper className="absolute z-10 left-1/2 -translate-x-1/2 top-40">
        <h2 className="text-4xl font-bold text-white text-center mb-2">Nossos Serviços</h2>
        <p className="text-white text-lg">Escolha a área que mais te representa</p>
      </Wrapper>

      <Wrapper className="flex">
        <Wrapper className="w-1/2 h-dvh relative group">
          <img
            src="/laboratory.jpg"
            className="w-full h-full object-cover brightness-[0.2] group-hover:brightness-50 absolute top-0 left-0 -z-10"
            alt=""
          />

          <div className="rounded-full  left-1/2 absolute  -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col">
            <p className="text-5xl font-bold text-secondary-500 group-hover:text-secondary-100 text-center mb-2">
              Para PESQUISA
            </p>
            <p className="text-white invisible group-hover:visible mb-6">
              Veja os serviços que oferecemos exclusivo para os pesquisadores
            </p>

            <button className="text-white text-5xl mx-auto invisible group-hover:visible">
              <RiArrowRightCircleFill />
            </button>
          </div>
        </Wrapper>

        <Wrapper className="w-1/2 h-dvh relative group">
          <img
            src="/onion-plantation.jpg"
            className="w-full h-full object-cover brightness-[0.2] group-hover:brightness-50  absolute top-0 left-0 -z-10"
            alt=""
          />

          <div className="rounded-full  left-1/2 absolute  -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col">
            <p className="text-5xl font-bold text-primary-500 group-hover:text-primary-100 text-center mb-2">
              Para o AGRO
            </p>
            <p className="text-white invisible group-hover:visible mb-6">
              Veja os serviços que oferecemos exclusivo para os pesquisadores
            </p>

            <button className="text-white text-5xl mx-auto invisible group-hover:visible">
              <RiArrowRightCircleFill />
            </button>
          </div>
        </Wrapper>
      </Wrapper>
    </Container>
  )
}
