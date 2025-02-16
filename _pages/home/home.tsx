import Wrapper from '@/components/ui/wrapper'
import Container from '@/components/ui/container'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import HeroSection from './sections/hero-section'
import Feedbacks from './sections/feedbacks'
import Results from './sections/results'
import SpecializedSolutions from './sections/specialized-solutions'
import Solutions from './sections/solutions'
import Partners from './sections/partners'
import AboutUs from './sections/about-us'
import Ebook from './sections/ebook'
import Steps from './sections/steps'
import OtherServices from './sections/other-services'

export default function Home({ lang }: { lang: LanguageOptions }) {
  return (
    <main className="w-full">
      <HeroSection lang={lang} />

      <Results lang={lang} />

      <Partners />

      <SpecializedSolutions lang={lang} />

      <Solutions />

      <Steps />

      <Ebook />

      <AboutUs />

      <Feedbacks />

      {/*



      <Container className=" gap-10 mt-20 hidden">
        <Wrapper className="w-[50%]">
          <h2 className="text-4xl font-semibold text-primary-500 mb-8">Perguntas Frequentes</h2>

          <div className="flex flex-col gap-5">
            <div className="border-b border-neutral-300 pb-2">
              <p className="text-xl font-semibold">Como devemos enviar as amostras de solo?</p>
              <p>
                As amostras de solo (5 a 10g) podem ser enviadas em temperatura ambiente por
                correios a nossa sede em Ribeirão Preto – SP.
              </p>
            </div>

            <div className="border-b border-neutral-300 pb-2">
              <p className="text-xl font-semibold">Como devemos enviar as amostras de solo?</p>
              <p>
                As amostras de solo (5 a 10g) podem ser enviadas em temperatura ambiente por
                correios a nossa sede em Ribeirão Preto – SP.
              </p>
            </div>

            <div className="border-b border-neutral-300 pb-2">
              <p className="text-xl font-semibold">Como devemos enviar as amostras de solo?</p>
              <p>
                As amostras de solo (5 a 10g) podem ser enviadas em temperatura ambiente por
                correios a nossa sede em Ribeirão Preto – SP.
              </p>
            </div>

            <div className="border-b border-neutral-300 pb-2">
              <p className="text-xl font-semibold">Como devemos enviar as amostras de solo?</p>
              <p>
                As amostras de solo (5 a 10g) podem ser enviadas em temperatura ambiente por
                correios a nossa sede em Ribeirão Preto – SP.
              </p>
            </div>

            <div className="border-b border-neutral-300 pb-2">
              <p className="text-xl font-semibold">Como devemos enviar as amostras de solo?</p>
              <p>
                As amostras de solo (5 a 10g) podem ser enviadas em temperatura ambiente por
                correios a nossa sede em Ribeirão Preto – SP.
              </p>
            </div>
          </div>
        </Wrapper>

        <Wrapper className="relative max-w-[50%] w-[50%] h-auto">
          <img src="/faq-image.svg" alt="" className="object-contain w-full h-full" />
        </Wrapper>
      </Container>
        */}

      <FloatingWhatsapp />
    </main>
  )
}
