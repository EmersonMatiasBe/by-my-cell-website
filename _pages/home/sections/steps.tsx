import Button from '@/components/ui/button/raw-button'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export default function Steps() {
  return (
    <Container className="py-20 max-w-full bg-gray-100 px-5">
      <Wrapper className="overflow-hidden flex justify-between max-w-[1280px] mx-auto gap-5">
        <div className="lg:max-w-[550px] flex flex-col justify-center">
          <h6 className="text-center font-semibold mb-1 lg:text-left">Passo a Passo</h6>
          <h2 className="text-center text-4xl font-bold text-secondary-500 mb-2 lg:text-left">
            Nós simplificamos o complexo
          </h2>
          <p className="text-justify lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum soluta
            minus! Libero explicabo adipisci cupiditate nulla voluptas, eius aliquam at autem, illum
            commodi, illo expedita laudantium numquam omnis facilis.
          </p>

          <div className="flex flex-wrap gap-10 mt-5 py-5 items-center justify-center">
            <p className="max-w-[200px] px-4 py-6 rounded-md shadow-lg shadow-secondary-800">
              <span className="text-5xl font-bold">1</span> Lorem ipsum dolor sit amet consectetur
              amet consectetur
            </p>
            <p className="max-w-[200px] px-4 py-6 rounded-md shadow-lg shadow-secondary-800">
              <span className="text-5xl font-bold">2</span> Lorem ipsum dolor sit amet consectetur
              amet consectetur
            </p>
            <p className="max-w-[200px] px-4 py-6 rounded-md shadow-lg shadow-secondary-800">
              <span className="text-5xl font-bold">3</span> Lorem ipsum dolor sit amet consectetur
              amet consectetur
            </p>
            <p className="max-w-[200px] px-4 py-6 rounded-md shadow-lg shadow-secondary-800">
              <span className="text-5xl font-bold">4</span> Lorem ipsum dolor sit amet consectetur
              amet consectetur
            </p>
          </div>

          <Button className="bg-secondary-500 py-5 rounded-lg w-full font-semibold text-white mt-10">
            Saiba mais sobre o nosso processo
          </Button>
        </div>

        <div className="w-full h-auto overflow-hidden hidden lg:block ">
          <img src="/building.webp" className="w-full h-full object-cover" alt="" loading="lazy" />
        </div>
      </Wrapper>
    </Container>
  )
}
