import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export default function Partners() {
  const partners = [
    {
      id: 1,
      urlImage: '/agrivalle.png',
      altImage: 'Logo da USP'
    },
    {
      id: 2,
      urlImage: '/oracle.png',
      altImage: 'Logo da UNICAMP'
    },
    {
      id: 3,
      urlImage: '/google.png',
      altImage: 'Logo da UNESP'
    },
    {
      id: 4,
      urlImage: '/supera.png',
      altImage: 'Logo da EMBRAPA'
    },
    {
      id: 5,
      urlImage: '/tarpon.png',
      altImage: 'Logo da ESALQ'
    },
    {
      id: 6,
      urlImage: '/agtech.png',
      altImage: 'Logo do Instituto Butantan'
    },
    {
      id: 7,
      urlImage: '/snash.png',
      altImage: 'Logo da USP'
    },
    {
      id: 8,
      urlImage: '/fapesp.png',
      altImage: 'Logo da UNICAMP'
    },
    {
      id: 9,
      urlImage: '/microsoft.png',
      altImage: 'Logo da UNESP'
    },
    {
      id: 10,
      urlImage: '/land.png',
      altImage: 'Logo da EMBRAPA'
    },
    {
      id: 1,
      urlImage: '/agrivalle.png',
      altImage: 'Logo da USP'
    },
    {
      id: 2,
      urlImage: '/oracle.png',
      altImage: 'Logo da UNICAMP'
    },
    {
      id: 3,
      urlImage: '/google.png',
      altImage: 'Logo da UNESP'
    },
    {
      id: 4,
      urlImage: '/supera.png',
      altImage: 'Logo da EMBRAPA'
    },
    {
      id: 5,
      urlImage: '/tarpon.png',
      altImage: 'Logo da ESALQ'
    },
    {
      id: 6,
      urlImage: '/agtech.png',
      altImage: 'Logo do Instituto Butantan'
    },
    {
      id: 7,
      urlImage: '/snash.png',
      altImage: 'Logo da USP'
    },
    {
      id: 8,
      urlImage: '/fapesp.png',
      altImage: 'Logo da UNICAMP'
    },
    {
      id: 9,
      urlImage: '/microsoft.png',
      altImage: 'Logo da UNESP'
    },
    {
      id: 10,
      urlImage: '/land.png',
      altImage: 'Logo da EMBRAPA'
    }
  ]

  return (
    <Container className="max-w-full relative flex flex-col overflow-x-hidden py-20 bg-gray-50 mb-5">
      <div className="mb-10">
        <h6 className="font-semibold mb-2 text-center">Parceiros e Hubs</h6>
        <h2 className="text-4xl font-semibold text-black text-center mb-1">
          Marcas que nos{' '}
          <span className="bg-secondary-500 font-bold text-white px-2">Inspiram</span>
        </h2>
      </div>

      <div className="animate-sliderPartners z-10">
        <div className="flex justify-between w-[5800px] px-20">
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
