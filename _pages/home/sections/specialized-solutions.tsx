import Container from '@/components/ui/container'
import useTranslations from '@/i18n/translations'

export default function SpecializedSolutions({ lang }: { lang: 'pt' | 'en' }) {
  const {
    home: {
      specializedSolutions: { agro, searchers, buttonLabel }
    }
  } = useTranslations(lang)

  return (
    <Container className="py-20 w-full px-5">
      <div className="container flex-col items-center max-w-[1280px] mx-auto flex  gap-12 lg:flex-row">
        <div className="relative w-full max-w-[600px] h-[400px]">
          <img
            src="/building.webp"
            alt="Serviços para Agricultura"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />

          <div className="absolute absolute-center-x h-fit flex flex-col p-6 bg-white bg-opacity-90 rounded-lg shadow-md w-[90%] bottom-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-green-500">{agro.title}</h2>
            <p className="text-base md:text-lg text-gray-600 mb-4">{agro.text}</p>
            <button className="bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-primary-600 transition-all duration-300">
              {buttonLabel}
            </button>
          </div>
        </div>

        <div className="relative w-full  max-w-[600px] h-[400px]">
          <img
            src="/building.webp"
            alt="Serviços para Pesquisadores"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
          <div className="absolute absolute-center-x  h-fit flex flex-col p-6 bg-white bg-opacity-90 rounded-lg shadow-md w-[90%] bottom-8 ">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-secondary-500">
              {searchers.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-4">{searchers.text}</p>
            <button className="bg-secondary-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-secondary-600 transition-all duration-300">
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
