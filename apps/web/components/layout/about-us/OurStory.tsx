import React from 'react'
import { FaGlobe, FaPlane, FaLock,FaHeart } from "react-icons/fa";
import HeadingAndDesc from '@/components/ui/HeadingAndDesc';
const OurStory = () => {
  return (
    <section className="relative py-20 px-6 bg-[#eaf4fb] overflow-hidden">
        {/* CONTENT WRAPPER */}
        {/* CONTENT WRAPPER */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* TAG */}
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-4">
              OUR STORY
            </span>

            {/* HEADING */}
            {/* <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              IATA Recognized <br />
              <span className="text-blue-600">Partners</span>
            </h2> */}
            <div className="text-[]">
              <HeadingAndDesc
                head={
                  <>
                    IATA Recognized <p className="text-[#0F91D5]">Partners</p>
                  </>
                }
                desc={
                  <p className="text-gray-600 ">
                    HassaanTravel is a leading IATA-authorized and recognized
                    travel agency, specializing in tailored travel solutions to
                    South Asia and pilgrimage journeys to Saudi Arabia. With
                    over 15 years of industry expertise, we have earned a
                    reputation for reliability, professionalism, and exceptional
                    service. <br /> <br />
                    Since our establishment in 2009, we have been committed to
                    providing seamless, hassle-free travel experiences. Our
                    dedicated team of experts offers personalized guidance,
                    ensuring that every journey aligns with your preferences,
                    schedule, and budget. <br />
                    <br /> Whether you're visiting loved ones, exploring new
                    destinations, or embarking on a sacred pilgrimage, we take
                    care of every detail—from flights and accommodations to
                    visas and transportation.
                  </p>
                }
              />
            </div>

            {/* TEXT */}

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-xl shadow p-4 text-sm font-medium flex items-center gap-2">
                <FaGlobe className="text-blue-600" />
                IATA Certified
              </div>

              <div className="bg-white rounded-xl shadow p-4 text-sm font-medium flex items-center gap-2">
                <FaPlane className="text-blue-600" />
                200+ Destinations
              </div>

              <div className="bg-white rounded-xl shadow p-4 text-sm font-medium flex items-center gap-2">
                <FaHeart className="text-red-500" />
                50K+ Customers
              </div>

              <div className="bg-white rounded-xl shadow p-4 text-sm font-medium flex items-center gap-2">
                <FaLock className="text-green-600" />
                Secure Bookings
              </div>
            </div>

            {/* BUTTON */}
            
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* IMAGE */}
            <img
              src="/assets/about-us/side.webp"
              alt="Map"
              className="rounded-2xl shadow-lg w-full h-125 object-cover"
            />

            {/* FLOATING CARD */}
            <div className="absolute bottom-[-15] left-[-15] bg-white border-2 border-blue-200 rounded-xl p-5 shadow-lg w-55">
              <h3 className="text-blue-600 text-2xl font-bold">
                Since <br /> 2009
              </h3>
              <p className="text-gray-500 text-xs mt-2">
                Serving travelers with dedication and excellence
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OurStory