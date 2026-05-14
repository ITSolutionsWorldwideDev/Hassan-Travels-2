import Image from "next/image";

const airlines = [
  {
    src: "/assets/home/etihad.webp",
    alt: "Etihad Airways",
  },
  {
    src: "/assets/home/qatar.webp",
    alt: "Qatar Airways",
  },
  {
    src: "/assets/home/pia.webp",
    alt: "PIA",
  },
  {
    src: "/assets/home/emirates.webp",
    alt: "Emirates",
  },
  {
    src: "/assets/home/saudia.webp",
    alt: "Saudia",
  },
];

export default function AirlineSlider() {
  return (
    <div className="mb-5 opacity-90 max-w-6xl mx-auto">
      <p className="flex justify-center mb-8 font-bold">
        Our Services Partners
      </p>
      <div className="mt-16 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll items-center">
            {airlines.map((airline, i) => (
              <Image
                key={i}
                src={airline.src}
                alt={airline.alt}
                width={200}
                height={100}
                className="h-14 sm:h-16 w-auto object-contain mx-16"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
