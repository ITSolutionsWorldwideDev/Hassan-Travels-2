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
      "De bescherming van uw persoonsgegevens is van groot belang voor Hassaan Travel (hierna 'HT'). Op deze pagina leggen wij u uit, hoe wij omgaan met uw gegevens. Het privacy statement van HT is opgesteld volgens de Algemene Verordening Gegevensbescherming (hierna 'AVG') en is voor alle personen die een dienst of product afnemen van HT.",
  },

  sections: [
    {
      id: 1,
      title: "AVG",
      content: [
        "1.1. Alle gegevens die worden verstrekt aan HT vallen onder de AVG.",
      ],
    },

    {
      id: 2,
      title: "Persoonsgegevens",
      content: [
        "2.1. HT vraagt om persoonsgegevens bij het maken van een boeking. De persoonlijke gegevens die HT ontvangt gebruikt zij uitsluitend om de service te verlenen of het betreffende reisproduct te leveren. HT vraagt om persoonsgegevens die toereikend, ter zake dienend zijn en geen bovenmatige informatie bevatten. Onder persoonsgegevens wordt verstaan:",
      ],

      list: [
        "Naam-, adres- en woongegevens",
        "Geslacht",
        "Geboortedatum",
        "Telefoonnummer",
        "E-mailadres",
        "Betalingsgegevens",
        "Kopie van het paspoort",
      ],

      image: "/assets/terms.webp",
    },

    {
      id: 3,
      title: "Verstrekking van gegevens aan derden",
      content: [
        "3.1. Om de goede service te verlenen waar HT naar streeft, is het noodzakelijk om persoonsgegevens te delen met derden die de geboekte diensten en producten leveren. Door deze diensten en producten schakelt HT derde partijen in. HT heeft contractuele en organisatorische maatregelen genomen om ervoor te zorgen dat de persoonsgegevens enkel worden gebruikt voor de eerder benoemde doeleinden.",
      ],

      note:
        "HT zal persoonsgegevens van de klant nooit verstrekken aan personen of bedrijven voor commerciële exploitatie.",
    },

    {
      id: 4,
      title: "Inzage",
      content: [
        "4.1. Klanten hebben altijd recht op inzage van hun persoonsgegevens.",
      ],
    },

    {
      id: 5,
      title: "Correctie",
      content: [
        "5.1. Op verzoek van de klant kan HT de persoonsgegevens wijzigen.",
      ],
    },

    {
      id: 6,
      title: "Verwijdering",
      content: [
        "6.1. Op verzoek van de klant kan HT de persoonsgegevens verwijderen.",
      ],
    },

    {
      id: 7,
      title: "Bewaartermijn",
      content: [
        "7.1. HT bewaart de persoonsgegevens voor een termijn van drie kalenderjaren vanaf het moment van de boeking. Hierna worden de gegevens automatisch verwijderd.",
      ],
    },

    {
      id: 8,
      title: "Wijzigingen",
      content: [
        "8.1. HT is gerechtigd de gebruiksvoorwaarden van haar privacy statement te allen tijde te wijzigen of te vernieuwen zonder een verplichting tot mededeling aan de gebruikers. De klant is te allen tijde gehouden aan de op dat moment geldende gebruiksvoorwaarden.",
      ],
    },

    {
      id: 9,
      title: "Website",
      content: [
        "9.1. Indien u gebruik maakt van onze website dan worden de volgende gegevens verwerkt: Uw IP-adres, het type en de taal van uw browser, de tijd van uw bezoek en het webadres van waaruit u onze website bereikte, de pagina's die u daarop bekijkt, de koppelingen (links) waarop u klikt en de andere acties die u onderneemt. Hiervoor gebruiken we cookies.",
      ],
    },

    {
      id: 10,
      title: "Cookies",
      content: [
        "10.1. HT maakt op haar website gebruik van cookies. Bij het accepteren van cookies kun je kiezen uit twee instellingen: ‘Functionele en analytische cookies’ en ‘Persoonlijk binnen en buiten de website’.",

        "10.2. U kunt kiezen voor ‘Nee, zelf instellen’ of ‘Ja, dat is prima’. ‘Nee, zelf instellen’, houdt in dat u kiest voor functionele en analytische cookies.",

        "10.3. Wanneer u kiest voor ‘Ja, dat is prima’, dan betekent dit dat u kiest voor persoonlijke cookies voor zowel binnen als buiten de website.",
      ],
    },

    {
      id: 11,
      title: "Verstrekking van gegevens aan bevoegde autoriteiten",
      content: [
        "11.1. HT is wettelijk verplicht om uw gegevens in sommige gevallen met derden te delen. U kunt daarbij denken aan de verstrekking van gegevens aan bevoegde autoriteiten voor opsporing en een strafrechtelijk onderzoek.",
      ],
    },

    {
      id: 12,
      title: "Contact",
      content: [
        "12.1. Heeft u vragen en/of opmerkingen over ons privacy statement?",
      ],

      email: "info@hassaantravel.nl",
    },
  ],
};
const TermsAndConditions = () => {
  return (
    <section
        className="relative py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#cfeaf6]/70"></div>

        {/* CARD */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">
          {/* HERO */}
          <h2 className="text-4xl font-bold mb-3">
            {termsData.hero.title.line1} <br />
            <span className="text-blue-600">
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
                  <h3 className="text-blue-600 font-bold">
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
                  <h3 className="text-blue-600 font-bold text-lg">
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
                      <span className="font-semibold text-blue-600 underline cursor-pointer">
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