'use client'
import {
  RiArrowUpSFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
  RiYoutubeFill
} from 'react-icons/ri'
import Wrapper from './ui/wrapper'
import Link from 'next/link'

export default function FloatingHeader() {
  return (
    <Wrapper className="fixed flex w-fit h-fit bg-white shadow-md shadow-black group rounded-full z-20 right-10 bottom-28">
      <div className="relative">
        <RiArrowUpSFill className="text-4xl group" />

        <div className="absolute w-[200px] justify-center flex flex-col  h-0 transition-all duration-500 overflow-hidden bg-white -translate-y-full -translate-x-full -top-2 left-10 rounded-xl shadow-md shadow-black group-hover:h-[220px] ">
          <div className="px-5 flex flex-col gap-2 mb-2 ove">
            <Link href="/" className="hover:bg-gray-200 px-2 font-bold">
              Inicio
            </Link>
            <Link href="/servicos" className="hover:bg-gray-200 px-2 font-bold">
              Serviços
            </Link>
            <Link href="/quem-somos" className="hover:bg-gray-200 px-2 font-bold">
              Quem Somos
            </Link>
            <Link href="/contato" className="hover:bg-gray-200 px-2 font-bold">
              Contato
            </Link>
          </div>

          <Wrapper className="flex text-xl justify-between px-3 pt-3 border-t-2 border-neutral-300">
            <Link
              href="/"
              className="p-2 bg-white rounded-full text-secondary-500 shadow-md shadow-black"
            >
              <RiInstagramFill />
            </Link>
            <Link
              href="/"
              className=" p-2 bg-white rounded-full text-secondary-500 shadow-md shadow-black"
            >
              <RiLinkedinBoxFill />
            </Link>
            <Link
              href="/"
              className="p-2 bg-white rounded-full text-secondary-500 shadow-md shadow-black"
            >
              <RiYoutubeFill />
            </Link>
            <Link
              href="/"
              className="p-2 bg-white rounded-full text-secondary-500 shadow-md shadow-black"
            >
              <RiWhatsappFill />
            </Link>
          </Wrapper>
        </div>
      </div>
    </Wrapper>
  )
}
