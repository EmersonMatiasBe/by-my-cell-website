import Button from '@/components/ui/button/raw-button'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export default function Solutions() {
  const images = [
    '/service-1.webp',
    '/service-2.jpg',
    '/service-3.jpg',
    '/service-4.jpg',
    '/service-5.webp'
  ]

  return (
    <Container className=" max-w-full">
      <Container className="mt-20 mb-10">
        <Wrapper className="mb-10 text-center">
          <h6 className="font-semibold mb-1">Serviços</h6>
          <h2 className="text-4xl font-bold  mb-2 text-secondary-500">
            Transformando o Solo
            <br /> em <span>Soluções</span>
          </h2>
        </Wrapper>

        <Wrapper className=" h-[600px] flex gap-5">
          {images.map((image, index) => (
            <div
              className="w-[20%] h-full rounded-[10px] hover:rounded-md relative bg-blue-500 hover:w-[50%] transition-all duration-500 ease-in-out group overflow-hidden"
              key={index}
            >
              <img
                src={image}
                alt="Serviço 1"
                className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-500 ease-in-out"
              />
              <div className="z-10 absolute bottom-10 pl-10 pr-5 py-4 text-white bg-black bg-opacity-90 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-semibold mb-2">Análise de Microbiota</h3>
                <p className="mb-3">
                  Identificação de microrganismos presentes em amostras a partir de sequenciamento
                  de DNA de nova geração.
                </p>

                <Button className="px-4 py-2 bg-primary-500 rounded-md">Saber mais</Button>
              </div>

              <div className="z-10 absolute bottom-10 py-4 text-white h-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  group-hover:translate-x-[100vw] opacity-100  group-hover:opacity-0   transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-bold mb-2">Análise de Microbiota</h3>
              </div>
            </div>
          ))}
        </Wrapper>
      </Container>
    </Container>
  )
}
