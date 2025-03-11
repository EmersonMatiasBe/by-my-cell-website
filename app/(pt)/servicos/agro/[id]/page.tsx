import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Button from '@/components/ui/button/index'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'

export function generateStaticParams() {
  return [
    { id: 'microrganismos-do-solo-e-nematoides' },
    { id: 'microbiota-geral' },
    { id: 'microbiota-de-produto-biologico' },
    { id: 'producao-on-farm' },
    { id: 'microbiota-de-compostagem' },
    { id: 'identificacao-de-patogenos-de-plantas' },
    { id: 'identificacao-de-microrganismo-isolado' }
  ]
}

type ID = 'microrganismos-do-solo-e-nematoides'

export default function AgroServices({ params }: { params: { id: ID } }) {
  const { id } = params
  const { agroServices } = useTranslations('pt')

  return (
    <Container className="pt-40 pb-20">
      <div className="mx-auto px-6">
        <div className="flex flex-col flex-wrap gap-10 justify-center mb-10">
          <div className="w-[100%] h-[300px]  md:h-[400px] relative lg:w-[100%] lg:max-w-[800px] mx-auto">
            <img
              src={agroServices[id].image}
              alt="Nossa Empresa"
              className="rounded-xl w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h2 className="text-4xl font-bold text-primary-500 text-center mb-8">
            {agroServices[id].title}
          </h2>

          <Wrapper className="w-full  flex flex-col justify-center max-w-[800px] mx-auto">
            <div className="mb-8">
              <h6 className="font-bold text-2xl text-primary-800 mb-2">Descrição</h6>
              <p className="text-xl">{agroServices[id].description}</p>
            </div>

            <div>
              <h6 className="font-bold text-2xl text-primary-800 mb-2">Prazo</h6>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio pariatur
                aspernatur maxime suscipit? Maiores debitis nam dolore amet perferendis? Odio,
                repellendus aut magnam quae nam vitae quasi voluptate? Laudantium, a.
              </p>
            </div>

            <Button.Primary className="text-white mt-10 h-20 max-w-[800px] mx-auto">
              Fazer um Orçamento
            </Button.Primary>
          </Wrapper>
        </div>
      </div>

      <Wrapper className="w-full h-[50dvh] absolute top-0 left-0 -z-10">
        <img
          src={agroServices[id].image}
          className="w-full h-full object-cover brightness-[0.3]"
          alt=""
          loading="lazy"
        />
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
