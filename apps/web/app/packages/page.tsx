"use client";

import CustomTravelPackages from "@/components/layout/packages/CustomTravelPackages";
import PopularTourPackages from "@/components/layout/packages/PopularTourPackages";
import CommonHeader from "@/components/ui/CommonHeader";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";

export default function packages() {
  return (
    <>
      {/* HERO SECTION */}
      <CommonHeader
        heading="Pakistani Family & Tousist Visa Services | Hassaan Travel - Simple & Fast Processing"
        desc="Apply online for a Pakistani Family & Tourist visa today! Simple application process, fast approvals, and expert assistance"
      />

      {/* ====== SECTION WRAPPER WITH BG ====== */}
      <PopularTourPackages />

      <section className="relative py-20 px-4 bg-linear-to-b from-[#cfe8f3] to-[#eaf6fb]">
        {/* HEADING */}

        <HeadingAndDesc
          head="Make Your Custom Travel Package"
          desc="Build your perfect journey tailored to your preferences. Choose your destination, travel style, and let us create an unforgettable experience."
        />
        {/* BOX */}
        <CustomTravelPackages />
      </section>

      <section className="relative container mx-auto px-5 mb-5">
        {/* CARD */}
        <div className=" text-white  bg-[#0F91D5] rounded-3xl shadow-2xl px-12 py-16 text-center">
          <HeadingAndDesc
            head="Can't Find What You're Looking For?"
            desc="Our travel experts are ready to create a personalized package just
            for you. Contact us today for a custom quote tailored to your
            preferences and budget."
          />

          {/* BUTTON */}
          <button className="bg-white text-[#0f91d5] font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-gray-100 transition">
            Speak with a Travel Expert
          </button>
        </div>
      </section>
    </>
  );
}
