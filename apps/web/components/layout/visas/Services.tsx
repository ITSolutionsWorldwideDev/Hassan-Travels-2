import React from "react";

const Services = () => {
  return (
    <section
      className="relative py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
          Our Services
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-14">
          Embark on unforgettable journeys to popular destinations such as
          Makkah, Madinah, Dubai, and more with our exclusive tour packages.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* CARD 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="/assets/visa/why-1.webp"
              alt="Saudia Visa"
              className="w-full h-95 md:h-105 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md p-4 text-left">
              <h3 className="font-bold text-gray-900 text-lg">
                Saudia Visa Services
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Our easy and fast platform ensures hassle-free visa application.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="/assets/visa/why-2.webp"
              alt="Pakistan Visa"
              className="w-full h-95 md:h-105 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md p-4 text-left">
              <h3 className="font-bold text-gray-900 text-lg">
                Pakistani Visa Services
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Fast and reliable visa processing services for travelers.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="/assets/visa/why-1.webp"
              alt="Saudia Visa"
              className="w-full h-95 md:h-105 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md p-4 text-left">
              <h3 className="font-bold text-gray-900 text-lg">
                Saudia Visa Services
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Explore Saudi visa options including family & tourist visas.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="/assets/visa/why-2.webp"
              alt="Pakistan Visa"
              className="w-full h-95 md:h-105 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md p-4 text-left">
              <h3 className="font-bold text-gray-900 text-lg">
                Pakistani Visa Services
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Easy and user-friendly visa application system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
