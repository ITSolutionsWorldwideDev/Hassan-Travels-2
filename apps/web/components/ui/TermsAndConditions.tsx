import React from 'react'
interface Section {
  id: number;
  title: string;
  content: string[];
  list?: string[];
  image?: string;
  note?: string;
  email?: string;
}

interface TermsData {
  header: {
    heading: string;
  };

  hero: {
    title: {
      line1: string;
      highlight: string;
    };

    description: string;
  };

  sections: Section[];
}

const termsData: TermsData = {
  header: {
    heading: "Terms and Conditions",
  },

  hero: {
    title: {
      line1: "Privacy Statement Hassaan",
      highlight: "Travel",
    },

    description:
      "The protection of your personal data is of great importance to Hassaan Travel (hereinafter 'HT'). On this page, we explain how we handle your data. HT's privacy statement has been prepared in accordance with the General Data Protection Regulation (hereinafter 'GDPR') and applies to all individuals who purchase a service or product from HT.",
  },

  sections: [
    {
      id: 1,
      title: "GDPR",
      content: [
        "1.1. All data provided to HT falls under the GDPR.",
      ],
    },

    {
      id: 2,
      title: "Personal Data",
      content: [
        "2.1. HT requests personal data when making a booking. The personal data that HT receives is used solely to provide the service or deliver the relevant travel product. HT only requests personal data that is adequate, relevant, and not excessive. Personal data includes:",
      ],

      list: [
        "Name, address, and residence details",
        "Gender",
        "Date of birth",
        "Phone number",
        "Email address",
        "Payment details",
        "Copy of passport",
      ],

      image: "/assets/terms.webp",
    },

    {
      id: 3,
      title: "Sharing Data with Third Parties",
      content: [
        "3.1. To provide the quality service that HT strives for, it is necessary to share personal data with third parties who deliver the booked services and products. HT engages third parties for these services and products. HT has taken contractual and organizational measures to ensure that personal data is used only for the purposes mentioned above.",
      ],

      note:
        "HT will never share customer personal data with individuals or companies for commercial exploitation.",
    },

    {
      id: 4,
      title: "Access",
      content: [
        "4.1. Customers always have the right to access their personal data.",
      ],
    },

    {
      id: 5,
      title: "Correction",
      content: [
        "5.1. Upon request, HT can modify personal data.",
      ],
    },

    {
      id: 6,
      title: "Deletion",
      content: [
        "6.1. Upon request, HT can delete personal data.",
      ],
    },

    {
      id: 7,
      title: "Retention Period",
      content: [
        "7.1. HT retains personal data for a period of three calendar years from the time of booking. After this, the data is automatically deleted.",
      ],
    },

    {
      id: 8,
      title: "Changes",
      content: [
        "8.1. HT is entitled to modify or update the terms of its privacy statement at any time without obligation to notify users. The customer is always bound by the terms in force at that time.",
      ],
    },

    {
      id: 9,
      title: "Website",
      content: [
        "9.1. If you use our website, the following data is processed: your IP address, browser type and language, time of visit, the website from which you accessed ours, the pages you view, the links you click, and other actions you take. For this, we use cookies.",
      ],
    },

    {
      id: 10,
      title: "Cookies",
      content: [
        "10.1. HT uses cookies on its website. When accepting cookies, you can choose between two settings: 'Functional and analytical cookies' and 'Personalized within and outside the website'.",

        "10.2. You can choose 'No, customize' or 'Yes, that's fine'. 'No, customize' means you choose functional and analytical cookies.",

        "10.3. When you choose 'Yes, that's fine', it means you choose personalized cookies both within and outside the website.",
      ],
    },

    {
      id: 11,
      title: "Sharing Data with Authorities",
      content: [
        "11.1. HT is legally required in some cases to share your data with third parties. This may include providing data to authorized authorities for investigation and criminal proceedings.",
      ],
    },

    {
      id: 12,
      title: "Contact",
      content: [
        "12.1. Do you have any questions and/or comments about our privacy statement?",
      ],

      email: "info@hassaantravel.nl",
    },
  ],
};
const TermsAndConditions = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden min-h-125 flex items-center justify-center w-full">
        {/* BACKGROUND IMAGE OVERLAY */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
        />
        

        {/* CARD */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">
        <h2 className="text-4xl font-bold mb-3">
  Privacy Statement{" "}
  <span className="text-[#0F91D5]">Hassaan</span>
  <br />
  <span className="text-[#0F91D5]">
    {termsData.hero.title.highlight}
  </span>
</h2>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            {termsData.hero.description}
          </p>

          {/* FIRST TWO COLUMN SECTION */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              {termsData.sections.slice(0, 2).map((section: Section) => (
                <div key={section.id} className="mb-6">
                  <h3 className="text-[#0F91D5] font-bold">
                    {section.id}. {section.title}
                  </h3>

                  {section.content.map((item: string, index: number) => (
                    <p
                      key={index}
                      className="text-sm text-gray-700 leading-relaxed mt-2"
                    >
                      {item}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="list-disc ml-5 text-sm text-gray-700 mt-2 space-y-1">
                      {section.list.map(
                        (listItem: string, idx: number) => (
                          <li key={idx}>{listItem}</li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* IMAGE */}
            <div className="flex justify-center items-start pt-4">
              <img
                src={termsData.sections[1] && termsData.sections[1].image}
                alt="Terms"
                className="w-full max-w-md max-h-90 object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* REST OF THE SECTIONS */}
          <div className="mt-10 space-y-8">
            {termsData.sections
              .slice(2)
              .map((section: Section) => (
                <section key={section.id}>
                  <h3 className="text-[#0F91D5] font-bold text-lg">
                    {section.id}. {section.title}
                  </h3>

                  {section.content.map(
                    (item: string, index: number) => (
                      <p
                        key={index}
                        className="text-sm text-gray-700 leading-relaxed mt-2"
                      >
                        {item}
                      </p>
                    )
                  )}

                  {section.note && (
                    <p className="text-sm text-gray-700 mt-2 italic">
                      {section.note}
                    </p>
                  )}

                  {section.email && (
                    <p className="text-sm text-gray-700 mt-2">
                      Mail ons dan op{" "}
                      <span className="font-semibold text-[#0F91D5] underline cursor-pointer">
                        {section.email}
                      </span>
                    </p>
                  )}
                </section>
              ))}
          </div>
        </div>
      </section>
  )
}

export default TermsAndConditions