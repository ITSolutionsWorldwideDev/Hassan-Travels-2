import React from 'react'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillAirplaneFill } from 'react-icons/bs';
const destinations = [
  {
    name: "Makkah",
    country: "Saudi Arabia",
    image: "/assets/destinations/f1.webp",
    description: "Holy pilgrimage destination",
    time: "6h 30m",
    price: "€399",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    image: "/assets/destinations/f1.webp",
    description: "Modern luxury & adventure",
    time: "6h 45m",
    price: "€299",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    image: "/assets/destinations/f1.webp",
    description: "Where East meets West",
    time: "4h 15m",
    price: "€189",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    image: "/assets/destinations/f1.webp",
    description: "Vibrant city of temples",
    time: "11h 45m",
    price: "€459",
  },
];
const HeroSection = () => {
  return (
    <section className="relative py-20 px-6 sm:px-12 md:px-16 bg-[#cfe3ec] container mx-auto">
        
        
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
            Fly to Your{" "}
            <span className="font-bold text-blue-600">Dream Destination</span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Discover the world's most popular destinations with unbeatable
            flight prices. Book now and save up to 40% on select routes.
          </p>
        </div>



        {/* Wider layout with safe side breathing space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 contianer mx-auto">
          {destinations.map((item, index) => (
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
                  <h3 className="text-xl font-bold mb-0.5">{item.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-200">
                    {/* Image matching Red Pin Icon */}
                    <IoLocationSharp size={14} className="text-red-500" />
                    {item.country}
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
                    {/* Image matching Blue Airplane Icon */}
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

                <button className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all">
                  View Flights →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-white border border-blue-600 text-[#0F91D5] px-6 py-2 rounded-full font-medium transition hover:bg-blue-50 shadow-sm">
            Explore All Destinations →
          </button>
        </div>
      </section>
  )
}

export default HeroSection