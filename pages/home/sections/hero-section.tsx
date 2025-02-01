import Button from '@/components/ui/button/index'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import { BsWhatsapp, BsArrowDown } from 'react-icons/bs'

export default function HeroSection({ lang }: { lang: 'pt' | 'en' }) {
  const {
    home: {
      heroSection: { title, subtitle, firstButton, secondButton }
    }
  } = useTranslations(lang)

  return (
    <Wrapper className="w-full h-dvh">
      <img
        className="w-full h-full object-cover object-right brightness-50 bottom-0"
        alt=""
        src="/bg-home.jpg"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center text-center">
        <h1 className="text-6xl mb-5">{title}</h1>
        <p className="text-xl text-white font-light">{subtitle}</p>

        <div className="mt-10 flex  gap-5">
          <Button.Primary className="h-16 w-[340px]" icon={<BsWhatsapp className="text-2xl" />}>
            {firstButton}
          </Button.Primary>
          <Button.Secondary className="h-16 w-[340px]" icon={<BsArrowDown className="text-2xl" />}>
            {secondButton}
          </Button.Secondary>
        </div>
      </div>
    </Wrapper>
  )
}
