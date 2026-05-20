import Link from "next/link";
import { Plane, Binoculars, Phone } from "lucide-react";
import { FaStackExchange } from "react-icons/fa";

export default function MutipleImageRightText({
  imageData,
}: {
  imageData: string[];
}) {
  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden">

  <img
  src="/assets/bgimage/h2.webp"
  loading="lazy"
  alt=""
  className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
/>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">
        {/* LEFT IMAGES */}
        <div className="relative w-full ">
          <img
            src={imageData[0]}
            alt="Your Trusted Visa Partner"
            className="absolute top-0 left-0 w-55 h-62.5 object-cover border-[5px] border-white shadow-md z-30"
          />

          <img
            src={imageData[1]}
            alt="Your Trusted Visa Partner"
            className="absolute top-5 left-50 w-50 h-50 object-cover border-[5px] border-white shadow-md z-20"
          />

          <img
            src={imageData[2]}
            alt="Your Trusted Visa Partner"
            className="absolute top-37.5 left-42.5 w-50 h-55 object-cover border-[5px] border-white shadow-md z-40"
          />

          {/* KAABA */}
          <div className="absolute top-42.5 left-7.5 w-62.5 h-57.5 object-cover border-[5px] border-white shadow-md z-10">
            <img
              src={imageData[3]}
              alt="Your Trusted Visa Partner"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center bottom" }}
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-4xl md:text-3xl font-extrabold leading-tight text-black">
            Why Hassaan Travel is
            Your Trusted Visa Partner
          </h2>

          <p className="mt-5 text-gray-600 text-base leading-relaxed ">
            We're more than just a travel agency; we're your passport to
            extraordinary experiences. Here's why you should choose us:
          </p>

          <div className="mt-8 space-y-2">
            <Feature
              icon=<Plane/>
              text="Assistance in obtaining all necessary documents, including legalisations and translations."
            />

            <Feature
              icon=<FaStackExchange/>
              text="Fast, reliable, and transparent visa services."
            />

            <Feature
              icon=<Binoculars/>
              text="Expertise in handling visa applications for multiple countries."
            />

            <Feature
              icon=<Phone/>
              text="Customer support in multiple languages."
            />
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
function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">
        {icon}
      </div>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
