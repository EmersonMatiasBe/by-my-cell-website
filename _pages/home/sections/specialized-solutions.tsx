import Button from '@/components/ui/button/index'
import Container from '@/components/ui/container'
import useTranslations from '@/i18n/translations'
import Link from 'next/link'

export default function SpecializedSolutions({ lang }: { lang: 'pt' | 'en' }) {
  const {
    home: {
      specializedSolutions: { agro, searchers, buttonLabel }
    }
  } = useTranslations(lang)

  return (
    <Container className="pb-20 w-full px-5">
      <div className="container flex-col items-center max-w-[1280px] mx-auto flex  gap-12 lg:flex-row">
        <div className="relative w-full max-w-[600px] h-[400px]">
          <img
            src="/home-agro.webp"
            alt="Serviços para Agricultura"
            className="w-full h-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />

          <div className="absolute absolute-center-x h-fit flex flex-col p-6 bg-white bg-opacity-90 rounded-lg shadow-md w-[90%] bottom-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-green-500">{agro.title}</h2>
            <p className="text-base md:text-lg text-gray-600 mb-4">{agro.text}</p>

            <Button.Primary className="text-white">
              <Link href="/servicos/agro">{buttonLabel}</Link>
            </Button.Primary>
          </div>
        </div>

        <div className="relative w-full  max-w-[600px] h-[400px]">
          <img
            src="/home-search.webp"
            alt="Serviços para Pesquisadores"
            className="w-full h-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
          <div className="absolute absolute-center-x  h-fit flex flex-col p-6 bg-white bg-opacity-90 rounded-lg shadow-md w-[90%] bottom-8 ">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-secondary-500">
              {searchers.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-4">{searchers.text}</p>

            <Button.Secondary className=" text-white">
              <Link href="/servicos/pesquisadores">{buttonLabel}</Link>
            </Button.Secondary>
          </div>
        </div>
      </div>
    </Container>
  )
}
