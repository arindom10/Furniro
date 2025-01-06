import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClassName = "text-bold text-black font-bold";

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#ffffff] shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/FJtY9Dv/Meubel-House-Logos-05.png"
          alt="Furniro Logo"
          className="h-10"
        />
        <h1 className="ml-2 text-5xl font-semibold text-gray-800">Furniro</h1>
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
      <div className="flex space-x-4 text-gray-600 text-2xl">
        <i className="ri-user-3-line cursor-pointer hover:text-black"></i>
        <i className="ri-search-line cursor-pointer hover:text-black"></i>
        <i className="ri-heart-3-line cursor-pointer hover:text-black"></i>
        <i className="ri-shopping-cart-line cursor-pointer hover:text-black"></i>
      </div>
    </nav>
  );
};

export default Navbar;
