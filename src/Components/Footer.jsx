const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand and Address */}
          <div>
            <h2 className="text-xl font-bold mb-2">Funiro.</h2>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-2">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-black text-white rounded-r-md">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-600 text-sm">
          2023 Funiro. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
