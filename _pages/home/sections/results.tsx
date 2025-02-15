import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'

export default function Results({ lang }: { lang: 'pt' | 'en' }) {
  const {
    home: {
      results: { title, subtitle, results }
    }
  } = useTranslations(lang)

  return (
    <Container className="flex mt-20 gap-5">
      <Wrapper className="flex flex-col justify-center max-w-[45%] w-full">
        <h6 className="font-semibold mb-1 text-left">{subtitle}</h6>
        <h2 className="text-4xl font-bold text-green-500 text-left mb-2">{title}</h2>

        <div className="w-full h-full">
          <img src="/seeding.png" alt="Muda de planta" className="h-full w-full object-cover" />
        </div>
      </Wrapper>

      <Wrapper className="w-[100%] max-w-[55%] flex flex-col gap-5 justify-center">
        {results.map(({ number, text }, index) => (
          <div
            className="flex bg-neutral-50 gap-10 items-center shadow-xl px-10 py-5 rounded-md"
            key={index}
          >
            <div className="bg-primary-500 min-w-[100px] h-[100px]  rounded-full flex items-center justify-center text-3xl font-bold text-white">
              {number}
            </div>

            <div>
              <h6 className="text-2xl font-medium mb-2">{text}</h6>
            </div>
          </div>
        ))}
      </Wrapper>
    </Container>
  )
}
