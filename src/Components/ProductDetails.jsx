import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL

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

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <h2 className="text-center text-2xl font-bold mt-20">
        Product not found!
      </h2>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-black mb-4">
            {product.price}
          </p>
          {product.oldPrice && (
            <p className="text-gray-400 line-through mb-4">
              {product.oldPrice}
            </p>
          )}
          <button className="px-6 py-2 bg-[#B88E2F] text-white font-medium rounded shadow hover:bg-[#A07D26] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
