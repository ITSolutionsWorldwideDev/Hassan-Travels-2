import React from "react";
import Image from "next/image";

const CommonHeader = ({
  heading,
  desc,
}: {
  heading: string;
  desc?: string;
}) => {
  return (
    // max-w-[1920px] aur mx-auto hata diya taaki background har screen size par konon tak jaye
    <section className="relative w-full min-h-87.25 py-20 md:py-24 px-4 overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND IMAGE - Handled with strict negative z-index stacking */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Image
          src="/assets/bgimage/bg.webp"
          alt="Header Background"
          fill
          priority
          className="object-cover opacity-60" 
        />
        {/* Halki si overlay taaki text readable rahe aur image white out na ho */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      </div>

      {/* CONTENT - Higher z-index to stay on top of image */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        {/* HEADING */}
        <h1 className="mt-10 text-4xl md:text-4xl font-bold leading-tight text-black whitespace-pre-line">
          {heading}
        </h1>

        {/* DESCRIPTION */}
        {desc && (
          <p className="mt-5 text-gray-700 text-sm md:text-lg max-w-3xl mx-auto">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
};

export default CommonHeader;