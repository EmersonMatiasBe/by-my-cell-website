import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'

export default function Results() {
  return (
    <Container className="flex mt-20 gap-5">
      <Wrapper className="flex flex-col justify-center max-w-[45%] w-full">
        <h6 className="font-semibold mb-1 text-left">Números Importantes</h6>
        <h2 className="text-4xl font-bold text-green-500 text-left mb-2">
          Entregando Excelência
          <br /> nos Resultados
        </h2>

        <div className="w-full h-full">
          <img src="/seeding.png" alt="Muda de planta" className="h-full w-full object-cover" />
        </div>
      </Wrapper>

      <Wrapper className="w-[100%] max-w-[55%] flex flex-col gap-5">
        <div className="flex bg-neutral-50 gap-10 items-center shadow-xl px-10 py-5 rounded-md">
          <div className="bg-primary-500 min-w-[100px] h-[100px]  rounded-full flex items-center justify-center text-3xl font-bold text-white">
            +300
          </div>

          <div>
            <h6 className="text-2xl font-medium mb-2">Amostras análisadas por mês</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eli nam Lorem ipsum dolor sit amet
              conseetur adipisicing elit. Illum, nam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum, nam Lorem ipsum dolor sit amet consectetur adipisi. Illum,
              nam
            </p>
          </div>
        </div>

        <div className="flex bg-neutral-50 gap-10 items-center shadow-xl px-10 py-5 rounded-md">
          <div className="bg-primary-500 min-w-[100px] h-[100px]  rounded-full flex items-center justify-center text-3xl font-bold text-white">
            +300
          </div>

          <div>
            <h6 className="text-2xl font-medium mb-2">Amostras análisadas por mês</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eli nam Lorem ipsum dolor sit amet
              conseetur adipisicing elit. Illum, nam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum, nam Lorem ipsum dolor sit amet consectetur adipisi. Illum,
              nam
            </p>
          </div>
        </div>

        <div className="flex bg-neutral-50 gap-10 items-center shadow-xl px-10 py-5 rounded-md">
          <div className="bg-primary-500 min-w-[100px] h-[100px]  rounded-full flex items-center justify-center text-3xl font-bold text-white">
            +300
          </div>

          <div>
            <h6 className="text-2xl font-medium mb-2">Amostras análisadas por mês</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eli nam Lorem ipsum dolor sit amet
              conseetur adipisicing elit. Illum, nam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum, nam Lorem ipsum dolor sit amet consectetur adipisi. Illum,
              nam
            </p>
          </div>
        </div>

        <div className="flex bg-neutral-50 gap-10 items-center shadow-xl px-10 py-5 rounded-md">
          <div className="bg-primary-500 min-w-[100px] h-[100px]  rounded-full flex items-center justify-center text-3xl font-bold text-white">
            +300
          </div>

          <div>
            <h6 className="text-2xl font-medium mb-2">Amostras análisadas por mês</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eli nam Lorem ipsum dolor sit amet
              conseetur adipisicing elit. Illum, nam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum, nam Lorem ipsum dolor sit amet consectetur adipisi. Illum,
              nam
            </p>
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}
