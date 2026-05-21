import React from 'react'
import Image from 'next/image'

const RequiredDocuments = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden ">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/umrah.jpg"
            alt="Umrah background"
            fill
            className="object-cover object-center"
            loading="lazy"
          />
        </div>
        {/* LIGHT OVERLAY (slightly lighter for visibility) */}
        <div className="absolute inset-0 bg-[#eaf6fb]/80"></div>
        {/* CONTENT */}
        <div className="relative container  mx-auto">
          {/* BOTTOM BOX */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
            {/* TEXT */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-5 text-[#0f172a] leading-snug">
                The <span className="text-blue-600">Required Documents</span>{" "}
                for
                <br /> an Umrah visa are
              </h3>
              <ul className="text-base text-gray-800 space-y-2 list-disc pl-5">
                <li>Online Saudi Umrah Visa Application</li>
                <li>A Valid Passport</li>
                <li>Passport-size Photo</li>
                <li>Proof of Relationship</li>
                <li>No-Objection Letter</li>
                <li>Ticket</li>
              </ul>
            </div>
            <div className="flex-1 relative h-87.5 w-full"> 
              <Image
                src="/assets/umrah/kaba.webp"
                alt="Kaba"
                fill
                className="rounded-xl object-cover ml-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default RequiredDocuments