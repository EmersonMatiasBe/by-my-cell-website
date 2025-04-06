import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import OpenBudget from './openBudget'
import { Metadata } from 'next'

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

const titles = {
  'microrganismos-do-solo-e-nematoides': 'Microrganismos do Solo e Nematoides',
  'microbiota-geral': 'Microbiota Geral',
  'microbiota-de-produto-biologico': 'Microbiota de Produto Biológico',
  'producao-on-farm': 'Produção On Farm',
  'microbiota-de-compostagem': 'Microbiota de Compostagem',
  'identificacao-de-patogenos-de-plantas': 'Identificação de Patógenos de Plantas',
  'identificacao-de-microrganismo-isolado': 'Identificação de Microrganismo Isolado'
}

export async function generateMetadata({ params }: { params: { id: ID } }): Promise<Metadata> {
  const slug = titles[params.id]

  return {
    title: `ByMyCell - ${slug}`
  }
}

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
            {agroServices[id].description.map(({ title, text }) => {
              return (
                <div className="mb-8" key={title}>
                  <h6 className="font-bold text-2xl text-primary-800 mb-2">{title}</h6>
                  <p className="text-xl">{text}</p>
                </div>
              )
            })}
            <OpenBudget />
          </Wrapper>
        </div>
      </div>

      <Wrapper className="w-full h-[50dvh] absolute top-0 left-0 -z-10">
        <img
          src={agroServices[id].image}
          className="w-full h-full object-cover brightness-[0.3]"
          alt="Background do serviço"
          loading="lazy"
        />
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
