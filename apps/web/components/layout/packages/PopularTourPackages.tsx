"use client";

import React, { useMemo, useState } from "react";
import { Hotel, Star, PlaneTakeoff } from "lucide-react";
import { PackagesBenefits } from "./PackagesBenefits";

const packages = [
  {
    id: 1,
    image: "/assets/packages/Tanzania/1.webp",
    category: "Africa",
    categoryColor: "bg-green-500",
    price: "2,273",
    title: "Best of Tanzania",
    location: "Arusha – Arusha",
    duration: "6 Days / 5 Nights",
    stay: {
      name: "Hotels / Lodges / Camps",
      room: "As per itinerary",
    },
    packages: [
      "Group tour",
      "Italian-speaking driver/guide",
      "Guaranteed departure (min 2 participants)",
      "Small groups max 7 participants",
      "4x4 safari vehicles",
      "Visits to 2 UNESCO World Heritage Sites",
      "Accommodation included",
      "Park entrance fees included",
    ],
    experice: [
      "Game drives",
      "Wildlife safari experience",
      "Cultural visits",
      "UNESCO heritage sites",
    ],
    nextDeparture: "On request",
  },

  {
    id: 2,
    image: "/assets/packages/Oman/1.webp",
    category: "Middle East",
    categoryColor: "bg-orange-500",
    price: "1,822",
    title: "Habibi Tour",
    location: "Muscat – Muscat",
    duration: "8 Days / 7 Nights",
    stay: {
      name: "Hotels in Muscat & Oman",
      room: "Standard accommodation",
    },
    packages: [
      "Accommodation included",
      "Transport included",
      "Guided sightseeing",
      "Airport transfers",
      "Visa guidance (if required)",
      "Itinerary activities",
    ],
    experice: [
      "Muscat city tour",
      "Desert landscapes",
      "Local markets",
      "Cultural exploration",
    ],
    nextDeparture: "On request",
  },

  {
    id: 3,
    image: "/assets/packages/Malaysia/1.webp",
    category: "Asia",
    categoryColor: "bg-blue-500",
    price: "1,170",
    title: "Kuala Lumpur to Penang & Taman Negara",
    location: "Malaysia",
    duration: "8 Days / 7 Nights",
    stay: {
      name: "Hotels Included",
      room: "Standard hotels",
    },
    packages: [
      "Private transfers",
      "English-speaking guide",
      "7 breakfasts",
      "4 lunches",
      "2 dinners",
      "Entrance fees included",
    ],
    experice: [
      "Kuala Lumpur city",
      "Penang heritage",
      "Taman Negara jungle",
      "Rainforest trekking",
    ],
    nextDeparture: "Guaranteed departure",
  },

  {
    id: 4,
    image: "/assets/packages/Bali/1.webp",
    category: "Asia",
    categoryColor: "bg-pink-500",
    price: "1,044",
    title: "Bali Private Adventure",
    location: "Indonesia",
    duration: "7 Days / 6 Nights",
    stay: {
      name: "Munduk / Pemuteran / Sidemen",
      room: "Boutique hotels",
    },
    packages: [
      "Private tour",
      "French-speaking guide (or English)",
      "6 breakfasts",
      "5 lunches",
      "Transport included",
      "Entrance fees included",
    ],
    experice: [
      "Ubud culture",
      "Temples visit",
      "Rice terraces",
      "Beach relaxation",
    ],
    nextDeparture: "On request",
  },

  {
    id: 5,
    image: "/assets/packages/Thailand/1.webp",
    category: "Asia",
    categoryColor: "bg-yellow-500",
    price: "1,069",
    title: "Smile of Thailand",
    location: "Bangkok – Bangkok",
    duration: "7 Days / 6 Nights",
    stay: {
      name: "Hotels + Sleeper Train",
      room: "Standard accommodation",
    },
    packages: [
      "Private tour",
      "French-speaking guide",
      "6 breakfasts",
      "5 lunches",
      "5 dinners",
      "Sleeper train included",
    ],
    experice: [
      "Bangkok temples",
      "Floating markets",
      "Night markets",
      "Thai culture",
    ],
    nextDeparture: "On request",
  },

  {
    id: 6,
    image: "/assets/packages/Japan/1.webp",
    category: "Far East",
    categoryColor: "bg-red-500",
    price: "2,714",
    title: "Authentic Japan",
    location: "Osaka – Tokyo",
    duration: "10 Days / 9 Nights",
    stay: {
      name: "Hotels in Osaka, Kyoto & Tokyo",
      room: "Comfort hotels",
    },
    packages: [
      "French-speaking guide",
      "9 breakfasts",
      "2 lunches",
      "1 dinner",
      "Public transport included",
      "Entrance fees included",
    ],
    experice: [
      "Osaka culture",
      "Kyoto temples",
      "Tokyo city tour",
      "Japanese traditions",
    ],
    nextDeparture: "Guaranteed departure",
  },

  {
    id: 7,
    image: "/assets/packages/Maldives/1.webp",
    category: "Island",
    categoryColor: "bg-cyan-500",
    price: "On Request",
    title: "Dubai & Maldives",
    location: "Maldives",
    duration: "11 Days / 10 Nights",
    stay: {
      name: "Luxury Resorts",
      room: "Overwater Villas",
    },
    packages: [
      "Dubai stay",
      "Maldives resort stay",
      "Transfers included",
      "Luxury accommodation",
    ],
    experice: [
      "Overwater villas",
      "Snorkeling",
      "Island relaxation",
      "Luxury experience",
    ],
    nextDeparture: "On request",
  },

  {
    id: 8,
    image: "/assets/packages/Seychelles/1.webp",
    category: "Island",
    categoryColor: "bg-cyan-500",
    price: "On Request",
    title: "Dubai & Seychelles",
    location: "Seychelles",
    duration: "12 Days / 11 Nights",
    stay: {
      name: "Praslin & Mahé Resorts",
      room: "Luxury stays",
    },
    packages: [
      "Dubai stay",
      "Seychelles stay",
      "Transfers included",
      "Sightseeing included",
    ],
    experice: [
      "Island hopping",
      "Beaches",
      "Nature trails",
      "Relaxation",
    ],
    nextDeparture: "On request",
  },

  {
    id: 9,
    image: "/assets/packages/Canada/1.webp",
    category: "North America",
    categoryColor: "bg-purple-500",
    price: "764",
    title: "American Gateway Reverse",
    location: "USA & Canada",
    duration: "4 Days / 3 Nights",
    stay: {
      name: "Budget hotels",
      room: "Simple accommodation",
    },
    packages: [
      "Dutch-speaking guide",
      "Coach transport",
      "3 breakfasts",
      "Entrance fees included",
      "Group tour",
    ],
    experice: [
      "New York",
      "Niagara Falls",
      "City sightseeing",
      "Group travel",
    ],
    nextDeparture: "Guaranteed departure",
  },

  {
    id: 10,
    image: "/assets/packages/USA/2.webp",
    category: "North America",
    categoryColor: "bg-blue-500",
    price: "922",
    title: "American Triangle",
    location: "USA",
    duration: "5 Days / 4 Nights",
    stay: {
      name: "Hotels included",
      room: "Standard hotels",
    },
    packages: [
      "Dutch-speaking guide",
      "Motor coach transport",
      "4 breakfasts",
      "Entrance fees included",
      "Group tour",
    ],
    experice: [
      "New York",
      "Washington",
      "Niagara Falls",
      "City tours",
    ],
    nextDeparture: "On request",
  },

  {
    id: 11,
    image: "/assets/packages/Australia/1.webp",
    category: "Oceania",
    categoryColor: "bg-indigo-500",
    price: "Custom",
    title: "Australia Self Drive",
    location: "Australia",
    duration: "14 Days / 13 Nights",
    stay: {
      name: "Self arranged hotels",
      room: "Custom stay",
    },
    packages: [
      "Self drive tour",
      "Flexible itinerary",
      "Hotel choice freedom",
      "Add/remove attractions",
    ],
    experice: [
      "Melbourne",
      "Sydney",
      "Road trip",
      "Adventure travel",
    ],
    nextDeparture: "Any time",
  },

  {
    id: 12,
    image: "/assets/packages/Brazil/1.webp",
    category: "South America",
    categoryColor: "bg-green-600",
    price: "2,358",
    title: "Experience Argentina",
    location: "Argentina",
    duration: "9 Days / 8 Nights",
    stay: {
      name: "Hotels included",
      room: "Comfort accommodation",
    },
    packages: [
      "French-speaking tour",
      "8 breakfasts",
      "5 lunches",
      "3 dinners",
      "Domestic flights not included",
    ],
    experice: [
      "Buenos Aires",
      "Cultural tours",
      "Local guides",
      "South America experience",
    ],
    nextDeparture: "Guaranteed departure",
  },
  

  {
    id: 13,
    image: "/assets/packages/Columbia/1.webp",
    category: "South America",
    categoryColor: "bg-yellow-600",
    price: "1,718",
    title: "Experience Colombia",
    location: "Colombia",
    duration: "9 Days / 8 Nights",
    stay: {
      name: "Hotels included",
      room: "Comfort stay",
    },
    packages: [
      "French-speaking tour",
      "8 breakfasts",
      "5 lunches",
      "7 dinners",
      "Entrance fees included",
    ],
    experice: [
      "Bogotá",
      "Cartagena",
      "Cultural experience",
      "Group travel",
    ],
    nextDeparture: "Guaranteed departure",
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

  const handleBooking = (item: typeof packages[0]) => {
    const phoneNumber = "31104857673";
    
    const rawMessage = `Hello, I am interested in booking a package. Here are the details:

🌟 *Package Name:* ${item.title}
📍 *Location:* ${item.location}
🕒 *Duration:* ${item.duration}
💶 *Price:* €${item.price} per person
🛫 *Next Departure:* ${item.nextDeparture}

Please provide me with more details regarding availability and booking requirements. Thank you!`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)] z-0"></div>

      <div className="absolute inset-0 bg-white/35 z-0"></div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPackages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300 flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={item.image}
                  className="h-52 w-full object-cover"
                  alt={item.title}
                />

                {/* Category Badge Removed */}

                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-xl shadow text-[#0F91D5] font-semibold text-sm">
                  €{item.price}
                  <div className="text-[10px] text-gray-400">per person</div>
                </div>
                <div className="absolute bottom-0 bg-white rounded-md left-2 p-1 text-xs text-gray-500 mb-2">
                  ⭐ 4.8 (365)
                </div>
              </div>

              <div className="p-4 text-left flex flex-col flex-grow">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>

                <p className="text-xs text-gray-500 mb-3">
                  📍 {item.location} • 🕒 {item.duration}
                </p>

                <div className="bg-[#F8F9FA] p-5 rounded-lg text-xs mb-3">
                  <div className="flex gap-1">
                    <Hotel className="text-[#058BD0] shrink-0" />
                    <div>
                      <h2 className="font-bold flex items-center flex-wrap">
                        {item.stay.name}{" "}
                        <span className="flex ml-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} className="fill-yellow-400 text-yellow-400 size-4" />
                          ))}
                        </span>
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

                <div className="flex justify-between text-xs mb-4 mt-auto">
                  <span className="flex items-center">
                    <PlaneTakeoff className="mr-2 size-4" />
                    Next Departure:
                  </span>
                  <span className="font-medium">{item.nextDeparture}</span>
                </div>

                <button 
                  onClick={() => handleBooking(item)}
                  className="w-full bg-[#0F91D5] font-bold text-white py-2.5 rounded-lg text-sm hover:bg-blue-700 transition mt-2"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center flex-wrap mt-12 gap-3 text-sm font-medium">
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