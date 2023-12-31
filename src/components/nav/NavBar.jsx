import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FaShopify } from "react-icons/fa";
import CartWidget from "../cart/CartWidget";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
  ];
  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-10 w-full  border-gray-800 bg-[#ffffff]">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-3xl font-bold inline">
            <FaShopify className="inline sm:text-5xl lg:hidden lg:text-4xl" />
            <span class="hidden lg:inline-block">SprintStyle</span>
          </a>
          <ul className="font-bold flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <div className="max-lg:hidden flex gap-2 text-lg leading-normal font-medium font-montserrat order-2">
              <a href="/">Sign in</a>
              <span>/</span>
              <a href="/">Explore now</a>
            </div>
            <div className="ml-6">
              <CartWidget className="inline" />
            </div>
            <div
              className="hidden max-lg:block cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-4xl" />
            </div>
          </div>
        </nav>
      </header>
      {/* {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-[#6CB9D8]  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )} */}
    </>
  );
};
export default Navbar;
