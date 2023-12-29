"use client"
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Modal({open, setOpen}) {
  

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open || false} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-transparent text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-gradient-to-l from-sky-600 via-blue-700 to-indigo-700 opacity-85 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h2" className="text-center font-semibold leading-6 text-gray-900 ">
                        Email Me Here
                      </Dialog.Title>
                      <form class="mt-5 px-8 flex flex-col gap-5 items-center w-full">
                        <input
                            class="p-2 w-full  ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            class="p-2 w-full  ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                            type="text"
                            placeholder="phone"
                        />
                        <input
                            class="p-2 w-full  ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                            type="email"
                            placeholder="Email"
                        />
                        <textarea
                            class="p-2 w-full  ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                            cols="45"
                            rows="10"
                            placeholder="Message..."
                        ></textarea>
                        <button
                            class="w-1/2 bg-indigo-800 text-white font-medium px-3 py-2 rounded-md cursor-pointer"
                        >
                            Submit
                        </button>
                        </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                </div>
              </Dialog.Panel>
             

            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
