import React from "react";
import HeadingAndDesc from "./HeadingAndDesc";

const BlueBgHeadAndDesc = ({
  head,
  desc,
  btnTxt,
}: {
  head: string;
  desc: string;
  btnTxt: string;
}) => {
  return (
    <div className="mt-6 sm:mt-10 w-full mb-0">

      <div className="text-white bg-[#0F91D5] shadow-2xl px-6 py-12 md:py-16 text-center w-full">

        <div className="max-w-4xl mx-auto px-4">

          <HeadingAndDesc
            head={head}
            desc={desc}
          />

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/31104857673?text=Hello%20Hassaan%20Travel,%20I%20want%20to%20book%20a%20flight"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-white text-[#0f91d5] font-semibold px-8 py-3.5 rounded-2xl shadow-lg hover:bg-gray-100 transition-all active:scale-95"
          >
            {btnTxt}
          </a>

        </div>

      </div>

    </div>
  );
};

export default BlueBgHeadAndDesc;