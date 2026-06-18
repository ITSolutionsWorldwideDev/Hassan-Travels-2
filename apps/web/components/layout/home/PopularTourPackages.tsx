"use client";
import Image from "next/image";
import { useState } from "react";

// POPULAR PACKAGES (6 unique destinations - now using c1 to c6)
const popularPackages = [
  {
    img: "c7.webp",
    name: "Pakistan",
    country: "",
    price: "€ 685",
    description: "Discover Pakistan's breathtaking landscapes, rich cultural heritage, vibrant cities, and unforgettable travel experiences.",
  },
  {
    img: "cp2.webp",
    name: "Pakistan Visa",
    country: "",
    price: "€ 70",
    description: "Fast and reliable Pakistan visa processing services with expert guidance and hassle-free documentation support.",
  },
  {
    img: "c3.webp",
    name: "Saudi Visa",
    country: "",
    price: "120",
    description: "Get your Saudi visa with a smooth application process, professional assistance, and timely approvals.",
  },
  {
    img: "c4.webp",
    name: "Umrah Package",
    country: "",
    price: "On Request",
    description: "Complete Umrah packages including visa, accommodation, transportation, and dedicated support throughout your journey.",
  },
  {
    img: "c5.webp",
    name: "India",
    country: "",
    price: "€ 545",
    description: "Explore India's diverse culture, historic landmarks, spiritual destinations, and world-famous attractions.",
  },
  {
    img: "c6.webp",
    name: "E-Sim",
    country: "",
    price: "€ 5",
    description: "Stay connected worldwide with affordable eSIM plans offering instant activation and seamless mobile data.",
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

  // Function to generate dynamic WhatsApp URL
  const getWhatsAppLink = (pkg: PackageType) => {
    const phoneNumber = "31104857673";
    const baseMessage = `Hello Hasaan Travel, I would like to learn more about the "${pkg.name}" package`;
    const countryContext = pkg.country ? ` for ${pkg.country}` : "";
    const fullMessage = `${baseMessage}${countryContext} (Price: ${pkg.price}). Please provide more details.`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  };

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
            Everything you need for your next trip in one place from flights and visas to travel packages, tours, and eSIMs. Discover our most popular services today.
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
                    src={item.img.startsWith("c") ? `/assets/tour/${item.img}` : `/assets/home/${item.img}`}
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
                    <p className="text-sm text-gray-500">Round trip from</p>
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
                src={selectedPackage.img.startsWith("c") ? `/assets/tour/${selectedPackage.img}` : `/assets/home/${selectedPackage.img}`}
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
                <p className="text-sm text-gray-500">Round trip from</p>
                <p className="text-[#0F91D5] text-2xl font-bold">
                  {selectedPackage.price}
                </p>
              </div>

              {/* NEW WHATSAPP LEARN MORE BUTTON */}
              <a
                href={getWhatsAppLink(selectedPackage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-[#0F91D5] text-white py-3 rounded-xl font-semibold hover:bg-[#0d80bd] transition-colors text-center shadow-xs"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.452 5.352 0 9.709-4.357 9.712-9.711.002-2.595-1.005-5.034-2.837-6.867-1.833-1.833-4.274-2.842-6.872-2.843-5.358 0-9.713 4.358-9.716 9.713-.001 2.05.535 4.05 1.553 5.81l-1.018 3.719 3.818-1.001zM17.486 14.4c-.3-.149-1.774-.875-2.048-.974-.274-.1-.474-.149-.674.149-.2.3-.774.974-.949 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.496-1.78-1.671-2.08-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.625-.924-2.225-.244-.588-.493-.508-.674-.517-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.375-.275 1.25.375 2.45.425 2.525.05.075 1.225 1.872 2.969 2.623.415.179.738.286.99.366.417.133.796.114 1.096.07.334-.051 1.774-.726 2.024-1.392.25-.666.25-1.238.175-1.358-.075-.12-.275-.195-.575-.346z" />
                </svg>
                Learn More 
              </a>

              <button
                onClick={() => setSelectedPackage(null)}
                className="mt-3 w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
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