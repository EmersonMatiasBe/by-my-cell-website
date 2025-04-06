import Footer from '@/components/footer'
import './globals.css'
import Header from '@/components/header/header'
import { Nunito_Sans } from '@next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '1000', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'ByMyCell',
  description:
    'A ByMyCell é uma startup brasileira de biotecnologia que simplifica o acesso à genômica, oferecendo soluções avançadas para análise de microrganismos via DNA.',
  metadataBase: new URL('https://bymycell.com/'),
  openGraph: {
    type: 'website',
    title: 'ByMyCell',
    description:
      'A ByMyCell é uma startup brasileira de biotecnologia que simplifica o acesso à genômica, oferecendo soluções avançadas para análise de microrganismos via DNA.',
    url: 'https://bymycell.com/'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is BlackGenn's mission?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BlackGenn is a Brazilian biotechnology startup dedicated to accelerating the development of new biotechnological products. The company integrates advanced techniques in Synthetic Biology, Metagenomics, Automation, and Cloud Computing to develop technologies for engineering microorganisms and creating innovative agricultural bioproducts.'
      }
    },
    {
      '@type': 'Question',
      name: 'What services does BlackGenn offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BlackGenn offers solutions for microbial prospecting, microorganism engineering, and the creation of agricultural bioproducts using cutting-edge technology to ensure efficient development of innovative biotechnological solutions.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I get in touch with BlackGenn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach out to BlackGenn via their official website at https://blackgenn.com or through their contact page for inquiries about their services and collaborations.'
      }
    }
  ],
  headline: 'FAQs about BlackGenn - A Biotechnology Innovation Company',
  description:
    "Learn more about BlackGenn's mission, services, and how they leverage advanced biotechnological techniques to innovate in agriculture and beyond.",
  author: {
    '@type': 'Organization',
    name: 'BlackGenn',
    url: 'https://blackgenn.com/'
  },
  datePublished: '2024-11-24',
  dateModified: '2024-11-24'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <Script
        id="blackgenn-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <head>
        <link rel="canonical" href="https://bymycell.com/" key="canonical" />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/2a7b9440-5616-42a9-895a-da431763261a.png?token=6AAvDD5PqopNinak9oiIOu3SE90VYc7fJuhvP5xCshQ&height=232&width=1200&expires=33279681509"
        />
      </head>

      <body className={'antialiased'}>
        <Header lang="pt" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
