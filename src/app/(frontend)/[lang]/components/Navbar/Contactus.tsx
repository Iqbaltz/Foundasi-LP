'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Lang } from '@/types'

const sentences = {
  btnContactUs: {
    en: 'Contact Us',
    id: 'Hubungi Kami',
  },
  titleForm: {
    en: 'Contact us now? Want to send us a feedback?',
    id: 'Ingin menghubungi kami? atau ada yang ingin disampaikan?',
  },
  labelName: {
    en: 'Your Name',
    id: 'Nama Anda',
  },
  labelEmail: {
    en: 'Your Email',
    id: 'Alamat Email Anda',
  },
  labelMessage: {
    en: 'Your Message',
    id: 'Pesan Anda',
  },
  labelSubmit: {
    en: 'Send Message',
    id: 'Kirim Pesan',
  },
}

const Contactusform = ({ lang }: { lang: Lang }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    messages: '',
  })

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setInputValues((prevState) => ({ ...prevState, [name]: value }))
  }

  // FORM SUBMIT
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValues),
      })

      if (response.ok) {
        alert('Your message has been sent successfully!')
        setInputValues({ name: '', email: '', messages: '' })
        setIsOpen(false)
      } else {
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    }

    setIsLoading(false)
  }

  const isDisabled = Object.values(inputValues).some((value) => value === '')

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className="right-0 sm:static inset-y-0 sm:inset-auto flex items-center md:ml-6 pr-2 sm:pr-0">
        {/* <div className='lg:hidden'>
                    <button type="button" className='bg-navyblue px-4 py-2 border border-purple rounded w-full font-medium text-white hover:text-white' onClick={openModal}>
                        Contact Us
                    </button>
                </div> */}
        <div className="hidden lg:block">
          <button
            type="button"
            className="justify-end bg-transparent hover:bg-navyblue px-6 lg:px-12 py-4 rounded-full font-semibold hover:text-white text-xl navbutton"
            onClick={openModal}
          >
            {sentences.btnContactUs[lang]}
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="z-50 relative" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center items-center p-4 min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white shadow-xl p-6 rounded-2xl w-full max-w-md overflow-hidden text-left align-middle transition-all transform">
                  <div className="mx-auto px-4 py-8 lg:py-8 max-w-screen-md">
                    <div className="flex flex-shrink-0 justify-center items-center">
                      <Link href="/" className="font-semibold text-black text-2xl sm:text-4xl">
                        Foundasi
                      </Link>
                    </div>
                    <p className="mt-6 mb-6 lg:mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl text-center">
                      {sentences.titleForm[lang]}
                    </p>
                    <form action="#" className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 font-medium text-gray-900 dark:text-gray-300 text-sm"
                        >
                          {sentences.labelName[lang]}
                        </label>
                        <input
                          id="text"
                          name="name"
                          value={inputValues.name}
                          onChange={handleChange}
                          type="text"
                          autoComplete="current-password"
                          required
                          className="block focus:z-10 relative px-3 py-2 border focus:border-indigo-500 border-linegrey rounded-md focus:outline-none focus:ring-indigo-500 w-full text-gray-900 sm:text-sm appearance-none placeholder-gray-500"
                          placeholder="Name..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 font-medium text-gray-900 dark:text-gray-300 text-sm"
                        >
                          {sentences.labelEmail[lang]}
                        </label>
                        <input
                          id="email"
                          name="email"
                          value={inputValues.email}
                          onChange={handleChange}
                          type="email"
                          autoComplete="current-password"
                          required
                          className="block focus:z-10 relative px-3 py-2 border focus:border-indigo-500 border-linegrey rounded-md focus:outline-none focus:ring-indigo-500 w-full text-gray-900 sm:text-sm appearance-none placeholder-gray-500"
                          placeholder="xyz@email.com"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 font-medium text-gray-900 dark:text-gray-400 text-sm"
                        >
                          {sentences.labelMessage[lang]}
                        </label>
                        <textarea
                          id="message"
                          name="messages"
                          value={inputValues.messages}
                          onChange={handleChange}
                          className="block focus:z-10 relative px-3 py-2 border focus:border-indigo-500 border-linegrey rounded-md focus:outline-none focus:ring-indigo-500 w-full text-gray-900 sm:text-sm appearance-none placeholder-gray-500"
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        disabled={isDisabled || isLoading}
                        className="bg-blue dark:hover:bg-primary-700 dark:bg-primary-600 disabled:opacity-50 px-5 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 w-full font-medium text-white text-sm text-center"
                      >
                        {sentences.labelSubmit[lang]}
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Contactusform
