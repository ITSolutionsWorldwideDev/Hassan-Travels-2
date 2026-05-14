import React from "react";
import Image from "next/image";
import { CircleCheck, NotepadText } from "lucide-react";

const hotelQualities = [
  {
    title: "Premium Hotels Worldwide",
    desc: "Stay at handpicked 5-star hotels worldwide with prime locations and exceptional comfort.",
  },
  {
    title: "Luxury Suites & Personalized Stays",
    desc: "Enjoy spacious suites with personalized services for a seamless stay.",
  },
  {
    title: "Exclusive Deals & Priority Booking",
    desc: "Access exclusive rates, priority bookings, and premium amenities worldwide.",
  },
];
const LuxurayAccommodation = () => {
  return (
    <section
      className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat relative container mx-auto"
      style={{ backgroundImage: "url('/images/hote.jpg')" }}
      aria-labelledby="hotel-experience"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT */}
        <div>
          <div className="flex items-center w-fit  bg-yellow-100 text-yellow-700 text-xs px-4 py-1 rounded-full mb-4">
            <NotepadText className="mr-5" />
            LUXURY ACCOMMODATION
          </div>

          <h2
            id="hotel-experience"
            className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-snug"
          >
            Five-Star Hotel <br /> Experiences
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {hotelQualities.map((item, i) => (
              <article
                key={i}
                className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-md"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center bg-blue-500 text-white rounded-lg">
                  <CircleCheck />
                </div>

                <div>
                  <h3 className="font-semibold  sm:text-base">{item.title}</h3>

                  <p className=" text-gray-500 mt-1">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-first lg:order-last flex justify-end items-center">
          <Image
            src="/assets/home/hotel.webp"
            alt="Luxury five-star hotel experience"
            width={500}
            height={700}
            loading="lazy"
            className="rounded-2xl shadow-lg w-full max-w-md h-130 object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default LuxurayAccommodation;
