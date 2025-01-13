const About = () => {
  return (
    <section className="bg-[#f9f4ef] py-12 px-6">
      <div className="container mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            About Us
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            We are dedicated to providing the best services and experiences for
            our customers. Learn more about our mission, vision, and the team
            that makes it all happen.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to create value for our customers by delivering
              high-quality products and services while fostering innovation and
              sustainability.
            </p>
          </div>
          {/* Vision */}
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-600">
              We aim to be a leader in the industry, inspiring change and
              positively impacting communities through our dedication to
              excellence and social responsibility.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center cursor-pointer">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://i.ibb.co.com/LdVzhpv/AKhigh.png"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Arindom Kundu
              </h3>
              <p className="text-gray-600 text-sm">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://i.ibb.co.com/48f5dC9/459550245-2124760304584631-3625582919085482970-n.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Hasibur Rahman
              </h3>
              <p className="text-gray-600 text-sm">Chief Marketing Officer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://pbs.twimg.com/media/Ez0vtthUcAYcntH.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Tanzim Ahmed
              </h3>
              <p className="text-gray-600 text-sm">Head of Development</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Core Values
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              🌟 Excellence: Striving for the highest standards in everything we
              do.
            </li>
            <li>
              💡 Innovation: Embracing creativity and new ideas to drive
              progress.
            </li>
            <li>
              🤝 Integrity: Conducting business ethically and with transparency.
            </li>
            <li>
              🌍 Sustainability: Protecting the environment for future
              generations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
