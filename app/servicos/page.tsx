import Services from '@/_pages/services/services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ByMyCell - Serviços',
  description:
    'A ByMyCell é uma startup brasileira de biotecnologia que simplifica o acesso à genômica, oferecendo soluções avançadas para análise de microrganismos via DNA.'
}

export default function ServicesPt() {
  return <Services />
}
