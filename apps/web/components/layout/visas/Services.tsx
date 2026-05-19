import React from "react";

const servicesData = [
  {
    title: "Saudia Visa Services",
    desc: "Our easy and fast platform ensures hassle-free visa application.",
    img: "/assets/visa/why-1.webp",
    alt: "Saudi Arabia visa service for Umrah and tourist travel",
  },
  {
    title: "Pakistani Visa Services",
    desc: "Fast and reliable visa processing services for travelers.",
    img: "/assets/visa/why-2.webp",
    alt: "Pakistan visa assistance and processing services",
  },
  {
    title: "Saudi Travel Assistance",
    desc: "Explore Saudi visa options including family & tourist visas.",
    img: "/assets/visa/why-1.webp",
    alt: "Saudi Arabia travel and visa consultancy services",
  },
  {
    title: "Visa Application Support",
    desc: "Easy and user-friendly visa application system.",
    img: "/assets/visa/why-2.webp",
    alt: "Online visa application support and guidance",
  },
];

const Services = () => {
  return (
   <section className="relative w-full min-h-[70vh] py-12 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src="/assets/bgimage/h1.webp"
    alt=""
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* LIGHT GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)]"></div>

  {/* LIGHT OVERLAY */}
  <div className="absolute inset-0 bg-white/35"></div>

  {/* CONTENT */}
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
          {servicesData.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md p-4 text-left">
                <h3 className="font-bold text-gray-900 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;