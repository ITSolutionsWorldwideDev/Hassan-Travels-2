import Image from "next/image";

const airlines = [
  { src: "/assets/home/partners/p1.webp", alt: "Partner 1" },
  { src: "/assets/home/partners/p2.webp", alt: "Partner 2" },
  { src: "/assets/home/partners/p3.webp", alt: "Partner 3" },
  { src: "/assets/home/partners/p4.webp", alt: "Partner 4" },
  { src: "/assets/home/partners/p5.webp", alt: "Partner 5" },
  { src: "/assets/home/partners/p6.svg", alt: "Partner 6" },
  { src: "/assets/home/partners/p7.webp", alt: "Partner 7" },
  { src: "/assets/home/partners/p8.webp", alt: "Partner 8" },
  { src: "/assets/home/partners/p9.webp", alt: "Partner 9" },
  { src: "/assets/home/partners/p10.webp", alt: "Partner 10" },
  { src: "/assets/home/partners/p11.webp", alt: "Partner 11" },
  { src: "/assets/home/partners/p12.webp", alt: "Partner 12" },
  { src: "/assets/home/partners/p13.webp", alt: "Partner 13" },
  { src: "/assets/home/partners/p14.webp", alt: "Partner 14" },
  { src: "/assets/home/partners/p15.webp", alt: "Partner 15" },
  { src: "/assets/home/partners/p16.webp", alt: "Partner 16" },
  { src: "/assets/home/partners/p17.webp", alt: "Partner 17" },
  { src: "/assets/home/partners/p18.webp", alt: "Partner 18" },
  { src: "/assets/home/partners/p19.webp", alt: "Partner 19" },
  { src: "/assets/home/partners/p20.webp", alt: "Partner 20" },
  { src: "/assets/home/partners/p21.webp", alt: "Partner 21" },
  { src: "/assets/home/partners/p22.webp", alt: "Partner 22" },
  { src: "/assets/home/partners/p23.webp", alt: "Partner 23" },
  { src: "/assets/home/partners/p24.webp", alt: "Partner 24" },
  { src: "/assets/home/partners/p25.webp", alt: "Partner 25" },
  { src: "/assets/home/partners/p26.webp", alt: "Partner 26" },
  { src: "/assets/home/partners/p27.webp", alt: "Partner 27" },
];

export default function AirlineSlider() {
  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden">

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