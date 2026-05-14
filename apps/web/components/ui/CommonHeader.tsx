import React from "react";

const CommonHeader = ({
  heading,
  desc,
}: {
  heading: string;
  desc?: string;
}) => {
  return (
    <section className="relative py-20 md:py-24 px-4 overflow-hidden">
      {/* BACKGROUND IMAGE (light + soft) */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-125 contrast-90 saturate-75"
        style={{ backgroundImage: "url('/assets/umrah.webp')" }}
      ></div>

      {/* SOFT BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[#dff4fb]/40"></div>

      {/* TOP GRADIENT (sky feel) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#dff4fb]/60 via-[#dff4fb]/30 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* HEADING */}
        <h1 className="mt-10 text-4xl md:text-4xl font-bold leading-tight text-black">
          {heading}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 text-gray-700 text-sm md:text-lg max-w-3xl mx-auto">
          {desc}
        </p>

        {/* BUTTONS */}
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold">
              Apply for Your Visa Online
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold">
              Explore Our Visa Services
            </button>
          </div> */}
      </div>
    </section>
  );
};

export default CommonHeader;
