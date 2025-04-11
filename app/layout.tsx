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
  description:
    'A ByMyCell é uma startup brasileira de biotecnologia que simplifica o acesso à genômica, oferecendo soluções avançadas para análise de microrganismos via DNA.',
  author: {
    '@type': 'Organization',
    name: 'ByMyCell',
    url: 'https://bymycell.com/'
  },
  datePublished: '2025-04-11',
  dateModified: '2025-04-11'
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
