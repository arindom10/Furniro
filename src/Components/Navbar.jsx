import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClassName = "text-bold text-black font-bold";

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#ffffff] shadow-md">
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
          <h1 className="ml-2 text-5xl font-semibold text-[#000000]">
            Furniro
          </h1>
        </a>
      </div>

      {/* Middle: Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} text-lg`
                : "text-gray-600 hover:text-black text-lg"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} text-lg`
                : "text-gray-600 hover:text-black text-lg"
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} text-lg`
                : "text-gray-600 hover:text-black text-lg"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} text-lg`
                : "text-gray-600 hover:text-black text-lg"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Right: Icons */}
      <div className="flex space-x-4  text-2xl">
        <i className="ri-user-3-line cursor-pointer text-[#000000] "></i>
        <i className="ri-search-line cursor-pointer text-[#000000] "></i>
        <i className="ri-heart-3-line cursor-pointer text-[#000000] "></i>
        <i className="ri-shopping-cart-line cursor-pointer text-[#000000] "></i>
      </div>
    </nav>
  );
};

export default Navbar;
