import { useState } from "react";
import { Link } from "react-router-dom";

const InspirationSection = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co/BN22bgD/Rectangle-24.png",
      title: "Inner Peace",
      roomType: "Bed Room",
    },
    {
      id: 2,
      img: "https://i.ibb.co/3vgthCx/Rectangle-25.png",
      title: "Calm Kitchen",
      roomType: "Kitchen",
    },
    {
      id: 3,
      img: "https://i.ibb.co/yQGFYqz/Rectangle-26.png",
      title: "Serene Workspace",
      roomType: "Workspace",
    },
    {
      id: 4,
      img: "https://i.ibb.co/yQGFYqz/Rectangle-26.png",
      title: "Minimalist Room",
      roomType: "Living Room",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="bg-[#f9f4ef] py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="mt-4 text-gray-600">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <Link href="*">
            <button className="mt-6 px-6 py-3 bg-[#B88E2F] text-white font-medium rounded-lg shadow-md hover:bg-[#a07c29] transition duration-300">
              Explore More
            </button>
          </Link>
        </div>

        {/* Right Section: Custom Carousel */}
        <div className="relative overflow-hidden">
          {/* Carousel Wrapper */}
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / 2)}%)`,
              width: `${slides.length * 50}%`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-1/2 flex-shrink-0 px-2">
                <div className="relative">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-md shadow-lg">
                    <p className="text-sm text-gray-600">
                      {slide.id < 10 ? `0${slide.id}` : slide.id} —{" "}
                      {slide.roomType}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#B88E2F] text-white p-2 rounded-full shadow-md hover:bg-[#a07c29] transition duration-300"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#B88E2F] text-white p-2 rounded-full shadow-md hover:bg-[#a07c29] transition duration-300"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
