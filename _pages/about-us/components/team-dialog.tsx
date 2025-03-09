import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'

export default function TeamDialog() {
  const { aboutUs } = useTranslations('pt')

  return (
    <Dialog>
      <DialogTrigger className="bg-secondary-500 px-5 py-5 text-white w-full max-w-[600px] mx-auto mt-10 font-semibold rounded-lg">
        Conheça toda nossa equipe
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{aboutUs.teamSection.title}</DialogTitle>
          <DialogDescription></DialogDescription>
          <Wrapper className="h-[80dvh] lg:h-[70dvh] overflow-y-auto flex flex-col gap-10 py-2">
            {aboutUs.teamSection.team.map(({ title, members }, index) => {
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
