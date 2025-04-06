import Home from '@/_pages/home/home'

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export default function HomeEn({ params }: { params: Params }) {
  return <Home lang={params.lang} />
}
