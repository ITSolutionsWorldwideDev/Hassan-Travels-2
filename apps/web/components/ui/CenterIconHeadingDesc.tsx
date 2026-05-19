import React from 'react'
import Image from "next/image";
import { Headset, Award, Sparkles } from 'lucide-react';

interface Props {
  icon?: React.ReactNode;
  img?: string;
  title: string;
  desc: string;
}

const iconsData: Props[] = [
  {
    img: "/assets/iata.webp",
    title: "IATA Certified",
    desc: "Fully Authorized Agency",
  },
  {
    icon: <Headset />,
    title: "Concierge Support",
    desc: "Available 24/7",
  },
  {
    icon: <Award />,
    title: "Award-Winning",
    desc: "15+ Years Excellence",
  },
  {
    icon: <Sparkles />,
    title: "Premium Service",
    desc: "White-Glove Treatment",
  },
];

const CenterIconHeadingDesc = () => {
  return (
    <section
  className="relative w-full py-12 sm:py-20 bg-cover bg-center bg-no-repeat"
 style={{
    backgroundImage:
      "linear-gradient(rgba(77, 193, 243, 0.3), rgba(134, 229, 253, 0.75)), url('/assets/home/h1.webp')",
  }}
>
  {/* Lazy loader trigger */}
  <img
    src="/assets/home/h1.webp"
    alt=""
    loading="lazy"
    className="hidden"
  />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center px-4 sm:px-8 md:px-16">
        
        {iconsData.map((item, i) => (
          <article key={i} className="flex flex-col items-center">

            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-500 rounded-2xl shadow-lg -mt-8 mb-2 sm:mb-3">
              
              {item.img ? (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={36}
                  height={36}
                  priority
                  className="object-contain"
                />
              ) : (
                <div className="text-white">{item.icon}</div>
              )}

            </div>

            <h3 className="font-semibold text-xs sm:text-sm">
              {item.title}
            </h3>

            <p className="text-[11px] sm:text-xs text-gray-600 mt-1">
              {item.desc}
            </p>

          </article>
        ))}

      </div>
    </section>
  )
}

export default CenterIconHeadingDesc;