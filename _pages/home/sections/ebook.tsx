'use client'
import Container from '@/components/ui/container'
import useTranslations from '@/i18n/translations'

export default function Ebook() {
  const {
    home: {
      ebook: { title, description, downloadEbook }
    }
  } = useTranslations('pt')

  function openPage() {
    const url = 'https://lp.bymycell.com.br/ebookmicrorganismos'
    window.open(url, '_blank')
  }

  return (
    <Container className="py-20  relative shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)] max-w-full  text-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-0 text-center z-10 relative">
        <h2 className="text-4xl font-bold text-white mb-10 leading-normal">{title}</h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="w-full max-w-[400px]">
            <img
              src="/home-ebook.webp"
              alt="Ebook sobre Análise de Solo"
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center">
            <div className="bg-white p-8 py-10 rounded-lg shadow-xl text-black">
              <h3 className="text-2xl font-semibold  mb-4 text-black">{downloadEbook.title}</h3>

              <p className="text-lg text-left mb-2">{description}</p>
              <p className="text-lg text-black mb-10 text-left">{downloadEbook.description}</p>

              <button
                className="bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 w-full"
                onClick={() => openPage()}
              >
                {downloadEbook.buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="home-bg-ebook.webp"
          alt="Background do Ebook"
          className="object-cover object-bottom brightness-[0.7] w-full h-full"
          loading="lazy"
        />
      </div>
    </Container>
  )
}
