import Button from '@/components/ui/button-1'
import Wrapper from '@/components/ui/wrapper'

export default function HeroSection() {
  return (
    <Wrapper className="w-full h-dvh">
      <img
        className="w-full h-full object-cover object-right brightness-50 bottom-0"
        alt=""
        src="/bg-home.jpg"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center text-center">
        <h1 className="text-6xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        </h1>
        <p className="text-xl text-white font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nam, accusantium, velit
          laborum soluta expedita minima veniam quas delectus quibusdam magni facilis illo
          perspiciatis. Tempore cumque voluptatum praesentium rem dignissimos.
        </p>

        <div className="mt-10 flex  gap-5">
          <Button className="bg-primary-500 px-5 py-5 rounded-lg w-[260px] font-semibold">
            Quero uma análise
          </Button>
          <Button className="px-5 py-4 bg-secondary-500 rounded-lg w-[260px] font-semibold">
            Saber mais sobre a empresa
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}
