"use client";

import React, { useMemo, useState } from "react";
import { Hotel, Star, PlaneTakeoff } from "lucide-react";
import { FaToggleOff } from "react-icons/fa";
import { PackagesBenefits } from "./PackagesBenefits";

const packages = [
  {
    id: 1,
    image: "/assets/home/dubai.webp",
    category: "Couple",
    categoryColor: "bg-pink-500",
    price: "3,499",
    title: "Maldives Honeymoon Paradise",
    location: "Maldives",
    duration: "7 Days",
    stay: {
      name: "Conrad Maldives Rangali Island",
      room: "Overwater Villa with Private Pool",
    },
    packages: [
      "Premium economy flights",
      "Visa on arrival included",
      "9 nights overwater villa",
      "All-inclusive meal plan",
      "Premium economy flights",
      "All-inclusive meal plan",
      "All-inclusive meal plan",
      "All-inclusive meal plan",
    ],
    experice: [
      "Underwater restaurant experience",
      "Private infinity pool",
      "Water sports activities",
      "Water sports activities",
    ],
    nextDeparture: "June 1, 2026",
  },
  {
    id: 2,
    image: "/assets/home/dubai.webp",
    category: "Solo",
    categoryColor: "bg-orange-500",
    price: "899",
    title: "Express Umrah Package",
    location: "Makkah & Madinah",
    duration: "7 Days",
    stay: {
      name: "Conrad Maldives Rangali Island",
      room: "Overwater Villa with Private Pool",
    },
    packages: [
      "Premium economy flights",
      "Visa on arrival included",
      "9 nights overwater villa",
      "All-inclusive meal plan",
      "Premium economy flights",
      "All-inclusive meal plan",
    ],
    experice: [
      "Underwater restaurant experience",
      "Private infinity pool",
      "Water sports activities",
      "Water sports activities",
    ],
    nextDeparture: "Every Friday",
  },
  {
    id: 3,
    image: "/assets/home/dubai.webp",
    category: "Family",
    categoryColor: "bg-green-500",
    price: "1,599",
    title: "Dubai Theme Park Experience",
    location: "Dubai, UAE",
    duration: "7 Days",
    stay: {
      name: "Conrad Maldives Rangali Island",
      room: "Overwater Villa with Private Pool",
    },
    packages: [
      "Premium economy flights",
      "Visa on arrival included",
      "9 nights overwater villa",
      "All-inclusive meal plan",
      "Premium economy flights",
      "All-inclusive meal plan",
    ],
    experice: [
      "Underwater restaurant experience",
      "Private infinity pool",
      "Water sports activities",
      "Water sports activities",
    ],
    nextDeparture: "June 1, 2026",
  },
  {
    id: 4,
    image: "/assets/home/dubai.webp",
    category: "Family",
    categoryColor: "bg-green-500",
    price: "1,599",
    title: "Dubai Luxury Escape",
    location: "Dubai, UAE",
    duration: "7 Days",
    stay: {
      name: "Conrad Maldives Rangali Island",
      room: "Overwater Villa with Private Pool",
    },
    packages: [
      "Premium economy flights",
      "Visa on arrival included",
      "9 nights overwater villa",
      "All-inclusive meal plan",
      "Premium economy flights",
      "All-inclusive meal plan",
    ],
    experice: [
      "Underwater restaurant experience",
      "Private infinity pool",
      "Water sports activities",
      "Water sports activities",
    ],
    nextDeparture: "June 1, 2026",
  },

  // Extra dummy cards for pagination testing
  {
    id: 5,
    image: "/assets/home/dubai.webp",
    category: "Couple",
    categoryColor: "bg-pink-500",
    price: "2,999",
    title: "Romantic Maldives Retreat",
    location: "Maldives",
    duration: "5 Days",
    stay: {
      name: "Conrad Maldives Rangali Island",
      room: "Overwater Villa with Private Pool",
    },
    packages: [
      "Premium economy flights",
      "Visa on arrival included",
      "9 nights overwater villa",
      "All-inclusive meal plan",
      "Premium economy flights",
      "All-inclusive meal plan",
    ],
    experice: [
      "Underwater restaurant experience",
      "Private infinity pool",
      "Water sports activities",
      "Water sports activities",
    ],
    nextDeparture: "June 1, 2026",
  },
  {
    id: 6,
    image: "/assets/home/dubai.webp",
    category: "Family",
    categoryColor: "bg-green-500",
    price: "1,299",
    title: "Dubai Adventure Tour",
    location: "Dubai, UAE",
    duration: "6 Days",
    stay: {
      name: "Conrad Maldives Rangali Island",
      room: "Overwater Villa with Private Pool",
    },
    packages: [
      "Premium economy flights",
      "Visa on arrival included",
      "9 nights overwater villa",
      "All-inclusive meal plan",
      "Premium economy flights",
      "All-inclusive meal plan",
    ],
    experice: [
      "Underwater restaurant experience",
      "Private infinity pool",
      "Water sports activities",
      "Water sports activities",
    ],
    nextDeparture: "June 1, 2026",
  },
  {
    id: 7,
    image: "/assets/home/dubai.webp",
    category: "Solo",
    categoryColor: "bg-orange-500",
    price: "799",
    title: "Budget Umrah Package",
    location: "Makkah & Madinah",
    duration: "10 Days",
    stay: {
      name: "Conrad Maldives Rangali Island",
      room: "Overwater Villa with Private Pool",
    },
    packages: [
      "Premium economy flights",
      "Visa on arrival included",
      "9 nights overwater villa",
      "All-inclusive meal plan",
      "Premium economy flights",
      "All-inclusive meal plan",
    ],
    experice: [
      "Underwater restaurant experience",
      "Private infinity pool",
      "Water sports activities",
      "Water sports activities",
    ],
    nextDeparture: "June 1, 2026",
  },
  {
    id: 8,
    image: "/assets/home/dubai.webp",
    category: "Family",
    categoryColor: "bg-green-500",
    price: "1,899",
    title: "Dubai Premium Escape",
    location: "Dubai, UAE",
    duration: "8 Days",
    stay: {
      name: "Conrad Maldives Rangali Island",
      room: "Overwater Villa with Private Pool",
    },
    packages: [
      "Premium economy flights",
      "Visa on arrival included",
      "9 nights overwater villa",
      "All-inclusive meal plan",
      "Premium economy flights",
      "All-inclusive meal plan",
    ],
    experice: [
      "Underwater restaurant experience",
      "Private infinity pool",
      "Water sports activities",
      "Water sports activities",
    ],
    nextDeparture: "June 1, 2026",
  },

  {
    id: 9,
    image: "/assets/home/dubai.webp",
    category: "Family",
    categoryColor: "bg-green-500",
    price: "1,899",
    title: "Dubai Premium Escape",
    location: "Dubai, UAE",
    duration: "8 Days",
    stay: {
      name: "Conrad Maldives Rangali Island",
      room: "Overwater Villa with Private Pool",
    },
    packages: [
      "Premium economy flights",
      "Visa on arrival included",
      "9 nights overwater villa",
      "All-inclusive meal plan",
      "Premium economy flights",
      "All-inclusive meal plan",
    ],
    experice: [
      "Underwater restaurant experience",
      "Private infinity pool",
      "Water sports activities",
      "Water sports activities",
    ],
    nextDeparture: "June 1, 2026",
  },
];

