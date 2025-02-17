import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Button from '@/components/ui/button/raw-button'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import Link from 'next/link'
import {
  RiMapPinFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiMailFill,
  RiTimeFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill
} from 'react-icons/ri'

export default function Contact() {
  return (
    <Container className="pb-20 pt-40 px-5">
      <Wrapper className="max-w-7xl mx-auto lg:px-0">
        <div className="text-center mb-16">
          <h6 className="font-semibold mb-2 text-white">Entre em Contato</h6>
          <h2 className="text-4xl font-bold text-secondary-200">
            Fale Conosco para Análises de Solo
          </h2>
          <p className="text-lg text-white mt-4">
            Tire suas dúvidas, solicite orçamentos ou agende uma visita. Estamos aqui para ajudar
            agricultores e pesquisadores!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md shadow-black h-fit mb-[22px]">
              <h3 className="text-2xl font-bold text-primary-500 mb-6">Envie uma Mensagem</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seuemail@exemplo.com"
                    className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Escreva sua mensagem aqui..."
                    className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="hidden bg-white p-8 py-7 rounded-lg shadow-md shadow-black h-fit flex-col gap-5 items-center lg:flex">
              <h6 className="text-center text-lg font-bold">
                Ficou com alguma dúvida? Entre em Contato
              </h6>

              <Button className="px-5 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg w-[260px] font-semibold">
                Saber mais sobre a empresa
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg overflow-hidden shadow-md shadow-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.075426745292!2d-46.65342658502206!3d-23.565734367638914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1633023226789!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa da Localização"
              ></iframe>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md shadow-black md:p-8">
              <h3 className="text-xl text-center font-bold text-secondary-500 mb-6 md:text-2xl md:text-left">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                    <RiMapPinFill />
                  </span>
                  <p className="text-gray-700">
                    Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                    <RiPhoneFill />
                  </span>
                  <p className="text-gray-700">(11) 1234-5678</p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                    <RiWhatsappFill />
                  </span>
                  <p className="text-gray-700">(11) 99999-9999 (WhatsApp)</p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-2 md:mr-4">
                    <RiMailFill />
                  </span>
                  <p className="text-gray-700 ">contato@analisedesolo.com.br</p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                    <RiTimeFill />
                  </span>
                  <p className="text-gray-700">Segunda a Sexta, das 8h às 18h</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl text-center font-bold text-secondary-500 mb-6 md:text-2xl md:text-left">
                  Nossas Redes Sociais
                </h3>
                <div className="flex justify-center gap-4 text-xl md:justify-start lg:text-2xl">
                  <Link
                    href="https://www.linkedin.com/company/analisedesolo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-500 p-2  rounded-full text-white hover:bg-secondary-400 transition-all"
                  >
                    <RiInstagramFill />
                  </Link>
                  <Link
                    href="https://www.youtube.com/analisedesolo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-500  p-2 rounded-full text-white hover:bg-secondary-600 transition-all"
                  >
                    <RiLinkedinBoxFill />
                  </Link>
                  <Link
                    href="https://www.instagram.com/analisedesolo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-500  p-2 rounded-full text-white hover:bg-secondary-600 transition-all"
                  >
                    <RiYoutubeFill />
                  </Link>
                  <Link
                    href="https://www.facebook.com/analisedesolo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-500  p-2 rounded-full text-white hover:bg-secondary-600 transition-all"
                  >
                    <RiWhatsappFill />{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-white p-8 py-7 rounded-lg shadow-md shadow-black h-fit flex-col gap-5 items-center flex lg:hidden mt-10">
          <h6 className="text-center text-lg font-bold">
            Ficou com alguma dúvida? Entre em Contato
          </h6>

          <Button className="px-5 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg w-[260px] font-semibold">
            Saber mais sobre a empresa
          </Button>
        </div>
      </Wrapper>

      <Wrapper className="w-full h-dvh fixed top-0 left-0 -z-10 brightness-[0.2]">
        <img src="/plantation.jpg" className="w-full h-full" alt="" />
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
