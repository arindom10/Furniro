import Features from "./Features";

const Contact = () => {
  return (
    <section className="bg-[#f9f4ef] py-12 px-8">
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
            <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
            <p className="text-sm text-gray-600 mt-2">
              <span>Home</span> &gt; <span>Contact</span>
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 mb-8">
            For more information about our product & services, please feel free
            to drop us an email. Our staff always be there to help you out. Do
            not hesitate!
          </p>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#B88E2F]">
                <i className="ri-map-pin-line"></i>
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#B88E2F]">
                <i className="ri-phone-line"></i>
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">
                  Mobile: (+84) 546-6789
                  <br />
                  Hotline: (+84) 456-6789
                </p>
              </div>
            </div>
            {/* Working Time */}
            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#B88E2F]">
                <i className="ri-time-line"></i>
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Working Time
                </h4>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div>
          <form className="bg-white p-6 rounded-lg shadow-lg space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Abc@def.com"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
              />
            </div>
            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optional"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I'd like to ask about"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-[#B88E2F] focus:border-[#B88E2F] resize-none"
                rows="4"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#B88E2F] text-white py-3 rounded-md text-center font-medium hover:bg-[#a07c29] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="container mx-auto mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8376682936627!2d-122.08560828434293!3d37.42206597982313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7302a30e1d7%3A0x3f6bb3d6b345949!2sGoogleplex!5e0!3m2!1sen!2sus!4v1647587041159!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default Contact;
