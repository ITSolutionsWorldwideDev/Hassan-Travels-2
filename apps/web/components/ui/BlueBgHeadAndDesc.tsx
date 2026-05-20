import React from "react";
import HeadingAndDesc from "./HeadingAndDesc";
const BlueBgHeadAndDesc = ({head,desc,btnTxt}:{head:string;desc:string;btnTxt:string}) => {
  return (
    <div className="mt-6 sm:mt-10 container mx-auto p-5">
      {/* 🔥 CARD */}
      <div className="text-white bg-[#0F91D5] rounded-3xl shadow-2xl px-8 py-8 text-center">
        {/* HEADING + DESC */}
        <HeadingAndDesc
          head={head}
          desc={desc}
        />

        {/* BUTTON */}
        <button className="mt-4 bg-white text-[#0f91d5] font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-100 transition">
          {btnTxt}
        </button>
      </div>
    </div>
  );
};

export default BlueBgHeadAndDesc;
