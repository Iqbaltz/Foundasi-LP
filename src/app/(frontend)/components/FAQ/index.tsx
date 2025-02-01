'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="py-24 mx-auto my-16 bg-faqblue lg:px-8 rounded-2xl max-w-7xl faq-bg"
    >
      <h3 className="mb-6 text-xl font-normal text-center text-white">FAQ</h3>
      <h2 className="text-4xl font-semibold text-center text-white lg:text-6xl">
        Frequently asked <br /> questions.
      </h2>
      <div className="w-full px-4 pt-16">
        <div className="w-full max-w-5xl px-6 py-8 mx-auto mb-5 bg-white rounded-2xl">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left rounded-lg">
                  <span>What services do we offer?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-black opacity-50">
                  We provide{' '}
                  <span className="font-bold text-black">
                    branding, design, and digital marketing
                  </span>{' '}
                  solutions, including{' '}
                  <span className="font-bold text-black">
                    logo design, UI/UX design, social media graphics, photography, website
                    development, SEO, and content strategy.
                  </span>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="w-full max-w-5xl px-6 py-8 mx-auto mb-5 bg-white rounded-2xl">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left rounded-lg">
                  <span>Where are we located?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-black opacity-50">
                  We are based in <span className="font-bold text-black">Medan, Indonesia</span> but
                  we work with clients globally. Whether you&apos;re local or international, we
                  ensure seamless communication and collaboration.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="w-full max-w-5xl px-6 py-8 mx-auto bg-white rounded-2xl">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left rounded-lg">
                  <span>What makes us different?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-black opacity-50">
                  We stand out through our{' '}
                  <span className="font-bold text-black">end-to-end approach</span>, handling
                  everything from{' '}
                  <span className="font-bold text-black">
                    branding and UI/UX design to development, SEO, and content
                  </span>
                  strategy—all under one roof. Our team combines{' '}
                  <span className="font-bold text-black">
                    industry expertise, cutting-edge technology, and data-driven insights
                  </span>{' '}
                  to craft solutions tailored to each client. We prioritize{' '}
                  <span className="font-bold text-black">
                    scalability, performance, and seamless user experiences
                  </span>
                  , ensuring that every project is not just visually appealing but also functional
                  and optimized for growth.
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
