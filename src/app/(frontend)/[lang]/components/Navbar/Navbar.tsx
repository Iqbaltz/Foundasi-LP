'use client'

import {
  Disclosure,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation' // For programmatic navigation
import { Bars3Icon } from '@heroicons/react/24/outline'
import Drawer from './Drawer'
import Drawerdata from './Drawerdata'
import Contactusform from './Contactus'
import { Lang, LocalizedString } from '@/types'

interface NavigationItem {
  name: LocalizedString
  href: string
  current: boolean
}

const navigation: NavigationItem[] = [
  { name: { id: 'Tentang Kami', en: 'About Us' }, href: '#aboutus-section', current: false },
  { name: { id: 'Layanan', en: 'Services' }, href: '#services-section', current: false },
  { name: { id: 'Karya Kami', en: 'Our Work' }, href: '#featured-works', current: false },
  { name: { id: 'Pertanyaan', en: 'FAQ' }, href: '#faq-section', current: false },
  // { name: { id: 'Artikel', en: 'Blog' }, href: '#blog-section', current: false },
  // { name: { id: 'Testimoni', en: 'Testimonial' }, href: '#testimonial-section', current: false },
]

const languages = [
  { id: 'en', name: 'English', flag: '/images/flags/united-states.png' },
  { id: 'id', name: 'Indonesia', flag: '/images/flags/indonesia.png' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ lang }: { lang: Lang }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedLanguage, setSelectedLanguage] = React.useState<any>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollUpDistance, setScrollUpDistance] = useState(0)
  const [scrollDownDistance, setScrollDownDistance] = useState(0)
  const router = useRouter()

  const SCROLL_UP_TOLERANCE = 100 // Amount to scroll up before showing navbar
  const SCROLL_DOWN_TOLERANCE = 150 // Amount to scroll down before hiding navbar

  const changeLanguage = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language)
    router.push(`/${language.id}`) // Update the URL with the selected locale
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollUpDistance(0) // Reset scroll-up tracking
        setScrollDownDistance((prev) => prev + (currentScrollY - lastScrollY))

        if (scrollDownDistance > SCROLL_DOWN_TOLERANCE) {
          setIsVisible(false) // Hide navbar if scroll down past tolerance
        }
      } else {
        // Scrolling up
        setScrollDownDistance(0) // Reset scroll-down tracking
        setScrollUpDistance((prev) => prev + (lastScrollY - currentScrollY))

        if (scrollUpDistance > SCROLL_UP_TOLERANCE) {
          setIsVisible(true) // Show navbar if scroll up past tolerance
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY, scrollUpDistance, scrollDownDistance])

  return (
    <Disclosure as="nav" className={`navbar ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <>
        <div className="mx-auto p-3 md:p-4 lg:px-8 max-w-7xl">
          <div className="relative flex items-center h-12 sm:h-20">
            <div className="flex flex-1 sm:justify-between items-center">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="font-semibold text-black text-2xl sm:text-4xl">
                  <img src="/Foundasi.svg" alt="foundasi" />
                </Link>
              </div>

              {/* LINKS */}
              <div className="hidden lg:flex items-center">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name[lang]}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                        'px-3 py-4 rounded-md text-lg font-normal',
                      )}
                      aria-current={item.href ? 'page' : undefined}
                    >
                      {item.name[lang]}
                    </Link>
                  ))}
                </div>
              </div>
              <Contactusform lang={lang} />
            </div>

            {/* LANGUAGE SELECTOR */}
            <div className="max-lg:mr-2 lg:ml-4">
              {selectedLanguage != null && (
                <Listbox value={selectedLanguage} onChange={changeLanguage}>
                  <div className="relative">
                    <ListboxButton className="flex items-center gap-2 p-2">
                      <img
                        src={selectedLanguage.flag}
                        alt={selectedLanguage.name}
                        className="w-5 h-5"
                      />
                      {selectedLanguage.name}
                    </ListboxButton>
                    <ListboxOptions className="absolute bg-white shadow mt-1 rounded w-28 overflow-hidden">
                      {languages.map((language) => (
                        <ListboxOption
                          key={language.id}
                          value={language}
                          className={({ active }) =>
                            `cursor-pointer select-none hover:bg-blue hover:text-white p-2 flex items-center gap-2 ${
                              active ? 'bg-blue-100' : ''
                            }`
                          }
                        >
                          <img src={language.flag} alt={language.name} className="w-5 h-5" />
                          {language.name}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              )}
            </div>

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="lg:hidden block">
              <Bars3Icon
                className="block w-6 h-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>
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
