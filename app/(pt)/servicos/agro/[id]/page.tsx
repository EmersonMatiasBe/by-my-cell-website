import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Button from '@/components/ui/button/index'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export function generateStaticParams() {
  return [{ id: '1' }]
}

export default function AgroServices() {
  return (
    <Container className="pt-40 pb-20">
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Serviço 1</h2>

        <div className="flex flex-wrap gap-10 justify-center mb-10">
          <div className="w-[90%] max-w-[600px] h-auto overflow-hidden lg:w-1/2">
            <img
              src="/building.webp"
              alt="Nossa Empresa"
              className="rounded-xl w-full h-full object-contain"
            />
          </div>

          <Wrapper className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-5">
              <h6 className="font-bold text-xl text-primary-800 mb-2">Descrição</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio pariatur
                aspernatur maxime suscipit? Maiores debitis nam dolore amet perferendis? Odio,
                repellendus aut magnam quae nam vitae quasi voluptate? Laudantium, a.
              </p>
            </div>

            <div>
              <h6 className="font-bold text-xl text-primary-800 mb-2">Prazo</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio pariatur
                aspernatur maxime suscipit? Maiores debitis nam dolore amet perferendis? Odio,
                repellendus aut magnam quae nam vitae quasi voluptate? Laudantium, a.
              </p>
            </div>

            <Button.Secondary className="text-white mt-10">Fazer um Orçamento</Button.Secondary>
          </Wrapper>
        </div>
      </div>

      <Wrapper className="w-full h-[50dvh] absolute top-0 left-0 -z-10">
        <img src="/building.webp" className="w-full h-full object-cover brightness-[0.3]" alt="" />
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
