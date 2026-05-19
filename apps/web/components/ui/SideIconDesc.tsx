import React from "react";
import Image from "next/image";
interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface SideIconDescProps {
  data: Props[];
}

const SideIconDesc = ({ data }: SideIconDescProps) => {
  return (
   <section
  className="relative w-full py-12 sm:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(207,234,246,0.6), rgba(85, 178, 218, 0.6)), url('/assets/bgimage/h2.webp')",
  }}
>
  {/* LAZY LOAD BACKGROUND IMAGE */}
  <img
    src="/assets/bgimage/h2.webp"
    alt=""
    loading="lazy"
    className="hidden"
  />
  
  {/* LIGHT OVERLAY (optional but safe) */}
 <div className="absolute inset-0 bg-white/30"></div>

  {/* CONTENT (THIS FIXES YOUR ISSUE) */}
  <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 text-center">

      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl font-bold">
        Expert Visa <span className="text-blue-600">Solutions</span>
      </h2>

      <p className="text-gray-600 mt-2 mb-12 px-2">
        Streamlined processing with guaranteed approval for all destinations
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-0 sm:px-4 md:px-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white/40 backdrop-blur-lg border border-white/40 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition"
          >
            {/* ICON */}
            <div className="w-12 h-12 sm:w-14 sm:h-14  mb-4 flex items-center justify-center rounded-xl bg-blue-500 text-white text-lg sm:text-xl shadow">
              {item.icon}
            </div>

            <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>

            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* PARTNERS */}
      </div>
    </section>
    
  );
};

export default SideIconDesc;
