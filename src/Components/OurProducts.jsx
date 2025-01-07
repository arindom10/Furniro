import { useState } from "react";
import { FaHeart, FaShareAlt, FaExchangeAlt } from "react-icons/fa";

const OurProducts = ({ isShopPage }) => {
  const products = [
    {
      id: 1,
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "https://i.ibb.co/QD5kPGQ/Images.png",
      badge: null,
    },
    {
      id: 2,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      image: "https://i.ibb.co/Px6fd2k/image-3.png",
      badge: "New",
    },
    {
      id: 3,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: "https://i.ibb.co/gDksVzb/image-4.png",
      badge: "50%",
    },
    {
      id: 4,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      image: "https://i.ibb.co/ZX8Bhc4/image-6.png",
      badge: "New",
    },
    {
      id: 5,
      name: "Lampy",
      description: "Modern lamp",
      price: "Rp 2.000.000",
      image: "https://i.ibb.co/WknKkRN/Images-2.png",
      badge: null,
    },
    {
      id: 6,
      name: "Sofy",
      description: "Luxury sofa",
      price: "Rp 8.000.000",
      image: "https://i.ibb.co/K23X21L/Images-1.png",
      badge: null,
    },
    {
      id: 7,
      name: "Chairy",
      description: "Wooden chair",
      price: "Rp 750.000",
      image: "https://i.ibb.co/T4N1jbh/image-7.png",
      badge: "New",
    },
    {
      id: 8,
      name: "Tabley",
      description: "Dining table",
      price: "Rp 5.000.000",
      image: "https://i.ibb.co/XWnw2nb/image-8.png",
      badge: null,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedProducts =
    showAll || isShopPage ? products : products.slice(0, 8);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="relative border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-medium mt-4">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-black font-bold mt-2">{product.price}</p>
              {product.oldPrice && (
                <p className="text-gray-400 line-through">{product.oldPrice}</p>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-lg">
                <button className="bg-white text-black font-medium px-4 py-2 rounded shadow hover:bg-gray-200 mb-4">
                  Add to Cart
                </button>
                <div className="flex space-x-6 text-white text-xl">
                  <button className="hover:text-gray-400">
                    <FaShareAlt />
                  </button>
                  <button className="hover:text-gray-400">
                    <FaExchangeAlt />
                  </button>
                  <button className="hover:text-gray-400">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!isShopPage && !showAll && (
          <div className="text-center mt-8">
            <a href="/shop">
              <button
                onClick={() => setShowAll(true)}
                className="inline-block px-6 py-2 bg-[#FFFFFF] text-[#B88E2F] font-medium rounded transition"
              >
                Show More
              </button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProducts;
