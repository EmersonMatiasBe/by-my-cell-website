import Button from '@/components/ui/button/index'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import Link from 'next/link'

export default function Solutions() {
  const {
    home: { services }
  } = useTranslations('pt')

  return (
    <Container className="max-w-full px-10 py-20">
      <Container className="">
        <Wrapper className="mb-10 text-center">
          <h6 className="font-semibold mb-1">{services.subtitle}</h6>
          <h2 className="text-4xl font-bold  mb-2 leading-normal">{services.title}</h2>
        </Wrapper>

        <Wrapper className="h-[600px] gap-5 hidden lg:flex ">
          {services.items.map(({ text, title, image, url }, index) => (
            <div
              className="w-[20%] h-full rounded-[10px] hover:rounded-md relative bg-blue-500 hover:w-[50%] transition-all duration-500 ease-in-out group overflow-hidden"
              key={index}
            >
              <img
                src={image}
                alt="Serviço 1"
                className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="z-10 absolute bottom-10 pl-10 pr-5 py-4 text-white bg-black bg-opacity-90 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="mb-3">{text}</p>
                <Link href={`servicos/pesquisadores/${url}`}>
                  <Button.Primary className="px-4 py-2 rounded-md">
                    {services.buttonLabel}
                  </Button.Primary>
                </Link>
              </div>

              <div className="z-10 absolute bottom-10 py-4 text-white h-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  group-hover:translate-x-[100vw] opacity-100  group-hover:opacity-0   transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
              </div>
            </div>
          ))}
        </Wrapper>

        <Wrapper className="flex w-full flex-wrap justify-center gap-8 lg:hidden">
          {services.items.map(({ text, title, image, url }, index) => (
            <div
              className="max-w-[400px] w-full bg-white overflow-hidden rounded-lg shadow-md shadow-black hover:scale-110"
              key={index}
            >
              <img src={image} className="" alt="" loading="lazy" />
              <div className="px-4 py-4">
                <p className="font-semibold text-lg mb-3">{title}</p>
                <p className="line-clamp-3 font-light mb-2">{text}</p>
                <Button.Primary className="px-4 py-2 text-white rounded-md ml-auto">
                  <Link href={`servicos/pesquisadores/${url}`}>{services.buttonLabel}</Link>
                </Button.Primary>
              </div>
            </div>
          ))}
        </Wrapper>
      </Container>
    </Container>
  )
}
