import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClassName = "text-bold text-black font-bold";

  return (
    <nav className="bg-[#ffffff] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="https://i.ibb.co/FJtY9Dv/Meubel-House-Logos-05.png"
              alt="Furniro Logo"
              className="h-10"
            />
          </a>
          <a href="/">
            <h1 className="ml-2 text-3xl md:text-5xl font-semibold text-[#000000]">
              Furniro
            </h1>
          </a>
        </div>

        {/* Middle: Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-2xl text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`ri-${menuOpen ? "close-line" : "menu-line"}`}></i>
          </button>
        </div>

        {/* Middle: Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-[#ffffff] md:flex md:space-x-8 md:items-center md:justify-center md:bg-transparent md:py-0 shadow-md md:shadow-none`}
        >
          <li className="border-t md:border-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${activeClassName} block md:inline-block px-4 py-2 text-lg`
                  : "text-gray-600 hover:text-black block md:inline-block px-4 py-2 text-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="border-t md:border-none">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? `${activeClassName} block md:inline-block px-4 py-2 text-lg`
                  : "text-gray-600 hover:text-black block md:inline-block px-4 py-2 text-lg"
              }
            >
              Shop
            </NavLink>
          </li>
          <li className="border-t md:border-none">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${activeClassName} block md:inline-block px-4 py-2 text-lg`
                  : "text-gray-600 hover:text-black block md:inline-block px-4 py-2 text-lg"
              }
            >
              About
            </NavLink>
          </li>
          <li className="border-t md:border-none">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${activeClassName} block md:inline-block px-4 py-2 text-lg`
                  : "text-gray-600 hover:text-black block md:inline-block px-4 py-2 text-lg"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right: Icons */}
        <div className="hidden md:flex space-x-4 text-2xl">
          <i className="ri-user-3-line cursor-pointer text-[#000000]"></i>
          <i className="ri-search-line cursor-pointer text-[#000000]"></i>
          <i className="ri-heart-3-line cursor-pointer text-[#000000]"></i>
          <i className="ri-shopping-cart-line cursor-pointer text-[#000000]"></i>
        </div>
      </div>

      {/* Right: Icons for Mobile */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden flex justify-center space-x-4 py-4 text-2xl`}
      >
        <i className="ri-user-3-line cursor-pointer text-[#000000]"></i>
        <i className="ri-search-line cursor-pointer text-[#000000]"></i>
        <i className="ri-heart-3-line cursor-pointer text-[#000000]"></i>
        <i className="ri-shopping-cart-line cursor-pointer text-[#000000]"></i>
      </div>
    </nav>
  );
};

export default Navbar;
