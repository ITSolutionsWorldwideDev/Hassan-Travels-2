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

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f4f4] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between h-auto md:h-130">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <img
              src="/images/f1.webp"
              alt=""
              className="h-55 md:h-95 w-full object-cover rounded-2xl shadow-lg"
            />

            <div className="flex flex-col gap-4 md:gap-6">
              <img
                src="/images/f2.webp"
                alt=""
                className="h-55 md:h-37.5 w-full object-cover rounded-2xl shadow-lg"
              />
              <img
                src="/images/f3.webp"
                alt=""
                className="h-55 md:h-80 w-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div
            className="
  h-25 w-full md:w-67.5
  border border-blue-400 rounded-lg
  px-6 md:px-10 py-6
  flex items-start justify-center
  bg-white shadow-sm
  mx-auto md:mx-0

  mt-6 md:mt-0

  md:relative 
  md:-top-16 
  lg:-top-20 
  xl:-top-22.5
"
          >
            <div className="flex items-center gap-3 mt-2">
              <img
                src="/images/f4.webp"
                alt="icon"
                className="w-8 h-8 object-contain"
              />
              <span className="text-gray-700 text-sm font-medium">
                Lets Explore!
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FAQ */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 cursor-pointer transition"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-blue-600 font-semibold text-sm md:text-base">
                    {faq.question}
                  </h4>
                  <span className="text-blue-600 text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === index && (
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
