'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="bg-faqblue mx-auto my-16 lg:px-8 py-24 rounded-2xl max-w-7xl faq-bg"
    >
      <h3 className="mb-6 font-normal text-center text-white text-xl">FAQ</h3>
      <h2 className="font-semibold text-4xl text-center text-white lg:text-6xl">
        Frequently asked <br /> questions.
      </h2>
      <div className="px-4 pt-16 w-full">
        <div className="bg-white mx-auto mb-5 px-6 py-8 rounded-2xl w-full max-w-5xl">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between px-4 py-2 rounded-lg w-full font-medium text-2xl text-left">
                  <span>Can you design my site?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="opacity-50 px-4 pt-4 pb-2 font-normal text-base text-black">
                  Craven omni memoria patriae zombieland clairvius narcisse <br /> religionis sunt
                  diri undead historiarum. Golums, zombies unrelenting <br /> et Raimi fascinati
                  beheading.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="bg-white mx-auto mb-5 px-6 py-8 rounded-2xl w-full max-w-5xl">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between px-4 py-2 rounded-lg w-full font-medium text-2xl text-left">
                  <span>Can you code my site?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="opacity-50 px-4 pt-4 pb-2 font-normal text-base text-black">
                  Craven omni memoria patriae zombieland clairvius narcisse <br /> religionis sunt
                  diri undead historiarum. Golums, zombies unrelenting <br /> et Raimi fascinati
                  beheading.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="bg-white mx-auto px-6 py-8 rounded-2xl w-full max-w-5xl">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between px-4 py-2 rounded-lg w-full font-medium text-2xl text-left">
                  <span>Where are you located?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="opacity-50 px-4 pt-4 pb-2 font-normal text-base text-black">
                  Craven omni memoria patriae zombieland clairvius narcisse <br /> religionis sunt
                  diri undead historiarum. Golums, zombies unrelenting <br /> et Raimi fascinati
                  beheading.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  )
}

export default FAQ
