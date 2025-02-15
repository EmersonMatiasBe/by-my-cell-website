import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'

export default function Results({ lang }: { lang: LanguageOptions }) {
  const {
    home: {
      results: { title, subtitle, results }
    }
  } = useTranslations(lang)

  return (
    <Container className="flex flex-col py-20  gap-0 px-5 md:gap-5 md:flex-row">
      <Wrapper className="w-full flex flex-col justify-center items-center md:max-w-[45%] md:items-start">
        <h6 className="font-semibold mb-1">{subtitle}</h6>
        <h2 className="text-4xl font-bold text-green-500 mb-2 text-center md:text-left">{title}</h2>

        <div className="w-full h-full max-w-[500px] mx-auto">
          <img src="/seeding.png" alt="Muda de planta" className="h-full w-full object-cover" />
        </div>
      </Wrapper>

      <Wrapper className="w-full flex flex-col gap-5  justify-center md:max-w-[55%] md:gap-10">
        {results.map(({ number, text }, index) => (
          <div
            className="flex bg-neutral-100 gap-5 items-center shadow-md shadow-black px-10 py-5 rounded-md md:gap-10"
            key={index}
          >
            <div className="bg-primary-500 min-w-[50px] h-[50px] text-base  rounded-full flex items-center justify-center font-bold text-white md:min-w-[100px] md:h-[100px] md:text-3xl ">
              {number}
            </div>

            <div>
              <h6 className="text-lg font-medium md:text-2xl">{text}</h6>
            </div>
          </div>
        ))}
      </Wrapper>
    </Container>
  )
}
