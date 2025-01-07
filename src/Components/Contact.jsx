const Contact = () => {
  return (
    <section className="bg-[#f9f4ef] py-12 px-8">
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
    </section>
  );
};

export default Contact;
