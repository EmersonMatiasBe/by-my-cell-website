import Button from '@/components/ui/button/index'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import Link from 'next/link'

export default function AboutUs() {
  const {
    home: {
      aboutUs: { title, subtitle, text, buttonLabel, subtitle2 }
    }
  } = useTranslations('pt')

  return (
    <Container className="flex flex-col items-center justify-between py-20 gap-10 px-5 lg:flex-row ">
      <Wrapper className="w-full max-w-[500px] lg:max-w-[600px] h-auto">
        <img
          className="object-cover w-full h-full rounded-lg"
          src="/home-about-us.webp"
          alt="Foto de um prédio"
          sizes="100%"
          loading="lazy"
        />
      </Wrapper>

      <Wrapper className="w-full lg:w-1/2">
        <h6 className="text-center font-semibold mb-2 lg:text-left">{subtitle2}</h6>
        <h2 className="text-center text-4xl font-bold  mb-2 lg:text-left leading-normal">
          {title}
        </h2>
        <p className="text-center text-lg lg:text-left">{subtitle}</p>

        <div className="mt-10">
          <p className="text-justify lg:text-left">{text}</p>
          <Link href="/quem-somos">
            <Button.Secondary className="font-semibold text-white mt-10 py-5">
              {buttonLabel}
            </Button.Secondary>
          </Link>
        </div>
      </Wrapper>
    </Container>
  )
}
