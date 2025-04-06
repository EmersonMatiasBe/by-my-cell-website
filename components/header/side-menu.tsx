import { RiMenuLine } from 'react-icons/ri'
import translations from '@/i18n/translations'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet'
import Link from 'next/link'

export default function SideMenu() {
  const header = translations('pt')?.header

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-black w-10 h-10 bg-white rounded-full flex lg:hidden">
          <RiMenuLine className="text-xl m-auto" />
        </button>
      </SheetTrigger>
      <SheetContent className="border-none w-full" side={'right'}>
        <SheetHeader className="hidden text-white fill-white">
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>

        <div className="w-full flex flex-col gap-5 mt-5">
          {header.map(({ href, label }, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={href}
                  className=" bg-secondary-50 hover:bg-secondary-200 py-3 pl-5 text-lg font-semibold w-full text-left"
                >
                  {label}
                </Link>
              </SheetClose>
            )
          })}
        </div>
      </SheetContent>
      <SheetFooter></SheetFooter>
    </Sheet>
  )
}
