import React from "react";

import { FaPhoneAlt, FaCalendarAlt, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
const IataRecognized = () => {
  return (
    <section className="py-20 px-6 bg-[#1e88c8] text-center text-white">
      {/* TOP BADGE */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs px-4 py-1.5 rounded-full">
          <FaStar className="text-yellow-300" />
          IATA Recognized Partners
        </span>
      </div>

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Seamless Travel <span className="text-[#d4e157]">Extraordinary</span>{" "}
        <br />
        <span className="text-[#d4e157]">Experiences</span>
      </h2>

      {/* DESCRIPTION */}
      <p className="text-white/90 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
        Ready to embark on your next journey? Our travel experts are standing by
        to help you plan the perfect trip tailored to your needs and budget.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        {/* CALL NOW */}
        <button className="bg-[#d4e157] text-black px-6 py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition flex items-center gap-2 justify-center">
          <FaPhoneAlt />
          Call Now
        </button>

        {/* BOOK NOW */}
        <button className="bg-white text-[#1e88c8] px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition flex items-center gap-2 justify-center">
          <FaCalendarAlt />
          Book Now
        </button>
      </div>

      {/* CONTACT INFO */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-white/90 text-xs">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          +31 104857673
        </div>

        <div className="flex items-center gap-2">
          <MdEmail />
          info@hassaantravel.nl
        </div>

        <div className="flex items-center gap-2">
          <BsClockFill />
          Mon-Sat 09:00 – 18:00
        </div>
      </div>
    </section>
  );
};

export default IataRecognized;
