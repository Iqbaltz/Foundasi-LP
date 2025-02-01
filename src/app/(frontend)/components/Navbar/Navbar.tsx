'use client'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Drawer from './Drawer'
import Drawerdata from './Drawerdata'
import Contactusform from './Contactus'

interface NavigationItem {
  name: string
  href: string
  current: boolean
}

const navigation: NavigationItem[] = [
  { name: 'About Us', href: '#aboutus-section', current: false },
  { name: 'Services', href: '#services-section', current: false },
  { name: 'FAQ', href: '#faq-section', current: false },
  { name: 'Blog', href: '#blog-section', current: false },
  { name: 'Testimonial', href: '#testimonial-section', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto lg:px-8 p-3 md:p-4 max-w-7xl">
          <div className="relative flex items-center h-12 sm:h-20">
            <div className="flex flex-1 sm:justify-between items-center">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center border-right">
                <Link href="/" className="font-semibold text-2xl text-black sm:text-4xl">
                  <img src="/Foundasi.svg" alt="foundasi" />
                </Link>
              </div>

              {/* LINKS */}

              <div className="lg:flex items-center hidden border-right">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                        'px-3 py-4 rounded-md text-lg font-normal',
                      )}
                      aria-current={item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* <button className='lg:flex justify-end hidden bg-transparent hover:bg-navyblue px-6 lg:px-12 py-4 rounded-full font-semibold text-xl hover:text-white navbutton'>Contact us</button> */}
              <Contactusform />
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block w-6 h-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  )
}

export default Navbar
