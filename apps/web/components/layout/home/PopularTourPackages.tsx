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
      className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat relative container mx-auto"
      style={{ backgroundImage: "url('/images/tour.jpg')" }}
      aria-labelledby="popular-tour-packages"
    >
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
            className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* IMAGE LEFT */}
            <Image
              src={`/assets/home/${item.img}`}
              alt={`${item.name} tour package`}
              width={140}
              height={110}
              loading="lazy"
              className="w-30 sm:w-35 h-25 sm:h-27.5 object-cover"
            />

            {/* TEXT RIGHT */}
            <div className="p-3 sm:p-4 flex flex-col justify-between w-full">
              <div>
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.country}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Retour vanaf</p>
                <p className="text-blue-600 font-bold">{item.price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularTourPackages;