const ITEMS_PER_PAGE = 4;

const PopularTourPackages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(packages.length / ITEMS_PER_PAGE);

  const currentPackages = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return packages.slice(startIndex, endIndex);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* SEPARATE BACKGROUND LAYER WITH OPACITY-15 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
      />

      {/* VERY SOFT GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)] z-0"></div>

      {/* LIGHT WASH */}
      <div className="absolute inset-0 bg-white/35 z-0"></div>

      {/* ✅ CONTENT LAYER */}
      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* ===== HEADING ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F91D5]">
            Popular Tour Packages{" "}
            <span className="text-black">From Netherlands</span>
          </h2>

          <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
            Embark on unforgettable journeys to destinations like Makkah,
            Madinah, Dubai and more.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {currentPackages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.image}
                  className="h-52 w-full object-cover"
                  alt={item.title}
                />

                <span
                  className={`absolute top-3 left-3 text-white text-xs px-3 py-1 rounded-full shadow ${item.categoryColor}`}
                >
                  {item.category}
                </span>

                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-xl shadow text-[#0F91D5] font-semibold text-sm">
                  €{item.price}
                  <div className="text-[10px] text-gray-400">per person</div>
                </div>
                <div className="absolute bottom-0 bg-white rounded-md left-2 p-1 text-xs text-gray-500 mb-2">
                  ⭐ 4.8 (365)
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 text-left">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>

                <p className="text-xs text-gray-500 mb-3">
                  📍 {item.location} • 🕒 {item.duration}
                </p>

                <div className="bg-[#F8F9FA] p-5 rounded-lg text-xs mb-3">
                  <div className="flex gap-1">
                    <Hotel className="text-[#058BD0]" />
                    <div>
                      <h2 className="font-bold flex">
                        {item.stay.name}{" "}
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="fill-yellow-400 text-yellow-400 size-4" />
                        ))}
                      </h2>
                      <div className="font-normal">{item.stay.room}</div>
                    </div>
                  </div>
                </div>

                <PackagesBenefits benefits={item.packages} />

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.experice.map((exp, ind) => (
                    <p key={ind} className="bg-[#E3F2FD] text-[#0F91D5] text-[10px] px-2 py-1 rounded-xl">
                      {exp}
                    </p>
                  ))}
                </div>

                <div className="flex justify-between text-xs mb-3">
                  <span className="flex items-center">
                    <PlaneTakeoff className="mr-2 size-4" />
                    Next Departure:
                  </span>

                  <span className="font-medium">{item.nextDeparture}</span>
                </div>

                <button className="w-full bg-[#0F91D5] font-bold text-white py-2 rounded-lg text-sm hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

      {/* ===== PAGINATION ===== */}
<div className="flex justify-center items-center flex-wrap mt-12 gap-3 text-sm font-medium">
  {/* Previous Button */}
  <button
    type="button"
    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-lg transition ${
      currentPage === 1
        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Previous
  </button>

  {/* Page Numbers */}
  {Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;

    return (
      <button
        key={page}
        type="button"
        onClick={() => handlePageChange(page)}
        className={`px-4 py-2 rounded-lg transition ${
          currentPage === page
            ? "bg-[#0F91D5] text-white shadow-md shadow-blue-500/20"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        {page}
      </button>
    );
  })}

  {/* Next Button */}
  <button
    type="button"
    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 rounded-lg transition ${
      currentPage === totalPages
        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Next
  </button>
</div>
      </div>
    </section>
  );
};

export default PopularTourPackages;