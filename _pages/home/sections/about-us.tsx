import Button from '@/components/ui/button/raw-button'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'

export default function AboutUs() {
  const {
    home: {
      aboutUs: { title, subtitle, text, buttonLabel }
    }
  } = useTranslations('pt')

  return (
    <Container className="flex flex-col items-center py-20 gap-10 px-5 lg:flex-row ">
      <Wrapper className="w-[100%] max-w-[600px]  h-auto relative lg:w-[60%] lg:max-w-full">
        <img
          className="object-cover w-full h-full"
          src="/building.webp"
          alt="Foto de um prédio"
          sizes="100%"
          loading="lazy"
        />
      </Wrapper>

      <Wrapper className="w-full lg:w-1/2">
        <h6 className="text-center font-semibold mb-2 lg:text-left">Quem Somos</h6>
        <h2 className="text-center text-4xl font-bold  mb-2 lg:text-left leading-normal">
          {title}
        </h2>
        <p className="text-center text-lg lg:text-left">{subtitle}</p>

        <div className="mt-10">
          <p className="text-justify lg:text-left">{text}</p>

          <Button className="bg-secondary-500 py-5 rounded-lg w-full font-semibold text-white mt-10">
            {buttonLabel}
          </Button>
        </div>
      </Wrapper>
    </Container>
  )
}
