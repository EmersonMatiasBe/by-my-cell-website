import AboutUs from '@/_pages/about-us/aboust-us'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ByMyCell - Quem Somos',
  description:
    'A ByMyCell é uma startup brasileira de biotecnologia que simplifica o acesso à genômica, oferecendo soluções avançadas para análise de microrganismos via DNA.'
}

export default function AboutUsPt() {
  return <AboutUs />
}
