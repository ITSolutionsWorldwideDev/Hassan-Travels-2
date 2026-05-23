"use client";

import { useEffect, useState } from "react";

type Props = {
  bgImage?: string; // optional
};

const Testimonials = ({ bgImage }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-8 md:px-16 text-center overflow-hidden">
      {/* ✅ Background Image */}
      {bgImage && (
        <img
          src={bgImage}
          loading="lazy"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
      )}

      {/* ✅ Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F91D5] mb-8 sm:mb-12">
          What Our Customers Say
        </h2>

        {/* ✅ Elfsight Live Reviews Widget Container */}
        <div className="relative">
          
          {isMounted && (
            <div 
              key="elfsight-widget"
              className="elfsight-app-2faf357a-3cbd-419c-a632-7f18e70909bc" 
              data-elfsight-app-lazy 
            />
          )}

          {/* ✋ Solid Shield Layer (Hover Block karne ke liye) */}
          {/* Humne pointer-events-auto lagaya hai taake mouse ka hover is patti par hi block ho jaye, niche na jaye */}
          <div 
            className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[240px] h-[45px] bg-white z-50 pointer-events-auto cursor-default" 
          />

        </div>
      </div>
    </section>
  );
};

export default Testimonials;