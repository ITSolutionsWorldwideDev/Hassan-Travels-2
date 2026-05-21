import React from "react";
import HeadingAndDesc from "./HeadingAndDesc";

const BlueBgHeadAndDesc = ({ head, desc, btnTxt }: { head: string; desc: string; btnTxt: string }) => {
  return (
    // w-full aur mb-0 se ye full screen stretch hoga aur footer se attach ho jayega
    <div className="mt-6 sm:mt-10 w-full mb-0">
      
      {/* 
        🔥 FULL SCREEN FLAT CARD 
        Saari rounded classes hata di hain taaki corners bilkul flat (konon tak) rahein.
      */}
      <div className="text-white bg-[#0F91D5] shadow-2xl px-6 py-12 md:py-16 text-center w-full">
        
        {/* Content Wrapper - Text ko center me clean rakhne ke liye */}
        <div className="max-w-4xl mx-auto px-4">
          {/* HEADING + DESC */}
          <HeadingAndDesc
            head={head}
            desc={desc}
          />

          {/* BUTTON */}
          <button className="mt-6 bg-white text-[#0f91d5] font-semibold px-8 py-3.5 rounded-2xl shadow-lg hover:bg-gray-100 transition-all active:scale-95">
            {btnTxt}
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlueBgHeadAndDesc;