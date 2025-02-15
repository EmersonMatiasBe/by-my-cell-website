import Button from '@/components/ui/button/raw-button'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export default function OtherServices() {
  return (
    <Container className="max-w-full flex flex-col gap-20 py-20">
      <Wrapper className="w-[80%] h-[500px] rounded-r-3xl relative overflow-hidden shadow-xl shadow-black">
        <img src="/bg-home.jpg" className="w-full h-full object-cover brightness-[0.2]" alt="" />
        <div className="absolute bottom-10 right-10 text-white">
          <h6 className="text-primary-300 font-bold text-3xl mb-1">
            Engenharia de Proteínas e Metabolômica
          </h6>
          <p className="font-light max-w-[600px] mb-8">
            Nossa plataforma especializada BlackGenn Nossa plataforma dedicação à prospecção e
            engenharia de proteínas e de microrganismos, combinando a fronteira de conhecimento de
            genômica, metabolômica e computação de alto desempenho para acelerar a biotecnologia no
            Brasil
          </p>

          <Button className="px-4 py-2 bg-primary-500 rounded-md w-full">
            Plataforma ByMySoil
          </Button>
        </div>
      </Wrapper>

      <Wrapper className="w-[80%] h-[500px] rounded-l-3xl relative overflow-hidden ml-auto shadow-xl shadow-black">
        <img src="/building.webp" className="w-full h-full object-cover brightness-[0.2]" alt="" />
        <div className="absolute bottom-10 left-10 text-white">
          <h6 className="text-secondary-300 font-bold text-3xl mb-1">
            Engenharia de Proteínas e Metabolômica
          </h6>
          <p className="font-light max-w-[600px] mb-8">
            Nossa plataforma especializada BlackGenn Nossa plataforma dedicação à prospecção e
            engenharia de proteínas e de microrganismos, combinando a fronteira de conhecimento de
            genômica, metabolômica e computação de alto desempenho para acelerar a biotecnologia no
            Brasil
          </p>

          <Button className="px-4 py-2 bg-secondary-500 rounded-md w-full">
            Plataforma BlackGenn
          </Button>
        </div>
      </Wrapper>
    </Container>
  )
}
