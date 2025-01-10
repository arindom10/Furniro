import {
  FaTrophy,
  FaCheckCircle,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaTrophy size={30} className="text-black" />,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      id: 2,
      icon: <FaCheckCircle size={30} className="text-black" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      id: 3,
      icon: <FaShippingFast size={30} className="text-black" />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      id: 4,
      icon: <FaHeadset size={30} className="text-black" />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#f9f6f1] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center space-x-4 text-center"
            >
              <div className="p-4 rounded-full bg-white shadow-md">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
