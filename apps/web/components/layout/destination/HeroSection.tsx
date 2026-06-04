"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillAirplaneFill } from 'react-icons/bs';

// Data array containing country names only
const destinations = [
  {
    name: "Pakistan",
    country: "Pakistan",
    image: "/assets/destinations/pakistan.webp",
    description: "Beautiful valleys & cultural heritage",
    time: "7h 45m",
    price: "€499",
  },
  {
    name: "Afghanistan",
    country: "Afghanistan",
    image: "/assets/destinations/afghanistan.webp",
    description: "Historic landscapes & breathtaking mountains",
    time: "8h 15m",
    price: "€549",
  },
  {
    name: "Saudi Arabia",
    country: "Saudi Arabia",
    image: "/assets/destinations/makkah.webp",
    description: "Holy pilgrimage destination",
    time: "6h 30m",
    price: "€399",
  },
  {
    name: "India",
    country: "India",
    image: "/assets/destinations/india.webp",
    description: "Vibrant history & incredible architecture",
    time: "8h 00m",
    price: "€429",
  },
  {
    name: "Bangladesh",
    country: "Bangladesh",
    image: "/assets/destinations/ban.webp",
    description: "Lush greenery & rich cultural riverscapes",
    time: "9h 30m",
    price: "€479",
  },
  {
    name: "Irak (Kurdistan)",
    country: "Irak (Kurdistan)",
    image: "/assets/destinations/iraq.webp",
    description: "Ancient citadels & mountainous landscapes",
    time: "5h 45m",
    price: "€379",
  },
  {
    name: "Turkey",
    country: "Turkey",
    image: "/assets/destinations/turkey.webp",
    description: "Where East meets West",
    time: "4h 15m",
    price: "€189",
  },
  {
    name: "Africa",
    country: "Africa",
    image: "/assets/destinations/africa.webp",
    description: "Timeless pyramids & rich ancient history",
    time: "5h 15m",
    price: "€349",
  },
];

const HeroSection = () => {
  // 🔄 State to manage whether all cards are shown or just the first 4
  const [showAll, setShowAll] = useState(false);

  // Determine which cards to render based on the showAll toggle state
  const visibleDestinations = showAll ? destinations : destinations.slice(0, 4);

  // 🛠️ Dynamic WhatsApp Handler for Destinations
  const handleDestinationBooking = (item: typeof destinations[0]) => {
    const phoneNumber = "31104857673"; // +31 104857673 without formatting signs
    
    // WhatsApp Markdown structured layout
    const rawMessage = `Assalam-o-Alaikum, I want to book a flight to this country:

✈️ *Country:* ${item.name}
🕒 *Flight Duration:* ${item.time}
💶 *Starting Price:* ${item.price}

Please let me know about the flight details, ticket availability, and booking options. Thanks!`;

    // Make message URL-safe
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative w-full py-20 px-6 sm:px-12 md:px-16 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/assets/bgimage/h2.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.18]"
        />
      </div>
        
      {/* Content Wrapper */}
      <div className="container mx-auto">
        
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
            Fly to Your{" "}
            <span className="font-bold text-[#0F91D5]">Dream Country</span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Discover the world's most popular countries with unbeatable
            flight prices. Book now and save up to 40% on select routes.
          </p>
        </div>

        {/* Layout Grid - renders 4 or all based on visibleDestinations array length */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleDestinations.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-52">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-4 left-4 text-white">
                  {/* Changed label setup to dynamically reflect Country only */}
                  <h3 className="text-xl font-bold mb-0.5">{item.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-200">
                    <IoLocationSharp size={14} className="text-red-500" />
                    Country
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-4 h-10 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Flight Time</span>
                  <span>Starting from</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <BsFillAirplaneFill
                      size={16}
                      className="text-sky-500 transform rotate-45"
                    />
                    {item.time}
                  </div>

                  <span className="font-bold text-[#0F91D5] text-lg">
                    {item.price}
                  </span>
                </div>

                <hr className="mb-4" />

                {/* ✅ Click Handler Attached */}
                <button 
                  onClick={() => handleDestinationBooking(item)}
                  className="w-full bg-[#0F91D5] text-white py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All / Show Less Action Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="bg-white border border-blue-600 text-[#0F91D5] px-6 py-2 rounded-full font-medium transition hover:bg-blue-50 shadow-sm relative z-10"
          >
            {showAll ? "Show Less Countries ↑" : "Explore All Countries →"}
          </button>
        </div>

      </div>
    </section>
  )
}

export default HeroSection;