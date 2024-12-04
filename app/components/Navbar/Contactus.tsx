"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

const Contactusform = () => {
  let [isOpen, setIsOpen] = useState(false);

  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    alert(
      `Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`
    );
    setIsOpen(false);
  };

  // FORM SUBMIT
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // handle form submission
  };

  const isDisabled = Object.values(inputValues).some((value) => value === "");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="right-0 sm:static inset-y-0 sm:inset-auto flex items-center md:ml-6 pr-2 sm:pr-0">
        {/* <div className='lg:hidden'>
                    <button type="button" className='border-purple bg-navyblue px-4 py-2 border rounded w-full font-medium text-white hover:text-white' onClick={openModal}>
                        Contact Us
                    </button>
                </div> */}
        <div className="lg:block hidden">
          <button
            type="button"
            className="justify-end bg-transparent hover:bg-navyblue px-6 lg:px-12 py-4 rounded-full font-semibold text-xl hover:text-white navbutton"
            onClick={openModal}
          >
            Contact Us
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Panel className="bg-white shadow-xl p-6 rounded-2xl w-full max-w-md text-left transform transition-all overflow-hidden align-middle">
                  <div className="mx-auto px-4 py-8 lg:py-8 max-w-screen-md">
                    <div className="flex flex-shrink-0 justify-center items-center">
                      <Link
                        href="/"
                        className="font-semibold text-2xl text-black sm:text-4xl"
                      >
                        Foundasi Solutions
                      </Link>
                    </div>
                    <p className="mt-8 mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">
                      Contact us now? Want to send us a feedback?
                    </p>
                    <form
                      action="#"
                      className="space-y-8"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 font-medium text-gray-900 text-sm dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <input
                          id="text"
                          name="input1"
                          value={inputValues.input1}
                          onChange={handleChange}
                          type="text"
                          autoComplete="current-password"
                          required
                          className="block relative focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 sm:text-sm appearance-none placeholder-gray-500 focus:outline-none"
                          placeholder="Name..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 font-medium text-gray-900 text-sm dark:text-gray-300"
                        >
                          Your email
                        </label>
                        <input
                          id="email"
                          name="input2"
                          value={inputValues.input2}
                          onChange={handleChange}
                          type="email"
                          autoComplete="current-password"
                          required
                          className="block relative focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 sm:text-sm appearance-none placeholder-gray-500 focus:outline-none"
                          placeholder="xyz@email.com"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 font-medium text-gray-900 text-sm dark:text-gray-400"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          name="input3"
                          value={inputValues.input3}
                          onChange={handleChange}
                          className="block relative focus:z-10 focus:border-indigo-500 px-3 py-2 border border-linegrey rounded-md focus:ring-indigo-500 w-full text-gray-900 sm:text-sm appearance-none placeholder-gray-500 focus:outline-none"
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        onClick={handleClick}
                        disabled={isDisabled}
                        className="bg-blue dark:hover:bg-primary-700 dark:bg-primary-600 disabled:opacity-50 px-5 py-3 rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 w-full font-medium text-center text-sm text-white focus:outline-none"
                      >
                        Send message
                      </button>
                    </form>
                  </div>

                  {/* <div className='flex justify-end'>
                                        <button type="button"
                                            onClick={closeModal}
                                            className="bg-red hover:bg-primary-800 dark:hover:bg-primary-700 dark:bg-primary-600 mt-2 px-5 py-3 rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 w-50 font-medium text-center text-sm text-white focus:outline-none">Close</button>
                                    </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contactusform;
