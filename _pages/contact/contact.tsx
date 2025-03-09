'use client'
import FloatingHeader from '@/components/floating-header'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import Button from '@/components/ui/button/index'

import Container from '@/components/ui/container'
import Wrapper from '@/components/ui/wrapper'
import useTranslations from '@/i18n/translations'
import Link from 'next/link'
import {
  RiMapPinFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiMailFill,
  RiTimeFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill
} from 'react-icons/ri'

export default function Contact() {
  const { contact, socialMedias } = useTranslations('pt')

  return (
    <Container className="pb-20 pt-40 px-5">
      <Wrapper className="max-w-7xl mx-auto lg:px-0">
        <div className="text-center mb-16">
          <h6 className="font-semibold mb-2 text-white">{contact.subtitle}</h6>
          <h2 className="text-4xl font-bold text-white leading-normal">{contact.title}</h2>
          <p className="text-lg text-white mt-4">{contact.subtitle_2}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md shadow-black h-fit mb-[22px]">
              <h3 className="text-2xl font-bold text-primary-500 mb-6">
                {contact.boxMessage.title}
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {contact.boxMessage.fields.name.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={contact.boxMessage.fields.name.placeholder}
                    className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {contact.boxMessage.fields.email.name}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={contact.boxMessage.fields.email.placeholder}
                    className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    {contact.boxMessage.fields.phone.name}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={contact.boxMessage.fields.phone.placeholder}
                    className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {contact.boxMessage.fields.message.name}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={contact.boxMessage.fields.message.placeholder}
                    className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                    required
                  ></textarea>
                </div>

                <div className="flex">
                  <p>
                    <input type="checkbox" className="mr-2" />{' '}
                    {contact.boxMessage.permissionMessage}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white p-5 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300"
                >
                  {contact.boxMessage.labelButton}
                </button>
              </form>
            </div>

            <div className="hidden bg-white p-8 py-7 rounded-lg shadow-md shadow-black h-fit flex-col gap-5 items-center lg:flex">
              <h6 className="text-center text-lg font-bold">{contact.doubtBox.title}</h6>

              <Button.Primary className="text-white rounded-lg font-semibold">
                {contact.doubtBox.labelButton}
              </Button.Primary>
            </div>
          </div>

          <div className="space-y-14">
            <div className="rounded-lg overflow-hidden shadow-md shadow-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5673804064336!2d-47.81992752385361!3d-21.169608278106107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bd3b0a985053%3A0x643a3b0319ff97f6!2sByMyCell!5e0!3m2!1spt-BR!2sbr!4v1740951591924!5m2!1spt-BR!2sbr"
                width="100%"
                height="372"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa da Localização"
              ></iframe>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md shadow-black md:p-8">
              <h3 className="text-xl text-center font-bold text-secondary-500 mb-6 md:text-2xl md:text-left">
                {contact.contactInformations.title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                    <RiMapPinFill />
                  </span>
                  <p className="text-gray-700">{contact.contactInformations.address}</p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                    <RiPhoneFill />
                  </span>
                  <p className="text-gray-700"> {contact.contactInformations.phone}</p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                    <RiWhatsappFill />
                  </span>
                  <p className="text-gray-700"> {contact.contactInformations.phone}</p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-2 md:mr-4">
                    <RiMailFill />
                  </span>
                  <p className="text-gray-700 "> {contact.contactInformations.email}</p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                    <RiTimeFill />
                  </span>
                  <p className="text-gray-700"> {contact.contactInformations.openingHours}</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl text-center font-bold text-secondary-500 mb-6 md:text-2xl md:text-left">
                  {contact.socialMedias}
                </h3>
                <div className="flex justify-center gap-4 text-xl md:justify-start lg:text-2xl">
                  <Link
                    href={socialMedias.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-500 p-2  rounded-full text-white hover:bg-secondary-400 transition-all"
                  >
                    <RiInstagramFill />
                  </Link>
                  <Link
                    href={socialMedias.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-500  p-2 rounded-full text-white hover:bg-secondary-600 transition-all"
                  >
                    <RiLinkedinBoxFill />
                  </Link>
                  <Link
                    href={socialMedias.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-500  p-2 rounded-full text-white hover:bg-secondary-600 transition-all"
                  >
                    <RiYoutubeFill />
                  </Link>
                  <Link
                    href={socialMedias.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-500  p-2 rounded-full text-white hover:bg-secondary-600 transition-all"
                  >
                    <RiWhatsappFill />{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-white p-8 py-7 rounded-lg shadow-md shadow-black h-fit flex-col gap-5 items-center flex lg:hidden mt-10">
          <h6 className="text-center text-lg font-bold">{contact.doubtBox.title}</h6>

          <Button.Primary className="text-white rounded-lg font-semibold">
            {contact.doubtBox.labelButton}
          </Button.Primary>
        </div>
      </Wrapper>

      <Wrapper className="w-full h-dvh fixed top-0 left-0 -z-10 brightness-[0.2] bg-white">
        <img src="/plantation.jpg" className="w-full h-full" alt="" loading="lazy" />
      </Wrapper>

      <FloatingHeader />
      <FloatingWhatsapp />
    </Container>
  )
}
