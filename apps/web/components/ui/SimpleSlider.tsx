import Image from "next/image";

const airlines = [
  { src: "/assets/home/etihad.webp", alt: "Etihad Airways" },
  { src: "/assets/home/qatar.webp", alt: "Qatar Airways" },
  { src: "/assets/home/pia.webp", alt: "PIA" },
  { src: "/assets/home/emirates.webp", alt: "Emirates" },
  { src: "/assets/home/saudia.webp", alt: "Saudia" },
];

export default function AirlineSlider() {
  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden">

  {/* BACKGROUND WITH LOW OPACITY */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
    style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
  />

 {/* VERY SOFT GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)] z-0"></div>

      {/* LIGHT WASH */}
      <div className="absolute inset-0 bg-white/35 z-0"></div>

      {/* CONTENT CONTAINER */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        
        <p className="flex justify-center mb-8 font-bold text-lg">
          Our Services Partners
        </p>

        <div className="mt-10 overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll items-center">
              {airlines.map((airline, i) => (
                <Image
                  key={i}
                  src={airline.src}
                  alt={airline.alt}
                  width={200}
                  height={100}
                  className="h-14 sm:h-16 w-auto object-contain mx-12"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}