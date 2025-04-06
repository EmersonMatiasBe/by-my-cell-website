import FloatingWhatsapp from '@/components/floating-whatsapp'
import HeroSection from './sections/hero-section'
import Feedbacks from './sections/feedbacks'
import Results from './sections/results'
import SpecializedSolutions from './sections/specialized-solutions'
import Solutions from './sections/solutions'
import Customers from './sections/customers'
import AboutUs from './sections/about-us'
import Ebook from './sections/ebook'
import Steps from './sections/steps'
import OtherServices from './sections/other-services'
import FloatingHeader from '@/components/floating-header'
import Partners from './sections/partners'

export default function Home({ lang }: { lang: LanguageOptions }) {
  return (
    <main className="w-full">
      <HeroSection lang={lang} />

      <Results lang={lang} />

      <Customers />

      <Solutions />

      <SpecializedSolutions lang={lang} />

      <Steps />
      <Partners />

      <Ebook />

      <AboutUs />

      <Feedbacks />

      <OtherServices />

      <FloatingHeader />
      <FloatingWhatsapp />
    </main>
  )
}
