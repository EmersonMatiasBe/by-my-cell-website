import Button from '@/components/ui/button/index'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import Link from 'next/link'

export default function OtherServices() {
  const {
    home: { blackgenn, bymysoil }
  } = useTranslations('pt')

  return (
    <Container className="max-w-full flex flex-col gap-20 py-20">
      <Wrapper className="w-[95%] h-[500px] rounded-r-3xl relative overflow-hidden shadow-xl shadow-black">
        <img
          src="/home-by-my-soil.webp"
          className="w-full h-full object-cover brightness-[0.4]"
          alt="Background do ByMySoil"
          loading="lazy"
        />
        <div className="absolute  pl-5 bottom-10 right-10 text-white">
          <h6 className="text-primary-300 font-bold text-xl lg:text-3xl mb-1">{bymysoil.title}</h6>
          <p className="text-sm md:text-base font-light max-w-[600px] mb-8">{bymysoil.text}</p>

          <Link href={bymysoil.link}>
            <Button.Primary className="px-4 py-5 rounded-md">{bymysoil.labelButton}</Button.Primary>
          </Link>
        </div>
      </Wrapper>

      <Wrapper className="w-[80%] h-[500px] rounded-l-3xl relative overflow-hidden ml-auto shadow-xl shadow-black">
        <img
          src="/home-black-genn.webp"
          className="w-full h-full object-cover object-left brightness-[0.4] -scale-x-100"
          alt="Background do Black Genn"
          loading="lazy"
        />
        <div className="absolute bottom-10 left-10 text-white pr-5">
          <h6 className="text-secondary-300 font-bold text-xl mb-1 lg:text-3xl">
            {blackgenn.title}
          </h6>
          <p className="text-sm font-light max-w-[600px] mb-8 md:text-base">{blackgenn.text}</p>

          <Link href={blackgenn.link}>
            <Button.Secondary className="px-4 py-5  rounded-md ">
              {blackgenn.labelButton}
            </Button.Secondary>
          </Link>
        </div>
      </Wrapper>
    </Container>
  )
}
