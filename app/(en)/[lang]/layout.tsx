import '../../globals.css'
import Header from '@/components/header/header'

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Params
}>) {
  return (
    <html lang="en">
      <body className={'antialiased'}>
        <Header lang={params.lang} />
        {children}
      </body>
    </html>
  )
}
