import Container from '@/components/ui/container'

export default function SpecializedSolutions() {
  return (
    <Container className=" py-16 mt-10">
      <div className="container mx-auto   grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative">
          <img
            src="/building.webp"
            alt="Serviços para Agricultura"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-md lg:max-w-[70%]">
            <h2 className="text-4xl font-bold mb-2 text-green-500">
              Soluções para<br></br> o Agro
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Oferecemos serviços especializados para agricultores, trazendo análises precisas e
              tecnologias avançadas para aumentar a produtividade do solo.
            </p>
            <button className="bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-primary-600 transition-all duration-300">
              Saiba Mais
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
            <h2 className="text-4xl font-bold mb-2 text-secondary-500">
              Serviços para Pesquisadores
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Auxiliamos pesquisadores com análises avançadas, tecnologia de ponta e suporte para
              estudos biológicos e ambientais.
            </p>
            <button className="bg-secondary-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-secondary-600 transition-all duration-300">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
