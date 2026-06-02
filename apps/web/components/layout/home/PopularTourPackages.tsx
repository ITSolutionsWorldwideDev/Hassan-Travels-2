"use client";
import Image from "next/image";


const tourPackages = [
  {
    img: "dubai.webp",
    name: "Dubai",
    country: "UAE",
    price: "€ 1,650",
  },
  {
    img: "dubai.webp",
    name: "Dubai",
    country: "UAE",
    price: "€ 1,650",
  },
  {
    img: "dubai.webp",
    name: "Dubai",
    country: "UAE",
    price: "€ 1,650",
  },
  {
    img: "dubai.webp",
    name: "Istanbul",
    country: "Turkey",
    price: "€ 1,750",
  },
  {
    img: "dubai.webp",
    name: "Bangkok",
    country: "Thailand",
    price: "€ 2,250",
  },
  {
    img: "dubai.webp",
    name: "Makkah",
    country: "Saudi Arabia",
    price: "€ 1,950",
  },
];

const PopularTourPackages = () => {
  return (
    <section className="relative pb-8 sm:pb-12 pt-11 sm:pt-17 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* BACKGROUND IMAGE WITH LOW OPACITY */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
      />

      {/* LINEAR GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.3)] to-[rgba(85,178,218,0.4)] z-0" />
.
      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        {/* TITLE */}
        <h2
          id="popular-tour-packages"
          className="text-2xl sm:text-3xl font-bold mb-3"
        >
          <span className="text-[#0F91D5]">Popular Services</span>{" "}
          <span className="text-black">From Netherlands</span>
        </h2>

        <p className="text-gray-500 mb-10 w-full max-w-none lg:max-w-7xl whitespace-normal text-sm sm:text-base">
          Embark on unforgettable journeys to popular destinations such as Makkah, Madinah, Dubai, and more with our exclusive tour packages.
        </p>

        {/* CARDS GRID (Displays exactly 6 clean grids) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tourPackages.map((item, i) => (
            <article
              key={i}
              className="group flex bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl"
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
  );
};

export default PopularTourPackages;