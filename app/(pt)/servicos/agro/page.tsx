import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import Link from 'next/link'
import { IoArrowForwardCircle } from 'react-icons/io5'

export default function Agro() {
  const services = ['1', '2', '3', '4', '5', '6', '8', '9', '10']

  return (
    <Container className="pb-20 pt-40 px-5">
      <Wrapper className="text-white text-center mb-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold">Serviços para o Agro</h2>
        <p className="text-lg text-white mt-4 max-w-[900px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo hic dignissimos
          provident eveniet id praesentium veniam similique aperiam nobis laudantium quas iure.
          Mollitia consequuntur quasi eligendi libero minima tempora.
        </p>
      </Wrapper>

      <Wrapper className="flex w-full justify-center flex-wrap  gap-x-5 gap-y-10">
        {services.map((service) => (
          <div
            className="w-full max-w-[600px] md:max-w-[400px] bg-white overflow-hidden rounded-lg"
            key={service}
          >
            <img src="/building.webp" alt="" loading="lazy" />
            <div className="px-4 py-4">
              <p className="font-semibold text-primary-800 text-lg">
                Serviço para o Agro {service}
              </p>
              <p className="line-clamp-3 font-light mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium dicta
                nemo alias cumque suscipit sint assumenda possimus? Temporibus quidem hic optio a
                quo pariatur praesentium dolore magnam. Porro, consectetur.
              </p>
              <Link href="/servicos/agro/1">
                <IoArrowForwardCircle className="text-4xl ml-auto text-primary-800" />
              </Link>
            </div>
          </div>
        ))}
      </Wrapper>

      <Wrapper className="w-full h-dvh fixed top-0 left-0 -z-10 brightness-[0.2]">
        <img src="/onion-plantation.jpg" className="w-full h-full" alt="" loading="lazy" />
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
