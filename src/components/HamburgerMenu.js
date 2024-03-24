import { useState } from 'react';
import Link from "next/link"

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex items-center flex-row-reverse'>
        <div
             className={`hamburger cursor-pointer text-2xl p-3 justify-end ${isOpen ? 'hidden' : 'block'}`}
             onClick={toggleMenu}
            >
            <span className="hamburger-bar block sm:w-10 sm:h-1 lg:w-20 lg:h-2 bg-teal-900 mb-2 lg:mb-4"></span>
            <span className="hamburger-bar block sm:w-10 sm:h-1 lg:w-20 lg:h-2 bg-teal-900 mb-2 lg:mb-4"></span>
            <span className="hamburger-bar block sm:w-10 sm:h-1 lg:w-20 lg:h-2 bg-teal-900"></span>
        </div>
        <span className={`hamburger-menu-close ${isOpen ? 'block' : 'hidden'} cursor-pointer border-black font-semibold text-2xl sm:text-3xl lg:text-7xl lg:mb-1 lg:mt-0 text-teal-900 mt-2 sm:mt-5`} onClick={toggleMenu}>x</span>
        <ul
            className={`nav-menu ${isOpen ? 'block' : 'hidden'} flex flex-row lg:display lg:flex-row`}
        >
            <li className="nav-menu-item sm:pl-2 sm:mt-3">
                <Link href="about" className="nav-menu-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 sm:text-xl sm:pr-2 lg:text-4xl lg:pr-4 hover:text-white mr-4">
                    About
                </Link>
            </li>
            <li className="nav-menu-item sm:mt-3">
                <Link href="previous-work" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 sm:text-xl sm:pr-2 lg:text-4xl lg:pr-4 hover:text-white mr-4">
                    Previous Work
                </Link>
            </li>
            <li className="nav-menu-item sm:mt-3">
                <Link href="contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 sm:text-xl sm:pr-2 lg:text-4xl lg:pr-4 hover:text-white mr-4">
                    Contact
                </Link>
            </li>
        </ul>
        </div>
    )
}

export default HamburgerMenu;