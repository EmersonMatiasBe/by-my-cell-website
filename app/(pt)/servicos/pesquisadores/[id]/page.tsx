import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import OpenBudget from './openBudget'
import { Metadata } from 'next'

export function generateStaticParams() {
  return [
    { id: 'analise-de-microbiota' },
    { id: 'identificacao-de-microrganismos' },
    { id: 'sequenciamento-de-genomas-de-bacterias' },
    { id: 'sequenciamento-de-genomas-de-fungos-e-leveduras' },
    { id: 'metagenomica-shotgun' },
    { id: 'bioinformatica' }
  ]
}

type ID = 'analise-de-microbiota'

const titles = {
  'analise-de-microbiota': 'Análise de Microbiota',
  'identificacao-de-microrganismos': 'Identificação de Microrganismos',
  'sequenciamento-de-genomas-de-bacterias': 'Sequenciamento de Genomas de Bactérias',
  'sequenciamento-de-genomas-de-fungos-e-leveduras':
    'Sequenciamento de Genomas de Fungos e Leveduras',
  'metagenomica-shotgun': 'Metagenômica Shotgun',
  bioinformatica: 'Bioinformática'
}

export async function generateMetadata({ params }: { params: { id: ID } }): Promise<Metadata> {
  const slug = titles[params.id]

  return {
    title: `ByMyCell - ${slug}`
  }
}

export default function AgroServices({ params }: { params: { id: ID } }) {
  const { id } = params
  const { teste } = useTranslations('pt')

  return (
    <Container className="pt-40 pb-20">
      <div className="mx-auto px-6">
        <div className="flex flex-col flex-wrap gap-10 justify-center mb-10">
          <div className="w-[100%] h-[300px]  md:h-[400px] relative lg:w-[100%] lg:max-w-[800px] mx-auto">
            <img
              src={teste[id].image}
              alt="Nossa Empresa"
              className="rounded-xl w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h2 className="text-4xl font-bold text-secondary-500 text-center mb-8">
            {teste[id].title}
          </h2>

          <Wrapper className="w-full  flex flex-col justify-center max-w-[800px] mx-auto">
            {teste[id].description.map(({ title, text }) => {
              return (
                <div className="mb-8" key={title}>
                  <h6 className="font-bold text-2xl text-secondary-800 mb-2">{title}</h6>
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
