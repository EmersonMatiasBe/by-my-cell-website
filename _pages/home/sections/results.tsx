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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sapiente animi enim
          inventore molestiae rerum alias tempore quia non natus odit, eligendi cumque voluptatum
          voluptatem eos quasi aspernatur, officiis exercitationem.
        </p>

        {results.map(({ number, text }, index) => (
          <div
            className="flex flex-col text-center gap-2 px-5 bg-white  items-center shadow-md shadow-black md:px-10 py-5 rounded-md"
            key={index}
          >
            <div className="text-primary-500  text-4xl   flex items-center justify-center font-bold    md:text-4xl ">
              {number}
            </div>

            <div>
              <h6 className="text-lg font-bold md:text-2xl">{text}</h6>
            </div>
          </div>
        ))}
      </Wrapper>
    </Container>
  )
}
