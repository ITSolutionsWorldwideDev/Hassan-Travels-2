import React from "react";

const visaOptionsData = {
  heading: {
    text: "UAE Visa Options",
    highlight: "Tailored to Your Needs",
  },
  description:
    "For short-term tourist single-entry visa, it is valid for 30 days and with no extension. The visa processing fee will be 250 AED.",
  cards: [
    {
      title: "Long-term visas for business or family stays.",
      description:
        "The UAE’s Golden Visa is a long-term residence visa which offers the possibility to live, work or study in the UAE. It allows foreign nationals to stay up to 10 years.",
    },
    {
      title: "Transit visas for travelers passing through the UAE",
      description:
        "The UAE Government offers a transit visa to those transiting through UAE airports. A transit visa is valid for 48 or 96 hours.",
    },
    {
      title: "Visit visas for family reunions or business meetings",
      description:
        "The applicant wishing to visit the UAE for either a family reunion or business meeting is granted a single-entry visa without a sponsor in the UAE.",
    },
  ],
  buttonText: "Find the Right UAE Visa for You",
};

const VisaOptions = () => {
  return (
    <section className="py-16 px-6 bg-[#eaf4fb] text-center">
      {/* HEADING */}
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">
          {visaOptionsData.heading.text}{" "}
          <span className="font-bold text-[#0F91D5]">
            {visaOptionsData.heading.highlight}
          </span>
        </h2>

        <p className="text-gray-600 text-sm mt-3 text-center md:whitespace-nowrap">
          {visaOptionsData.description}
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {visaOptionsData.cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-left"
          >
            <h3 className="font-bold text-lg mb-2 ">
              {card.title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-10">
        <button className="bg-[#0F91D5] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md text-sm transition-colors">
          {visaOptionsData.buttonText}
        </button>
      </div>
    </section>
  );
};

export default VisaOptions;