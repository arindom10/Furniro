const BrowseTheRange = () => {
  const categories = [
    {
      title: "Dining",
      image: "https://i.ibb.co/CmmTJDx/image-106.jpg",
    },
    {
      title: "Living",
      image: "https://i.ibb.co/7J7d4L9/image-100.png",
    },
    {
      title: "Bedroom",
      image: "https://i.ibb.co/Tg0VN67/image-101.png",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Browse The Range
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-shadow duration-300"
            >
              <div className="rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-[381px] h-[480px] object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mt-4">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
