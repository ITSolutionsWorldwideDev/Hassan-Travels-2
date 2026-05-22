"use client";
import { useState } from "react";

import Image from "next/image";
const categories = ["popular", "family", "honeymoon", "summer", "cultural"];
const tourPackages = [
  {
    img: "dubai.webp",
    name: "Dubai",
    country: "UAE",
    price: "€ 1,650",
    category: "popular",
  },
   {
    img: "dubai.webp",
    name: "Dubai",
    country: "UAE",
    price: "€ 1,650",
    category: "popular",
  },
   {
    img: "dubai.webp",
    name: "Dubai",
    country: "UAE",
    price: "€ 1,650",
    category: "popular",
  },
   {
    img: "dubai.webp",
    name: "Dubai",
    country: "UAE",
    price: "€ 1,650",
    category: "popular",
  },
   {
    img: "dubai.webp",
    name: "Dubai",
    country: "UAE",
    price: "€ 1,650",
    category: "popular",
  },
  {
    img: "dubai.webp",
    name: "Istanbul",
    country: "Turkey",
    price: "€ 1,750",
    category: "family",
  },
  {
    img: "dubai.webp",
    name: "Bangkok",
    country: "Thailand",
    price: "€ 2,250",
    category: "honeymoon",
  },
  {
    img: "dubai.webp",
    name: "Makkah",
    country: "Saudi Arabia",
    price: "€ 1,950",
    category: "summer",
  },
  {
    img: "dubai.webp",
    name: "Madinah",
    country: "Saudi Arabia",
    price: "€ 1,850",
    category: "popular",
  },
  {
    img: "dubai.webp",
    name: "Kuala Lumpur",
    country: "Malaysia",
    price: "€ 2,150",
    category: "cultural",
  },
];
const PopularTourPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState("popular");

  // Filter data according to selected category
  const filteredTours = tourPackages.filter(
    (tour) => tour.category === selectedCategory,
  );
  return (
   <section
  className="relative w-full min-h-[70vh] py-12 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden bg-white"
  aria-labelledby="popular-tour-packages"
>
      {/* BACKGROUND IMAGE WITH LOW OPACITY */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
      />

      {/* LINEAR GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(207,234,246,0.3)] to-[rgba(85,178,218,0.4)] z-0" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        {/* TITLE */}
        <h2
          id="popular-tour-packages"
          className="text-2xl sm:text-3xl font-bold mb-3"
        >
          <span className="text-blue-600">Popular Tour Packages</span>{" "}
          <span className="text-black">From Netherlands</span>
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl text-sm sm:text-base">
          Embark on unforgettable journeys to popular destinations such as Makkah,
          Madinah, Dubai, and more with our exclusive tour packages.
        </p>

        {/* CATEGORY BUTTONS */}
        <div
          className="flex flex-wrap gap-2 sm:gap-3 mb-10"
          aria-label="Tour Categories"
        >
          {categories.map((category, ind) => (
            <button
              key={ind}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition cursor-pointer
                
                ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((item, i) => (
            <article
              key={i}
              className="group flex bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              {/* IMAGE SIDE */}
              <div className="w-1/2 h-[170px] overflow-hidden">
                <Image
                  src={`/assets/home/${item.img}`}
                  alt={`${item.name} - ${item.country} tour package`}
                  width={400}
                  height={170}
                  priority={i < 2} // only first 2 images load fast
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:-translate-x-10"
                />
              </div>

              {/* TEXT SIDE */}
              <div className="w-1/2 bg-white px-5 py-4 flex flex-col justify-center transition-all duration-500 ease-out group-hover:-translate-x-6">
                
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.country}
                </p>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">Retour vanaf</p>
                  <p className="text-blue-600 text-xl font-bold">
                    {item.price}
                  </p>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTourPackages;