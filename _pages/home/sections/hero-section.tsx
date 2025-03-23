'use client'
import Button from '@/components/ui/button/index'
import Wrapper from '@/components/ui/wrapper'
import openWhatsapp from '@/helpers/open-whatsapp'
import useTranslations from '@/i18n/translations'
import { useEffect, useState } from 'react'
import { BsWhatsapp, BsArrowDown } from 'react-icons/bs'

export default function HeroSection({ lang }: { lang: LanguageOptions }) {
  const {
    home: {
      heroSection: { title, subtitle, firstButton, secondButton }
    }
  } = useTranslations(lang)

  const [section, setSection] = useState<HTMLElement | null>()

  useEffect(() => {
    setSection(document.getElementById('results'))
  }, [])

  function teste() {
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Wrapper className="w-full h-dvh ">
      <img
        className="w-full h-full object-cover object-right brightness-50"
        alt=""
        src="/bg-home.jpg"
      />
      <div className="w-full px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center text-center">
        <h1 className="text-6xl mb-5 font-bold ">{title}</h1>
        <p className="text-xl text-white  lg:text-3xl">{subtitle}</p>

        <div className="mt-10 flex flex-col gap-5 w-full items-center sm:flex-row sm:justify-center">
          <Button.Primary
            className="w-full h-20 max-w-[400px] text-lg"
            icon={<BsWhatsapp className="text-3xl" />}
            onClick={() => openWhatsapp()}
          >
            {firstButton}
          </Button.Primary>

          <Button.Secondary
            className="w-full h-20 max-w-[400px] text-lg"
            icon={<BsArrowDown className="text-3xl" />}
            onClick={() => teste()}
          >
            {secondButton}
          </Button.Secondary>
        </div>
      </div>
    </Wrapper>
  )
}
