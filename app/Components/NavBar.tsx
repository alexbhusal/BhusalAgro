
import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="" id="home">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img
          src="/favicon.ico"
          className="h-8 md:h-12"
            alt="NavLogo"
          />
          <span className="self-center text-2xl font-semibold blatext-blackspace-nowrap text-black">
            Bhusal Agrovet
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="  font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-5 md:border-0 ">
            <li>
              <Link
                to=""
                className="block py-2 px-3 text-xl text-center md:text-2xl text-black  rounded-sm md:bg-transparent md:text-black md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                className="block py-2 px-3 text-xl text-center md:text-2xl text-black rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#services"
                className="block py-2 px-3 text-xl text-center md:text-2xl text-black rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-3 text-xl text-center md:text-2xl text-black rounded-sm   md:border-0 md:hover:text-red-500 md:p-0"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="block py-2 px-3 text-xl text-center  md:text-2xl text-black rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
