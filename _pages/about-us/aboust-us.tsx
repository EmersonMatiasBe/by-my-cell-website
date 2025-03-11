import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import TeamDialog from './components/team-dialog'

export default function AboutUs() {
  const { aboutUs } = useTranslations('pt')

  return (
    <Container className="py-40 px-5">
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
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Conheça Nossa Equipe
          </h3>
          <Wrapper className="flex flex-col gap-10 py-2">
            {aboutUs.teamSection.team.slice(0, 2).map(({ title, members }, index) => {
              return (
                <div className="px-1" key={index}>
                  <h6 className="text-xl font-semibold mb-4 flex items-center gap-4 text-secondary-900">
                    <span className="whitespace-nowrap">{title}</span>
                    <span className="flex w-full h-[1px] bg-neutral-300" />
                  </h6>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:xl:grid-cols-5 gap-6 justify-center">
                    {members.map((member, index) => (
                      <a
                        key={index}
                        href={member?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-sm shadow-[#000000] rounded-xl p-5 flex flex-col items-center text-center w-full"
                      >
                        <img
                          src="/building.webp"
                          alt={member?.name}
                          className="w-24 h-24 rounded-full object-cover mb-4"
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
                </div>
              )
            })}
          </Wrapper>
          <TeamDialog />
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
