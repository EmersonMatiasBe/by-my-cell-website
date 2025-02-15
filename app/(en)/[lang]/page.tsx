import Home from '@/pages/home/home'

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export default function HomeEn({ params }) {
  return <Home lang={params.lang} />
}
