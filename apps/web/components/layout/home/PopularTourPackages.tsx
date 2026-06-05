"use client";
import Image from "next/image";
import { useState } from "react";

// POPULAR PACKAGES (6 unique destinations)
const popularPackages = [
  {
    img: "dubai.webp",
    name: "Pakistan",
    country: "",
    price: "€ 1,650",
    description: "Experience luxury shopping, ultramodern architecture, and a lively nightlife scene. Perfect for adventurers and leisure seekers.",
  },
  {
    img: "dubai.webp",
    name: "Pakistan Visa",
    country: "",
    price: "€ 1,950",
    description: "The holiest city in Islam, home to the Masjid al-Haram. A spiritual journey of a lifetime.",
  },
  {
    img: "dubai.webp",
    name: "Saudi Visa",
    country: "",
    price: "€ 1,750",
    description: "Where East meets West. Explore historic mosques, bustling bazaars, and delicious cuisine.",
  },
  {
    img: "dubai.webp",
    name: "Umrah Package",
    country: "",
    price: "€ 2,250",
    description: "With years of experience, we offer customized Umrah packages and excellent customer support and guidance.",
  },
  {
    img: "dubai.webp",
    name: "India",
    country: "",
    price: "€ 1,850",
    description: "The second holiest city in Islam, known for the Prophet's Mosque and peaceful atmosphere.",
  },
  {
    img: "dubai.webp",
    name: "E-Sim",
    country: "",
    price: "€ 2,150",
    description: "Modern skyline, Packages diversity, and incredible shopping experiences.",
  },
];

// Destination PACKAGES
const DestinationPackages = [
  {
    img: "dubai.webp",
    name: "Orlando",
    country: "USA",
    price: "€ 2,450",
    description: "Theme park capital of the world! Walt Disney World, Universal Studios, and endless Destination fun.",
  },
  {
    img: "dubai.webp",
    name: "Paris",
    country: "France",
    price: "€ 1,890",
    description: "Disneyland Paris, Eiffel Tower, and Destination-friendly museums. A magical European escape.",
  },
  {
    img: "dubai.webp",
    name: "London",
    country: "UK",
    price: "€ 1,750",
    description: "Natural History Museum, London Eye, Harry Potter Studio. Perfect for curious young minds.",
  },
  {
    img: "dubai.webp",
    name: "Rome",
    country: "Italy",
    price: "€ 1,950",
    description: "Gladiator school, Colosseum, and delicious gelato. An educational adventure for all ages.",
  },
  {
    img: "dubai.webp",
    name: "Amsterdam",
    country: "Netherlands",
    price: "€ 850",
    description: "Nemo Science Museum, Artis Zoo, canal cruises. Close to home but full of wonder.",
  },
  {
    img: "dubai.webp",
    name: "Barcelona",
    country: "Spain",
    price: "€ 1,590",
    description: "Barcelona Aquarium, Park Güell, and sandy beaches. Sun and fun for the whole Destination.",
  },
];

// Umrah PACKAGES
const UmrahPackages = [
  {
    img: "dubai.webp",
    name: "Maldives",
    country: "Maldives",
    price: "€ 2,990",
    description: "Overwater villas, crystal clear lagoons, and sunset cruises. Ultimate romantic escape.",
  },
  {
    img: "dubai.webp",
    name: "Santorini",
    country: "Greece",
    price: "€ 2,150",
    description: "White-washed buildings, breathtaking caldera views, and magical sunsets.",
  },
  {
    img: "dubai.webp",
    name: "Bali",
    country: "Indonesia",
    price: "€ 2,390",
    description: "Rice terraces, spiritual retreats, and luxury resorts. Perfect for Umrahers.",
  },
  {
    img: "dubai.webp",
    name: "Venice",
    country: "Italy",
    price: "€ 1,890",
    description: "Gondola rides, romantic canals, and exquisite Italian cuisine.",
  },
  {
    img: "dubai.webp",
    name: "Mauritius",
    country: "Mauritius",
    price: "€ 2,490",
    description: "Turquoise waters, white sandy beaches, and luxury overwater bungalows.",
  },
  {
    img: "dubai.webp",
    name: "Seychelles",
    country: "Seychelles",
    price: "€ 2,790",
    description: "Granite boulders, pristine beaches, and ultimate privacy for two.",
  },
];

// Visa PACKAGES
const VisaPackages = [
  {
    img: "dubai.webp",
    name: "Ibiza",
    country: "Spain",
    price: "€ 1,450",
    description: "Beautiful beaches, vibrant nightlife, and stunning sunsets. Perfect Visa getaway.",
  },
  {
    img: "dubai.webp",
    name: "Cancun",
    country: "Mexico",
    price: "€ 2,350",
    description: "White sand beaches, turquoise waters, and ancient Mayan ruins.",
  },
  {
    img: "dubai.webp",
    name: "Phuket",
    country: "Thailand",
    price: "€ 1,950",
    description: "Tropical paradise with crystal waters, limestone cliffs, and vibrant culture.",
  },
  {
    img: "dubai.webp",
    name: "Crete",
    country: "Greece",
    price: "€ 1,290",
    description: "Rich history, stunning beaches, and delicious Mediterranean cuisine.",
  },
  {
    img: "dubai.webp",
    name: "Algarve",
    country: "Portugal",
    price: "€ 1,150",
    description: "Golden cliffs, hidden coves, and year-round sunshine.",
  },
  {
    img: "dubai.webp",
    name: "Sicily",
    country: "Italy",
    price: "€ 1,390",
    description: "Volcanoes, ancient ruins, and authentic Italian coastal charm.",
  },
];

