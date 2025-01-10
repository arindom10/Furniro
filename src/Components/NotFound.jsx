import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F8F8] text-center">
      <div>
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-600 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/">
          <button className="mt-6 px-6 py-2 bg-[#B88E2F] text-white text-lg font-medium rounded hover:bg-[#A07D26] transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
