const HashtagGallery = () => {
  const images = [
    { id: 1, src: "https://i.ibb.co/3T6cqvT/Rectangle-44.png" },
    { id: 2, src: "https://i.ibb.co/L0h3nfB/Rectangle-41.png" },
    { id: 3, src: "https://i.ibb.co/cQdywbB/Rectangle-45.png" },
    { id: 4, src: "https://i.ibb.co/vskMBP0/Rectangle-43.png" },
    { id: 5, src: "https://i.ibb.co/FY10ZHs/Rectangle-40.png" },
    { id: 6, src: "https://i.ibb.co/Ln2Tx7T/Rectangle-37.png" },
    { id: 7, src: "https://i.ibb.co/ftrDRR0/Rectangle-39.png" },
    { id: 8, src: "https://i.ibb.co/SnxLmZQ/Rectangle-38.png" },
    { id: 9, src: "https://i.ibb.co/xCRmRtJ/Images-3.png" },
  ];

  return (
    <section className="bg-[#F8F8F8] py-16 cursor-pointer">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-center text-3xl font-bold mb-12">
          Share your setup with{" "}
          <span className="text-[#B88E2F]">#FuniroFurniture</span>
        </h2>

        {/* Image Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Side */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src={images[0].src}
              alt="Gallery Item 1"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg shadow-md"
            />
            <img
              src={images[1].src}
              alt="Gallery Item 2"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg shadow-md"
            />
            <img
              src={images[2].src}
              alt="Gallery Item 3"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg shadow-md"
            />
            <img
              src={images[3].src}
              alt="Gallery Item 4"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Middle Image */}
          <div className="flex justify-center">
            <img
              src={images[4].src}
              alt="Gallery Center Image"
              className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src={images[5].src}
              alt="Gallery Item 5"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg shadow-md"
            />
            <img
              src={images[6].src}
              alt="Gallery Item 6"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg shadow-md"
            />
            <img
              src={images[7].src}
              alt="Gallery Item 7"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg shadow-md"
            />
            <img
              src={images[8].src}
              alt="Gallery Item 8"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HashtagGallery;