// Packages PACKAGES
const PackagesPackages = [
  {
    img: "dubai.webp",
    name: "Kyoto",
    country: "Japan",
    price: "€ 2,650",
    description: "Ancient temples, traditional tea ceremonies, and beautiful geisha districts.",
  },
  {
    img: "dubai.webp",
    name: "Cairo",
    country: "Egypt",
    price: "€ 1,850",
    description: "Pyramids of Giza, Egyptian Museum, and rich pharaonic history.",
  },
  {
    img: "dubai.webp",
    name: "Vienna",
    country: "Austria",
    price: "€ 1,250",
    description: "Imperial palaces, classical music, and world-class museums.",
  },
  {
    img: "dubai.webp",
    name: "Prague",
    country: "Czech Republic",
    price: "€ 1,150",
    description: "Fairytale architecture, medieval charm, and rich Bohemian culture.",
  },
  {
    img: "dubai.webp",
    name: "Delhi",
    country: "India",
    price: "€ 1,750",
    description: "Historic monuments, bustling bazaars, and diverse spiritual heritage.",
  },
  {
    img: "dubai.webp",
    name: "Marrakech",
    country: "Morocco",
    price: "€ 1,450",
    description: "Vibrant souks, stunning palaces, and authentic Moroccan traditions.",
  },
];

type PackageType = {
  img: string;
  name: string;
  country: string;
  price: string;
  description: string;
};

const PopularTourPackages = () => {
  const [activeCategory, setActiveCategory] = useState<"popular" | "Destination" | "Umrah" | "Visa" | "Packages">("popular");
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);

  const getPackages = () => {
    switch (activeCategory) {
      case "Destination":
        return DestinationPackages;
      case "Umrah":
        return UmrahPackages;
      case "Visa":
        return VisaPackages;
      case "Packages":
        return PackagesPackages;
      default:
        return popularPackages;
    }
  };

  const currentPackages = getPackages();

  return (
    <>
      <section className="relative pb-8 sm:pb-12 pt-11 sm:pt-17 px-4 sm:px-8 md:px-16 overflow-hidden">
        {/* BACKGROUND IMAGE WITH LOW OPACITY */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
          style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
        />

        {/* LINEAR GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.3)] to-[rgba(85,178,218,0.4)] z-0" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10">
          {/* TITLE */}
          <h2
            id="popular-tour-packages"
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            <span className="text-[#0F91D5]">Our Most</span>{" "}
            <span className="text-black">Popular Services</span>
          </h2>

          <p className="text-gray-500 mb-6 w-full max-w-none lg:max-w-7xl whitespace-normal text-sm sm:text-base">
            Embark on unforgettable journeys to popular destinations such as Makkah, Madinah, Dubai, and more with our exclusive tour packages.
          </p>

          {/* CATEGORY TABS - Popular, Destination, Umrah, Visa, Packages */}
          <div className="flex flex-wrap gap-3 mb-8 border-b border-gray-200 pb-3">
            <button
              onClick={() => setActiveCategory("popular")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "popular"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Popular
            </button>
            <button
              onClick={() => setActiveCategory("Destination")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "Destination"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Destination
            </button>
            <button
              onClick={() => setActiveCategory("Umrah")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "Umrah"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Umrah
            </button>
            <button
              onClick={() => setActiveCategory("Visa")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "Visa"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Visa
            </button>
            <button
              onClick={() => setActiveCategory("Packages")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "Packages"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Packages
            </button>
          </div>

          {/* CARDS GRID - EXACT SAME SIZE AND LAYOUT AS ORIGINAL - NO CHANGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPackages.map((item, i) => (
              <article
                key={i}
                onClick={() => setSelectedPackage(item)}
                className="group flex bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer"
              >
                {/* IMAGE SIDE */}
                <div className="w-1/2 h-42.5 overflow-hidden">
                  <Image
                    src={`/assets/home/${item.img}`}
                    alt={`${item.name} - ${item.country} tour package`}
                    width={400}
                    height={170}
                    priority={i < 2}
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
                    <p className="text-[#0F91D5] text-xl font-bold">
                      {item.price}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL - opens when clicking on any card */}
      {selectedPackage && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-48 w-full">
              <Image
                src={`/assets/home/${selectedPackage.img}`}
                alt={selectedPackage.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedPackage.name}
                  </h3>
                  <p className="text-gray-500 mt-1">{selectedPackage.country}</p>
                </div>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 leading-relaxed">
                  {selectedPackage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Retour vanaf</p>
                <p className="text-[#0F91D5] text-2xl font-bold">
                  {selectedPackage.price}
                </p>
              </div>

              <button
                onClick={() => setSelectedPackage(null)}
                className="mt-6 w-full bg-[#0F91D5] text-white py-3 rounded-xl font-semibold hover:bg-[#0c7ab3] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularTourPackages;