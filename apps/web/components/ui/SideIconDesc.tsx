import React from "react";
import Image from "next/image";
interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface SideIconDescProps {
  data: { head?: string | React.ReactNode; details?: string; data: Props[] };
}

const SideIconDesc = ({ data }: SideIconDescProps) => {
  return (
    <section
      className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat relative container mx-auto"
      style={{ backgroundImage: "url('/images/tour.jpg')" }}
    >
      <div className=" text-center">
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold">{data.head}</h2>

        <p className="text-gray-600 mt-2 mb-12 px-2">{data.details}</p>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 sm:gap-8 px-0 sm:px-4 md:px-8">
        {data.data.map((item, i) => (
          <div
            key={i}
            className="bg-white/40 backdrop-blur-lg border  border-white/40 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition"
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
    </section>
    
  );
};

export default SideIconDesc;
