import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Button from '@/components/ui/button/index'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'

export function generateStaticParams() {
  return [
    { id: 'analise-de-microbiota' },
    { id: 'identificacao-de-microrganismos' },
    { id: 'sequenciamento-de-genomas-de-bacterias' },
    { id: 'bioinformatica' }
  ]
}

type ID = 'analise-de-microbiota'

export default function AgroServices({ params }: { params: { id: ID } }) {
  const { id } = params
  const { teste } = useTranslations('pt')

  return (
    <Container className="pt-40 pb-20">
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-8">{teste[id].title}</h2>

        <div className="flex flex-wrap gap-10 justify-center mb-10">
          <div className="w-[100%] h-[300px]  md:h-[400px] relative lg:w-[100%] lg:max-w-full">
            <img
              src={teste[id].image}
              alt="Nossa Empresa"
              className="rounded-xl w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <Wrapper className="w-full  flex flex-col justify-center">
            <div className="mb-5">
              <h6 className="font-bold text-xl text-secondary-800 mb-2">Descrição</h6>
              <p>{teste[id].description}</p>
            </div>

            <div>
              <h6 className="font-bold text-xl text-secondary-800 mb-2">Prazo</h6>
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
        <img
          src={teste[id].image}
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
