import Button from '@/components/ui/button/raw-button'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export default function AboutUs() {
  return (
    <Container className="flex mt-20 gap-10 ">
      <Wrapper className="relative w-[60%] h-auto">
        <img
          className="object-cover w-full h-full"
          src="/building.webp"
          alt="Foto de um prédio"
          sizes="100%"
        />
      </Wrapper>

      <Wrapper className="w-1/2">
        <h6 className="font-semibold mb-2">Quem Somos</h6>
        <h2 className="text-4xl font-bold text-secondary-500 mb-2">
          Por Dentro da<br></br> Nossa Jornada
        </h2>
        <p className="text-lg">Entenda o que nos move e nos torna únicos.</p>

        <div className="mt-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo laudantium
            perferendis iure, impedit qui repellat consectetur inventore asperiores assumenda odio
            voluptatibus placeat expedita et magni distinctio! Sint, officia temporibus! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Veritatis, hic quo repellendus, quia nihil
            reiciendis perspiciatis, odit aut rerum sint voluptatibus debitis doloremque nobis
            voluptates praesentium. Praesentium repudiandae quas non!
          </p>

          <Button className="bg-secondary-500 py-5 rounded-lg w-full font-semibold text-white mt-10">
            Quem Somos
          </Button>
        </div>
      </Wrapper>
    </Container>
  )
}
