import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShopify } from "react-icons/fa";
import CartWidget from "../cart/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-10 w-full  border-gray-800 bg-[#ffffff]">
        <nav className="flex justify-between items-center max-container">
          <Link to={`/`} className="text-3xl font-bold inline">
            <FaShopify className="inline sm:text-5xl lg:hidden lg:text-4xl" />
            <span className="hidden lg:inline-block">SprintStyle</span>
          </Link>
          <div className="font-bold flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <NavLink to={`/`} className="font-montserrat leading-normal text-lg text-slate-gray uppercase">Home</NavLink>
           <NavLink to={`/category/zapatillas`}  className="font-montserrat leading-normal text-lg text-slate-gray uppercase">Zapatillas</NavLink>
           <NavLink to={`/category/ojotas`}  className="font-montserrat leading-normal text-lg text-slate-gray uppercase">Ojotas</NavLink>
           <NavLink to={`/category/borcegos`} className="font-montserrat leading-normal text-lg text-slate-gray uppercase" >Borcegos</NavLink>
          </div>
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
    </>
  );
};
export default Navbar;
