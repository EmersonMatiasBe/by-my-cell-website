import Button from '@/components/ui/button-1'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export default function Steps() {
  return (
    <Container className="pt-10">
      <Wrapper className="overflow-hidden flex justify-between">
        <div className="max-w-[550px] flex flex-col  justify-center">
          <h6 className="font-semibold mb-1 text-left">Passo a Passo</h6>
          <h2 className="text-4xl font-bold text-secondary-500 mb-2">
            Nós simplificamos o complexo
          </h2>
          <p>
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
        <div className="w-[700px] h-auto rounded-l-full overflow-hidden">
          <img src="/building.webp" className="w-full h-full" alt="" />
        </div>
      </Wrapper>
    </Container>
  )
}
