import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export default function Partners() {
  const partners = [
    {
      id: 1,
      urlImage: '/USO.webp',
      altImage: 'Logo da USP'
    },
    {
      id: 2,
      urlImage: '/Unicamp.webp',
      altImage: 'Logo da UNICAMP'
    },
    {
      id: 3,
      urlImage: '/UNESP.webp',
      altImage: 'Logo da UNESP'
    },
    {
      id: 4,
      urlImage: '/Embrapa-1.webp',
      altImage: 'Logo da EMBRAPA'
    },
    {
      id: 5,
      urlImage: '/Esalq.webp',
      altImage: 'Logo da ESALQ'
    },
    {
      id: 6,
      urlImage: '/Butantan.webp',
      altImage: 'Logo do Instituto Butantan'
    },
    {
      id: 1,
      urlImage: '/USO.webp',
      altImage: 'Logo da USP'
    },
    {
      id: 2,
      urlImage: '/Unicamp.webp',
      altImage: 'Logo da UNICAMP'
    },
    {
      id: 3,
      urlImage: '/UNESP.webp',
      altImage: 'Logo da UNESP'
    },
    {
      id: 4,
      urlImage: '/Embrapa-1.webp',
      altImage: 'Logo da EMBRAPA'
    },
    {
      id: 5,
      urlImage: '/Esalq.webp',
      altImage: 'Logo da ESALQ'
    },
    {
      id: 6,
      urlImage: '/Butantan.webp',
      altImage: 'Logo do Instituto Butantan'
    }
  ]

  return (
    <Container className="max-w-full relative flex flex-col overflow-x-hidden mt-20 py-10 shadow-lg shadow-black mb-5">
      <div className="mb-10">
        <h6 className="font-semibold mb-2 text-center">Clientes e Parceiros</h6>
        <h2 className="text-4xl font-semibold text-black text-center mb-1">
          Marcas que <span className="bg-primary-500 font-bold text-white px-2">Impactamos</span>
        </h2>
      </div>

      <div className="animate-slider z-10">
        <div className="flex justify-between w-[198vw] px-20">
          {partners.map(({ urlImage, altImage, id }) => (
            <Wrapper className="relative w-[160px] h-[160px]" key={id}>
              <img src={urlImage} alt={altImage} className="w-full h-full object-contain" />
            </Wrapper>
          ))}
        </div>
      </div>
    </Container>
  )
}
