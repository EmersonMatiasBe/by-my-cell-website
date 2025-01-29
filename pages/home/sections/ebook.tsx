import Container from '@/components/ui/container'

export default function Ebook() {
  return (
    <Container className="py-20 mt-20 relative shadow-[0px_0px_15px_0px_rgba(0,0,0,0.5)] max-w-full  text-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-0 text-center z-10 relative">
        <h2 className="text-4xl font-semibold text-primary-500 mb-2">
          Baixe o Nosso eBook<br></br> Exclusivo sobre Análise de Solo
        </h2>
        <p className="text-lg mb-10">
          Descubra como nossas análises de solo podem transformar seus processos agrícolas e
          ecológicos.<br></br> Obtenha insights valiosos sobre a biologia do solo e como melhorar a
          qualidade e produtividade da sua terra.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <div className="w-full max-w-[400px]  lg:max-w-[30%]">
            <img
              src="https://marketplace.canva.com/EAEzk42Bb0I/1/0/1024w/canva-ebook-sobre-neg%C3%B3cios---capa-com-p%C3%A1ginas-JnnZp_G-I5c.jpg"
              alt="Ebook sobre Análise de Solo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center">
            <h3 className="text-2xl font-semibold  mb-4">Sobre o eBook</h3>
            <p className="mb-6">
              Este eBook explora os métodos mais avançados de análise de solo, oferecendo soluções
              práticas para melhorar a produtividade e sustentabilidade dos seus cultivos. Um guia
              completo para quem deseja aprimorar a gestão do solo com base em biologia e inovação.
            </p>

            <div className="bg-white p-8 py-20 rounded-lg shadow-xl">
              <p className="text-lg text-black mb-4">
                Para receber o eBook diretamente no seu e-mail, insira seu e-mail abaixo.
              </p>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="p-3 w-full rounded-lg border-2 border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 mb-4"
              />
              <button className="bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 w-full">
                Enviar eBook para meu e-mail
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <img src="building.webp" alt="" className="object-cover brightness-[0.2] w-full h-full" />
      </div>
    </Container>
  )
}
