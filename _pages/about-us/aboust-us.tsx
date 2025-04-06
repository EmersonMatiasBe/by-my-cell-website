import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'

export default function AboutUs() {
  const { aboutUs } = useTranslations('pt')

  return (
    <Container className="py-40 pb-20 px-5">
      <Wrapper>
        <h2 className="text-4xl font-bold text-white text-center mb-8">{aboutUs.title}</h2>

        <div className="flex flex-wrap gap-10 justify-center mb-10">
          <div className="w-[90%] h-auto overflow-hidden lg:w-[60%]">
            <img
              src="/bg-about-us.webp"
              alt="Nossa Equipe"
              className="rounded-xl w-full h-[98%] object-cover object-center "
              loading="lazy"
            />
          </div>

          <div className="w-full text-pretty  flex flex-col justify-center">
            {aboutUs.text.map((text, index) => {
              return (
                <p className="text-xl text-gray-600 mb-4" key={index}>
                  {text}
                </p>
              )
            })}
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="text-xl font-semibold flex items-center  text-secondary-900 mb-10">
            <span className="flex w-full h-[1px] bg-neutral-300" />
          </div>
          <h3 className="text-4xl font-bold text-gray-800 text-center mb-5">
            {aboutUs.teamSection.title}
          </h3>
          <Wrapper className="flex flex-col gap-10 py-2">
            <div className="flex flex-wrap gap-10 justify-center">
              {aboutUs.teamSection.partners.map((member, index) => (
                <a
                  key={index}
                  href={member?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-sm shadow-[#000000] rounded-xl py-5 px-10 flex flex-col items-center text-center w-full max-w-full md:max-w-[45%]"
                >
                  <img
                    src={member.image}
                    alt={member?.name}
                    className="w-[240px] h-[240px] rounded-full object-center object-cover mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{member?.name}</h3>
                  <p className="text-sm text-gray-600">{member?.position}</p>
                  <p className="text-primary-500 mt-2 text-sm font-medium hover:underline">
                    LinkedIn
                  </p>
                </a>
              ))}
            </div>

            <p className="text-xl text-gray-600 mb-4">{aboutUs.teamSection.text}</p>
          </Wrapper>
        </div>
      </Wrapper>

      <Wrapper className="w-full h-[50dvh] absolute top-0 left-0 -z-10">
        <img
          src="/bg-about-us.webp"
          className="w-full h-full object-cover brightness-[0.3]"
          alt="Nossa Equipe"
          loading="lazy"
        />
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
