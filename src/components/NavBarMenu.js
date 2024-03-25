import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react'
import horizontalLogo from 'src/images/integ-detailing-horizontal-logo.png'

export default function NavBarMenu() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
        <Link href='/' className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <Image src={horizontalLogo} href="/" className="w-48 h-24 mr-2" alt="Logo" />
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-sm lg:flex-grow">
            <Link href="about" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              About
            </Link>
            <Link href="previous-work" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Previous Works
            </Link>
            <Link href="contact" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Contact Information
            </Link>
          </div>
          <div>
            <button className="inline-flex items-center bg-amber-500 xxs:mt-4 lg:mt-0 border-0 py-2 px-4 text-white">
                Client Intake Form
            </button>
          </div>
        </div>
      </nav>
    )
}