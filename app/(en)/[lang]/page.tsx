import Home from '@/_pages/home/home'

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export default function HomeEn({ params }: { params: { lang: 'pt' | 'en' } }) {
  return <Home lang={params.lang} />
}
