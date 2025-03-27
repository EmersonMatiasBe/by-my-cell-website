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
      urlImage: '/biocamp.png',
      altImage: 'Logo da USP'
    },
    {
      id: 3,
      urlImage: '/Unicamp.webp',
      altImage: 'Logo da UNICAMP'
    },
    {
      id: 4,
      urlImage: '/fermentec.png',
      altImage: 'Logo da USP'
    },
    {
      id: 5,
      urlImage: '/UNESP.webp',
      altImage: 'Logo da UNESP'
    },
    {
      id: 6,
      urlImage: '/solubio.png',
      altImage: 'Logo da USP'
    },
    {
      id: 7,
      urlImage: '/Embrapa-1.webp',
      altImage: 'Logo da EMBRAPA'
    },
    {
      id: 8,
      urlImage: '/nardini.png',
      altImage: 'Logo da USP'
    },
    {
      id: 9,
      urlImage: '/Esalq.webp',
      altImage: 'Logo da ESALQ'
    },
    {
      id: 10,
      urlImage: '/helix.png',
      altImage: 'Logo da USP'
    },
    {
      id: 11,
      urlImage: '/Butantan.webp',
      altImage: 'Logo do Instituto Butantan'
    },
    {
      id: 12,
      urlImage: '/nitro.png',
      altImage: 'Logo da USP'
    },
    {
      id: 1,
      urlImage: '/USO.webp',
      altImage: 'Logo da USP'
    },
    {
      id: 2,
      urlImage: '/biocamp.png',
      altImage: 'Logo da USP'
    },
    {
      id: 3,
      urlImage: '/Unicamp.webp',
      altImage: 'Logo da UNICAMP'
    },
    {
      id: 4,
      urlImage: '/fermentec.png',
      altImage: 'Logo da USP'
    },
    {
      id: 5,
      urlImage: '/UNESP.webp',
      altImage: 'Logo da UNESP'
    },
    {
      id: 6,
      urlImage: '/solubio.png',
      altImage: 'Logo da USP'
    },
    {
      id: 7,
      urlImage: '/Embrapa-1.webp',
      altImage: 'Logo da EMBRAPA'
    },
    {
      id: 8,
      urlImage: '/nardini.png',
      altImage: 'Logo da USP'
    },
    {
      id: 9,
      urlImage: '/Esalq.webp',
      altImage: 'Logo da ESALQ'
    },
    {
      id: 10,
      urlImage: '/helix.png',
      altImage: 'Logo da USP'
    },
    {
      id: 11,
      urlImage: '/Butantan.webp',
      altImage: 'Logo do Instituto Butantan'
    },
    {
      id: 12,
      urlImage: '/nitro.png',
      altImage: 'Logo da USP'
    }
  ]

  return (
    <Container className="max-w-full relative flex flex-col overflow-x-hidden py-20 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.2)] mb-5">
      <div className="mb-10">
        <h6 className="font-semibold mb-2 text-center">Clientes</h6>
        <h2 className="text-4xl font-semibold text-black text-center mb-1">
          Marcas que <span className="bg-primary-500 font-bold text-white px-2">Impactamos</span>
        </h2>
      </div>

      <div className="animate-slider z-10">
        <div className="flex justify-between w-[8000px] px-20">
          {partners.map(({ urlImage, altImage, id }) => (
            <Wrapper className="w-[160px] h-[160px] w-min-[160px] h-min-[160px]" key={id}>
              <img
                src={urlImage}
                alt={altImage}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </Wrapper>
          ))}
        </div>
      </div>
    </Container>
  )
}
