import Footer from '@/components/footer'
import '../globals.css'
import Header from '@/components/header/header'
import { Nunito_Sans } from '@next/font/google'
import { Metadata } from 'next'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '1000', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'ByMyCell',
  description:
    'A ByMyCell é uma startup brasileira de biotecnologia que simplifica o acesso à genômica, oferecendo soluções avançadas para análise de microrganismos via DNA.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body className={'antialiased'}>
        <Header lang="pt" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
