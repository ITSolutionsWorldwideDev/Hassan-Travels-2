"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How can I apply for an Umrah visa from the Netherlands?",
    answer:
      "To apply for an Umrah visa from the Netherlands, you must consult a verified travel agency. Required documents include passport, photos, flight, insurance, accommodation, and vaccination certificate.",
  },
  {
    question: "What documents are required for a Pakistani visa?",
    answer:
      "You need a valid passport, photos, application form, proof of residence, and supporting travel documents.",
  },
  {
    question: "Can I apply for a UAE visa online from the Netherlands?",
    answer:
      "Yes, UAE visas can be applied online through authorized agencies or airlines.",
  },
  {
    question: "How long does it take to get a Saudi visa?",
    answer:
      "Processing time usually takes 3–7 working days depending on application type.",
  },
];

export default function Faqs({
  imagesLinks,
  bgImage,
}: {
  imagesLinks: string[];
  bgImage?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6 mx-auto overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      {bgImage && (
        <img
          src={bgImage}
          loading="lazy"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        />
      )}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-start relative z-10 w-full">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start self-start">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full items-start">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4 md:gap-6 w-full items-start justify-start">

              <img
                src={imagesLinks[0]}
                alt="faq"
                className="h-[220px] md:h-[380px] w-full object-cover rounded-2xl shadow-lg"
              />

              {/* LETS EXPLORE CARD */}
              <div className="h-[100px] w-full border border-blue-400 rounded-lg px-6 md:px-10 py-6 flex items-center justify-center bg-white shadow-sm">
                <div className="flex items-center gap-3">
                  <img
                    src={"/assets/Frame 1000009700.webp"}
                    alt="icon"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                    Lets Explore!
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4 md:gap-6 w-full items-start justify-start">

              <img
                src={imagesLinks[1]}
                alt="faq"
                className="h-[220px] md:h-[150px] w-full object-cover rounded-2xl shadow-lg"
              />

              <img
                src={imagesLinks[2]}
                alt="faq"
                className="h-[220px] md:h-[320px] w-full object-cover rounded-2xl shadow-lg"
              />

            </div>
          </div>
        </div>

        {/* RIGHT SIDE FAQ */}
        <div className="w-full md:w-1/2 self-start">
          
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="bg-white rounded-xl shadow-md p-5 cursor-pointer transition-all duration-300 flex flex-col"
              >
                
                {/* QUESTION */}
                <div className="flex justify-between items-center">
                  <h4 className="text-blue-600 font-semibold text-sm md:text-base">
                    {faq.question}
                  </h4>
                  <span className="text-blue-600 text-xl font-bold">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* ANSWER (NO LAYOUT JUMP FIX) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}