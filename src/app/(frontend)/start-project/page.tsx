'use client'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const StartProjectPage = (props: Props) => {
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
        redirect('/')
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

  return (
    <main className="container">
      <div className="pt-40 pb-64 min-h-screen">
        <h1 className="mx-auto mb-8 max-w-xl text-3xl text-center">
          We’re excited to learn about your project. <strong>Ready to get started?</strong>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-2xl">
          <div className="gap-4 grid grid-cols-2">
            <div>
              <label
                htmlFor="text"
                className="block opacity-50 mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                id="text"
                name="name"
                value={inputValues.name}
                onChange={handleChange}
                type="text"
                autoComplete="current-password"
                required
                className="block relative focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 appearance-none focus:outline-none placeholder-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block opacity-50 mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                id="email"
                name="email"
                value={inputValues.email}
                onChange={handleChange}
                type="email"
                autoComplete="current-password"
                required
                className="block relative focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 appearance-none focus:outline-none placeholder-gray-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block opacity-50 mb-2 font-medium text-gray-900 dark:text-gray-400"
            >
              Additional Details
            </label>
            <textarea
              id="message"
              name="messages"
              rows={5}
              value={inputValues.messages}
              onChange={handleChange}
              className="block relative focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 appearance-none focus:outline-none placeholder-gray-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isDisabled || isLoading}
              className="bg-blue dark:hover:bg-primary-700 dark:bg-primary-600 disabled:opacity-50 px-8 py-3 rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 font-medium text-center text-white focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default StartProjectPage
