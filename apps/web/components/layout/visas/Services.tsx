import React from "react";
import Link from "next/link";

const servicesData = [
  {
    title: "Umrah Visa Services",
    desc: "With years of experience, we offer customized Umrah packages and excellent customer support and guidance.",
    img: "/assets/visa/why-1.webp",
    alt: "Makkah clock tower hotel for Umrah service",
    btnText: "Apply for Umrah Visa",
    link: "/umrah",
  },
  {
    title: "Pakistani Visa Services",
    desc: "Our easy and fast user-friendly platform ensures a hassle-free visa application for single and multiple entry visas to Pakistan.",
    img: "/assets/visa/why-2.webp",
    alt: "Beautiful lake and mountains landscape in Pakistan",
    btnText: "Get Your Pakistani Visa Today",
    link: "/pakistan",
  },
  {
    title: "Saudia Visa Services",
    desc: "Explore Saudi visa options, including family, tourist, and business visas.",
    img: "/assets/visa/why-1.webp",
    alt: "Mount Arafat crowd pilgrimage during Hajj",
    btnText: "Apply for a Saudia Visa",
    link: "/saudi-arabia", // Updated route to match your new page
  },
  {
    title: "UAE Visa Services",
    desc: "Explore convenient and suitable options for transit visas and long-term stays in the UAE.",
    img: "/assets/visa/why-2.webp",
    alt: "Burj Khalifa and palm trees at night in Dubai",
    btnText: "Get Your UAE Visa",
    link: "/uae",
  },
];

const Services = () => {
  return (
    <section className="relative pb-8 sm:pb-12 pt-11 sm:pt-17 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* BACKGROUND IMAGE WITH LOW OPACITY */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
      />

      {/* LINEAR GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.3)] to-[rgba(85,178,218,0.4)] z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Our Services
        </h2>

        {/* RESPONSIVE GRID (Mobile, Tablet, Desktop Friendly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {servicesData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-5 sm:p-6 shadow-md flex flex-col sm:flex-row gap-5 items-center sm:items-stretch transition-all duration-300 hover:shadow-lg"
            >
              {/* IMAGE CONTAINER - Fully fluid on all screen sizes */}
              <div className="w-full sm:w-1/2 min-h-[180px] sm:min-h-[220px] relative rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* CONTENT CONTAINER */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between text-left py-1">
                <div>
                  <h3 className="font-bold text-gray-950 text-xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>

                {/* EQUAL SIZE BUTTONS */}
                <div className="mt-5 sm:mt-4 w-full">
                  <Link
                    href={item.link}
                    className="block w-full text-center bg-[#0F91D5] hover:bg-[#0d80bd] text-white text-xs md:text-sm font-medium py-3 rounded-xl transition duration-200 shadow-xs"
                  >
                    {item.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;