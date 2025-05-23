import React, { ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface DrawerProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={
        ' fixed sm:overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 -translate-x-full  ')
      }
    >
      <section
        className={
          'w-340px max-w-lg left-0 absolute bg-white min-h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform ' +
          (isOpen ? 'translate-x-0' : '-translate-x-full')
        }
      >
        <article className="relative flex flex-col space-y-6 pb-10 w-340px max-w-lg h-full">
          <header className="flex items-center px-4 py-4">
            <div className="flex flex-shrink-0 items-center border-right">
              <Link href="/" className="font-semibold text-2xl text-black">
                Foundasi
              </Link>
            </div>

            <XMarkIcon
              className="block w-6 h-6"
              onClick={() => {
                setIsOpen(false)
              }}
            />
          </header>
          <div
            onClick={() => {
              setIsOpen(false)
            }}
          >
            {children}
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}

export default Drawer
