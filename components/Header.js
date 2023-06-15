import Image from 'next/image';
import Link from 'next/link';
import DropdownMenu from '../components/DropdownMenu';
import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-x-6 bg-black/50">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <Image
          className="rounded-t-lg  fill-slate-700"
          src=""
          alt="logo"
          width={40}
          height={40}
        />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-white h-5 w-5 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-white h-5 w-5 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block  lg:flex lg:items-center lg:w-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-sm lg:flex lg:justify-end">
          <Link href="/" className="text-header">
            Home
          </Link>
          <Link href="#about_section" className="text-header">
            About
          </Link>

          <DropdownMenu>Services</DropdownMenu>

          <Link href="#services_section" className="text-header">
            Projects
          </Link>
          <Link href="#services_section" className="text-header">
            Promotion
          </Link>

          <Link href="#form_section" className="text-header">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Header;
