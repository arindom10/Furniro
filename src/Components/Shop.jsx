import Features from "./Features";
import OurProducts from "./OurProducts";

const Shop = () => {
  return (
    <div>
      <section className="bg-[#f9f4ef]">
        {/* Banner Section */}
        <div
          className="relative bg-cover bg-center h-48 flex items-center justify-center"
          style={{
            backgroundImage: "url('https://i.ibb.co/QFJ78bX/Rectangle-1.png')",
          }}
        >
          <div className="bg-white/70 w-full h-full absolute"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
            <p className="text-sm text-gray-600 mt-2">
              <span>Home</span> &gt; <span>Shop</span>
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="container mx-auto py-6 px-4 flex flex-wrap items-center justify-between bg-[#f9f4ef]">
          {/* Filter Icon */}
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-lg">
              <i className="ri-filter-line"></i>
            </span>
            <p className="text-sm font-medium">Filter</p>
          </div>

          {/* Layout Icons */}
          <div className="flex items-center gap-4">
            <span className="text-lg">
              <i className="ri-layout-grid-line"></i>
            </span>
            <span className="text-lg">
              <i className="ri-layout-row-line"></i>
            </span>
          </div>

          {/* Result Count */}
          <div className="text-gray-600 text-sm">
            Showing 1–16 of 32 results
          </div>

          {/* Sorting and Pagination */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray-600">Show</p>
              <select className="border border-gray-300 rounded-md p-1 text-gray-800 focus:ring-[#B88E2F] focus:border-[#B88E2F]">
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="48">48</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray-600">Sort by</p>
              <select className="border border-gray-300 rounded-md p-1 text-gray-800 focus:ring-[#B88E2F] focus:border-[#B88E2F]">
                <option value="default">Default</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <OurProducts isShopPage={true} />
      <Features />
    </div>
  );
};

export default Shop;
