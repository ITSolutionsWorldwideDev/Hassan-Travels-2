import React from 'react'
import Image from 'next/image';
const DisclaimerData = () => {
  return (
    <section className="bg-[#cfe3ec] py-12 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto bg-[#D9D9D9] rounded-2xl shadow-xl px-10 py-12">
          
          {/* TITLE */}
          <h2 className="text-2xl sm:text-4xl font-bold mb-12">
            Disclaimer{" "}
            <span className="text-blue-600">Hassaan Travel</span>
          </h2>

          {/* TOP TEXT */}
          <p className="mb-6 text-sm leading-relaxed mt-6">
            Op de website van Hassaan Travel (hierna 'HT') wordt enkel inhoud
            getoond die met grote zorgvuldigheid is samengesteld. Het kan echter
            zo zijn dat bepaalde getoonde inhoud en/of informatie niet langer
            kloppend is vanwege het feit dat dit is verouderd of omdat bepaalde
            informatie na verloop van tijd niet meer actueel is. HT kan hier
            niet voor aansprakelijk worden gesteld. Tevens kan HT niet
            aansprakelijk worden gesteld voor schades die voortvloeien uit de
            getoonde inhoud.
          </p>

          {/* FLOAT IMAGE */}
          <Image
            src="/assets/dis.webp"
            alt="Warning"
            width={320}
            height={320}
            className="float-right ml-10 mb-6 mt-2 object-contain"
          />

          {/* TEXT CONTENT */}
          <div className="text-sm leading-relaxed">
            <p className="mb-4">
              Daarnaast kan HT niet aansprakelijk worden gesteld voor inhoud van
              derden partijen die wordt getoond op haar website.
            </p>

            <p className="mb-4">
              HT adviseert haar klanten, maar kan niet verantwoordelijk worden
              gehouden voor keuzes die klanten maken op basis van het door ons
              verstrekte advies.
            </p>

            <p className="mb-4">
              De getoonde tarieven op de website van HT zijn slechts schattingen,
              op basis van beschikbaarheid. De tarieven en beschikbaarheid worden
              bepaald en geladen door derden zoals luchtvaartmaatschappijen en
              hotels. In het laden hiervan kan het zijn dat er fouten optreden.
              Deze tarieven worden via volledig geautomatiseerde processen op de
              site van HT getoond en zijn continue afhankelijk van wijzigingen.
              HT zet zich in om deze tarieven zo actueel mogelijk te houden. Op
              alle aanbiedingen die op deze website worden getoond, zijn externe
              voorwaarden van de betreffende derde partij van toepassing.
            </p>

            <p>
              Vanwege de complexiteit van technische systemen kan een bezoek aan
              de website zonder onderbreking en beschikbaarheid niet worden
              gegarandeerd. HT kan daarom nooit aansprakelijk worden gesteld voor
              de schade die, direct of indirect, het gevolg is van een
              foutmelding op de website.
            </p>
          </div>

          <div className="clear-both" />
        </div>
      </section>
  )
}

export default DisclaimerData