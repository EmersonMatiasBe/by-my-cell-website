import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'

export default function Results({ lang }: { lang: LanguageOptions }) {
  const {
    home: {
      results: { title, subtitle, results, text }
    }
  } = useTranslations(lang)

  return (
    <Container
      id="results"
      className="flex flex-col py-20 relative  gap-0 px-5 md:gap-5 md:flex-col"
    >
      <Wrapper className="w-full relative flex flex-col text-center items-center mb-10">
        <h6 className="font-semibold mb-2">{subtitle}</h6>
        <h2 className="text-4xl font-bold  text-center leading-normal">{title}</h2>
        <p className="max-w-[1000px] text-center mx-auto">{text}</p>
      </Wrapper>

      <Wrapper className="grid-cols-1 grid md:grid-cols-2 gap-10">
        {results.map(({ number, text }, index) => (
          <div
            className="flex flex-col text-center gap-2 px-5 bg-gray-50  items-center shadow-md  md:px-10 py-5 rounded-md"
            key={index}
          >
            <div className="text-secondary-500  text-4xl   flex items-center justify-center font-bold    md:text-4xl ">
              {number}
            </div>

            <div>
              <h6 className="text-lg font-bold md:text-2xl">{text}</h6>
            </div>
          </div>
        ))}
      </Wrapper>

      <div className="w-1/2 h-full -bottom-[40px] xl:left-[-300px]   mx-auto absolute   -z-10">
        <img
          src="/results-dna.jpg"
          alt="Muda de planta"
          className="h-full w-full overflow-visible  -translate-x-20 -translate-y-10 object-cover object-bottom opacity-30 md:opacity-50"
          loading="lazy"
        />
      </div>
    </Container>
  )
}
