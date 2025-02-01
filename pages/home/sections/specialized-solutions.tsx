import Container from '@/components/ui/container'
import useTranslations from '@/i18n/translations'

export default function SpecializedSolutions({ lang }: { lang: 'pt' | 'en' }) {
  const {
    home: {
      specializedSolutions: { agro, searchers, buttonLabel }
    }
  } = useTranslations(lang)

  return (
    <Container className="mt-20">
      <div className="container mx-auto   grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative">
          <img
            src="/building.webp"
            alt="Serviços para Agricultura"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-md lg:max-w-[70%]">
            <h2 className="text-4xl font-bold mb-2 text-green-500">{agro.title}</h2>
            <p className="text-lg text-gray-600 mb-4">{agro.text}</p>
            <button className="bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-primary-600 transition-all duration-300">
              {buttonLabel}
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/building.webp"
            alt="Serviços para Pesquisadores"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-md lg:max-w-[70%]">
            <h2 className="text-4xl font-bold mb-2 text-secondary-500">{searchers.title}</h2>
            <p className="text-lg text-gray-600 mb-4">{searchers.text}</p>
            <button className="bg-secondary-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-secondary-600 transition-all duration-300">
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
