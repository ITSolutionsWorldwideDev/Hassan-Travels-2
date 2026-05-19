import Image, { type ImageProps } from "next/image";
import { Plane, Bed, ScrollText, Headset, Award, Sparkles } from "lucide-react";
import { MdOutlineSupportAgent } from "react-icons/md";

import Testimonials from "./Testimonials";
import SideIconDesc from "./SideIconDesc";
import BookingSearchForm from "../layout/home/BookingSearchForm";
import PopularTourPackages from "../layout/home/PopularTourPackages";
import SimpleSlider from "./SimpleSlider";
import LuxurayAccommodation from "../layout/home/LuxurayAccommodation";
import CenterIconHeadingDesc from "./CenterIconHeadingDesc";
import Map from "./Map";

const visaSolution = [
  {
    title: "Flight Booking",
    desc: "Book affordable flights with flexible options for individuals and families.",
    icon: <Plane />,
  },
  {
    title: "Hotel Reservations",
    desc: "Comfortable accommodation in Makkah, Madinah and worldwide destinations.",
    icon: <Bed />,
  },
  {
    title: "Visa Processing",
    desc: "Fast and reliable visa services ensuring smooth approval for travelers.",
    icon: <ScrollText />,
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock customer support for all your travel needs.",
    icon: <MdOutlineSupportAgent />,
  },
];



export default function HomeMain() {
  return (
    <main className="w-full text-gray-800">
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white overflow-hidden min-h-150 md:min-h-170 pb-16"
        aria-label="Hero Section"
      >
        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-225 mx-auto px-4 pt-24 md:pt-28">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-5 text-xs sm:text-sm">
            <Image
              src="/assets/home/iata.webp"
              alt="IATA Authorized Travel Agency Badge"
              width={20}
              height={20}
              priority
              className="h-4 w-auto object-contain"
            />
            <span>IATA AUTHORIZED • 17+ YEARS EXCELLENCE</span>
          </div>

          {/* MAIN SEO HEADING */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] lg:whitespace-nowrap break-words">
  Fast Tickets. Smooth <span className="text-blue-400">Journeys</span>
</h1>

<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-400 mt-1 lg:whitespace-nowrap break-words">
  From Booking to Boarding
</h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-gray-200 text-sm md:text-lg leading-snug">
            Experience seamless, luxury travel with expert visa processing,
            bespoke Umrah packages,
          </p>

          <p className="text-gray-200 text-sm md:text-lg leading-snug">
            and personalized guidance. Trusted by 10,000+ discerning travelers.
          </p>
        </div>

        {/* SEARCH */}
        <BookingSearchForm />
      </section>

      {/* POPULAR TOUR PACKAGES */}
      <PopularTourPackages />

      {/* EXPERT VISA SOLUTIONS */}
      <section aria-label="Expert Visa Solutions">
        <SideIconDesc data={visaSolution} />
      </section>

      {/* PARTNERS  */}
      <SimpleSlider />
      {/* FIVE STAR HOTEL EXPERIENCE */}

      <LuxurayAccommodation />
      {/* IATA / FEATURES STRIP */}
      <CenterIconHeadingDesc />

      {/* CONTACT / MAP SECTION */}
      
<Map/>
      {/* TESTIMONIALS */}
      <section aria-label="Customer Testimonials">
        <Testimonials />
      </section>

     {/* CTA SECTION */}
{/* CTA SECTION */}
<section
  className="relative py-12 sm:py-20 px-4 text-center text-white bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{
    backgroundImage: "url('/assets/home/h3.webp')",
  }}
>
  {/* BLUE OVERLAY (FIGMA COLOR) */}
  <div className="absolute inset-0 bg-[rgba(15,145,213,0.8)]"></div>

  {/* CONTENT */}
  <div className="relative z-10">
    <h2 className="text-2xl sm:text-3xl font-bold mb-3">
      Ready to Start Your Journey?
    </h2>

    <p className="text-sm text-white/80 mb-6 max-w-xl mx-auto px-2">
      Contact us today for a free consultation and discover how we can make
      your travel dreams a reality.
    </p>

    <button className="bg-lime-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold">
      Request a Free Quote →
    </button>
  </div>
</section>
    </main>
  );
}
