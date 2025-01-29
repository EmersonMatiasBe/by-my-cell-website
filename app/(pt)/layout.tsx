import Footer from '@/components/footer'
import '../globals.css'
import Header from '@/components/header/header'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={'antialiased'}>
        <Header lang="pt" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
