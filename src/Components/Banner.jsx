const Banner = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="relative">
        <img
          src="https://i.ibb.co/y0b3drV/scandinavian-interior-mockup-wall-decal-background-1.png"
          alt="Scandinavian Interior"
          className="w-full h-[800px] object-cover"
        />
        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-end pr-8">
          <div className="max-w-md bg-[#FFF3E3] bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-sm font-bold text-gray-800">New Arrival</h2>
            <h3 className="text-5xl font-semibold text-[#B88E2F] mt-2 leading-tight">
              Discover Our
              <br />
              New Collection
            </h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            {/* BUY NOW Button */}
            <a href="*">
              <button className="mt-6 px-14 py-5 bg-[#B88E2F] text-white font-medium  shadow-md hover:bg-[#a07c29] transition duration-300">
                BUY NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
