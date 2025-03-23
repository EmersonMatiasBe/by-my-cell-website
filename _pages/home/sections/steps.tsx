import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'

export default function Steps() {
  const {
    home: {
      steps: { title, steps, subtitle, text }
    }
  } = useTranslations('pt')

  return (
    <Container className="py-20 max-w-full bg-gray-100 px-5">
      <Wrapper className="overflow-hidden flex justify-between max-w-[1280px] mx-auto gap-10">
        <div className="lg:max-w-[550px] flex flex-col justify-center">
          <h6 className="text-center font-semibold mb-1 lg:text-left">{subtitle}</h6>
          <h2 className="text-center text-4xl font-bold text-secondary-500 mb-2 lg:text-left">
            {title}
          </h2>
          <p className="text-justify lg:text-left">{text}</p>

          <div className="flex flex-wrap gap-10 mt-5 py-5 items-center justify-center">
            {steps.map((stepText, index) => {
              return (
                <p
                  className="max-w-[250px] h-[140px] items-center flex w-full px-4 py-6 rounded-md shadow-lg shadow-secondary-800 text-lg"
                  key={index}
                >
                  <span className="text-5xl font-bold mr-2">{index + 1}</span> {stepText}
                </p>
              )
            })}
          </div>
        </div>

        <div className="w-full h-auto overflow-hidden hidden lg:block">
          <img
            src="/home-steps.webp"
            className="w-full h-full object-cover rounded-lg"
            alt=""
            loading="lazy"
          />
        </div>
      </Wrapper>
    </Container>
  )
}
