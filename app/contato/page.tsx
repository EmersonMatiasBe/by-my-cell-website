import Contact from '@/_pages/contact/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ByMyCell - Contato',
  description:
    'A ByMyCell é uma startup brasileira de biotecnologia que simplifica o acesso à genômica, oferecendo soluções avançadas para análise de microrganismos via DNA.'
}

export default function ContactPt() {
  return <Contact />
}
