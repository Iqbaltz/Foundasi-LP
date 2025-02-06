'use client';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

type Props = {};

const StartProjectPage = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    messages: '',
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  // FORM SUBMIT
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/project-planner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValues),
      });

      if (response.ok) {
        alert('Your message has been sent successfully!');
        setInputValues({ name: '', email: '', projectType: '', budget: '', messages: '' });
        redirect('/');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }

    setIsLoading(false);
  };

  const isDisabled = Object.values(inputValues).some((value) => value === '');

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
                htmlFor="name"
                className="block opacity-50 mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                value={inputValues.name}
                onChange={handleChange}
                type="text"
                required
                className="block focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 appearance-none placeholder-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block opacity-50 mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                value={inputValues.email}
                onChange={handleChange}
                type="email"
                required
                className="block focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 appearance-none placeholder-gray-500"
              />
            </div>
          </div>
          <div className="gap-4 grid grid-cols-2">
            <div>
              <label
                htmlFor="projectType"
                className="block opacity-50 mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Type of Project
              </label>
              <div className="relative">
                <select
                  id="projectType"
                  name="projectType"
                  value={inputValues.projectType}
                  onChange={handleChange}
                  required
                  className="block focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 appearance-none placeholder-gray-500"
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option value="web">Web App</option>
                  <option value="mobile">Mobile App</option>
                  <option value="design">UI/UX Design</option>
                  <option value="logo">Logo Design</option>
                  <option value="copywriting">Copywriting & Content Creation</option>
                </select>
                <ChevronDownIcon
                  className="absolute top-3 right-3 z-10 pointer-events-none fill-black/60 size-4"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block opacity-50 mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Budget
              </label>
              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  value={inputValues.budget}
                  onChange={handleChange}
                  required
                  className="block focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 appearance-none placeholder-gray-500"
                >
                  <option value="" disabled>
                    Select a budget
                  </option>
                  <option value="low">$100 - $500</option>
                  <option value="medium">$500 - $1,000</option>
                  <option value="big">$1,000 - $5,000</option>
                  <option value="super">$5,000+</option>
                </select>
                <ChevronDownIcon
                  className="absolute top-3 right-3 z-10 pointer-events-none fill-black/60 size-4"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="messages"
              className="block opacity-50 mb-2 font-medium text-gray-900 dark:text-gray-400"
            >
              Additional Details
            </label>
            <textarea
              id="messages"
              name="messages"
              rows={5}
              value={inputValues.messages}
              onChange={handleChange}
              required
              className="block focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 placeholder-gray-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isDisabled || isLoading}
              className="bg-blue hover:bg-primary-700 dark:bg-primary-600 disabled:opacity-50 px-8 py-3 rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 font-medium text-white"
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default StartProjectPage;
