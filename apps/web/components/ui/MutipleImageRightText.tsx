"use client";
import Link from "next/link";

export default function MutipleImageRightText() {
  return (
    <section
      className="relative py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/assets/umrah/why-bg.webp')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#dff4fb]/85"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGES */}
        <div className="relative w-full h-112.5">
          <img
            src="/assets/umrah/why-1.webp"
            alt=""
            className="absolute top-0 left-0 w-55 h-62.5 object-cover border-[5px] border-white shadow-md z-30"
          />

          <img
            src="/assets/umrah/why-2.webp"
            alt=""
            className="absolute top-5 left-50 w-50 h-50 object-cover border-[5px] border-white shadow-md z-20"
          />

          <img
            src="/assets/umrah/why-3.webp"
            alt=""
            className="absolute top-37.5 left-42.5 w-50 h-55 object-cover border-[5px] border-white shadow-md z-40"
          />

          {/* KAABA */}
          <div className="absolute top-42.5 left-7.5 w-62.5 h-57.5 object-cover border-[5px] border-white shadow-md z-10">
            <img
              src="/assets/umrah/why-4.webp"
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: "center bottom" }}
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            Why Hassaan Travel is <br />
            Your Trusted Visa Partner
          </h2>

          <p className="mt-5 text-gray-600 text-base leading-relaxed max-w-xl">
            We're more than just a travel agency; we're your passport to
            extraordinary experiences. Here's why you should choose us:
          </p>

          <div className="mt-8 space-y-5">
            <Feature
              icon="✈"
              text="Assistance in obtaining all necessary documents, including legalisations and translations."
            />

            <Feature
              icon="⚙"
              text="Fast, reliable, and transparent visa services."
            />

            <Feature
              icon="📄"
              text="Expertise in handling visa applications for multiple countries."
            />

            <Feature icon="☎" text="Customer support in multiple languages." />
          </div>

          <Link href="/contact">
            <button className="mt-10 bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 🔥 Small reusable sub-component */
function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">
        {icon}
      </div>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
