// import TestimonialsSection from "@/app/components/ui/TestimonialsSection";

import {
  FaHandshake,
  FaStar,
  FaHeart,
  FaLightbulb,
  FaShieldAlt,
  FaFire,
} from "react-icons/fa";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import { FaGlobe, FaPlane, FaLock } from "react-icons/fa";
import { FaBullseye, FaEye } from "react-icons/fa";
import CommonHeader from "@/components/ui/CommonHeader";

export default function AboutPage() {
  return (
    <main className="w-full text-gray-800">
      {/* HERO SECTION */}
      <CommonHeader
        heading="Netherlands Visa Services for Pakistani & UAE Citizens"
        desc="Expert Visa Services for Pakistani and UAE Travelers."
      />



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
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              IATA Recognized <br />
              <span className="text-blue-600">Partners</span>
            </h2>

            {/* TEXT */}
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              HassaanTravel is a leading IATA-authorized and recognized travel
              agency, specializing in tailored travel solutions to South Asia
              and pilgrimage journeys to Saudi Arabia. With over 15 years of
              industry expertise, we have earned a reputation for reliability,
              professionalism, and exceptional service.
            </p>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Since our establishment in 2009, we have been committed to
              providing seamless, hassle-free travel experiences. Our dedicated
              team of experts offers personalized guidance, ensuring that every
              journey aligns with your preferences, schedule, and budget.
            </p>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Whether you're visiting loved ones, exploring new destinations, or
              embarking on a sacred pilgrimage, we take care of every
              detail—from flights and accommodations to visas and
              transportation.
            </p>

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
            <button className="mt-6 bg-green-200 text-green-800 text-xs px-4 py-2 rounded-full">
              OUR COMMITMENT
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* IMAGE */}
            <img
              src="/assets/about/1.webp"
              alt="Map"
              className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
            />

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 bg-white border-2 border-blue-200 rounded-xl p-5 shadow-lg w-[220px]">
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

      <section className="relative py-20 px-6 bg-[#d9eef7] overflow-hidden">
        {/* SOFT WAVY BG EFFECT */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="/assets/about/customer.webp" // 👈 ADD IMAGE HERE
              alt="Customer"
              className="rounded-2xl shadow-lg w-full h-[380px] object-cover"
            />

            {/* RATING CARD */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2">
              <span className="text-yellow-400 text-lg">⭐</span>
              <div>
                <p className="text-blue-600 font-bold text-sm">4.9</p>
                <p className="text-gray-500 text-[11px]">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
              Customer Satisfaction is <br />
              <span className="text-[#b6d84f]">Our Priority</span>
            </h2>

            {/* TEXT */}
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              At HassaanTravel, customer satisfaction is our top priority. We
              pride ourselves on offering competitive pricing, flexible booking
              options, and expert advice, making every trip a stress-free and
              memorable experience.
            </p>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Our team of dedicated travel professionals works around the clock
              to ensure your journey is seamless from start to finish. We
              understand that travel is more than just reaching a
              destination—it's about creating memories that last a lifetime.
            </p>

            {/* LIST */}
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
                Competitive pricing with transparent costs
              </li>

              <li className="flex items-start gap-3">
                <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
                Flexible payment and booking options
              </li>

              <li className="flex items-start gap-3">
                <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
                Expert travel advice and consultation
              </li>

              <li className="flex items-start gap-3">
                <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
                Personalized itineraries tailored to you
              </li>

              <li className="flex items-start gap-3">
                <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
                24/7 customer support throughout your journey
              </li>

              <li className="flex items-start gap-3">
                <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
                Hassle-free visa and documentation assistance
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-[#eef7fc] overflow-hidden">
        <img
          src="/images/bg.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Mission, Vision & <span className="text-blue-600">Values</span>
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
            Guided by our core principles, we strive to deliver exceptional
            travel experiences that exceed expectations
          </p>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            {/* MISSION */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white text-xl mb-5">
                <FaBullseye />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-black mb-3">
                Our Mission
              </h3>

              {/* TEXT */}
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide seamless, personalized, and affordable travel
                solutions that connect people to their loved ones, sacred
                destinations, and dream locations across the globe. We are
                committed to delivering exceptional service, building lasting
                relationships, and making every journey a memorable experience
                through expertise, innovation, and unwavering dedication to
                customer satisfaction.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-lime-500 text-white text-xl mb-5">
                <FaEye />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-black mb-3">
                Our Vision
              </h3>

              {/* TEXT */}
              <p className="text-gray-600 text-sm leading-relaxed">
                To become the most trusted and preferred travel partner in
                Europe for South Asian and Middle Eastern destinations,
                recognized globally for our professionalism, reliability, and
                customer-first approach. We envision a future where every
                traveler experiences the joy of hassle-free journeys, supported
                by cutting-edge technology and compassionate human service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 flex justify-center bg-[#e9ecef]">
        {/* CARD CONTAINER */}
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-10">
          {/* TOP ICON */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <FaLightbulb className="text-blue-600 text-lg" />
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Our Core Values
          </h2>

          <p className="text-center text-gray-500 text-sm mt-1 mb-10">
            The principles that guide everything we do
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* ITEM 1 */}
            <div>
              <FaHandshake className="text-yellow-500 text-2xl mb-3" />
              <h4 className="font-semibold text-gray-900">Integrity</h4>
              <p className="text-sm text-gray-500 mt-1">
                We operate with transparency and honesty in all our dealings,
                building trust through ethical practices.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <FaStar className="text-yellow-400 text-2xl mb-3" />
              <h4 className="font-semibold text-gray-900">Excellence</h4>
              <p className="text-sm text-gray-500 mt-1">
                We strive for perfection in every service we provide,
                continuously improving to exceed expectations.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <FaHeart className="text-black text-2xl mb-3" />
              <h4 className="font-semibold text-gray-900">Customer-Centric</h4>
              <p className="text-sm text-gray-500 mt-1">
                Your satisfaction drives our decisions. We listen, understand,
                and tailor solutions to your needs.
              </p>
            </div>

            {/* ITEM 4 */}
            <div>
              <FaLightbulb className="text-yellow-400 text-2xl mb-3" />
              <h4 className="font-semibold text-gray-900">Innovation</h4>
              <p className="text-sm text-gray-500 mt-1">
                We embrace technology and creative solutions to make travel
                booking simpler and more efficient.
              </p>
            </div>

            {/* ITEM 5 */}
            <div>
              <FaShieldAlt className="text-red-400 text-2xl mb-3" />
              <h4 className="font-semibold text-gray-900">Reliability</h4>
              <p className="text-sm text-gray-500 mt-1">
                We deliver on our promises consistently, providing dependable
                service you can count on.
              </p>
            </div>

            {/* ITEM 6 */}
            <div>
              <FaFire className="text-orange-500 text-2xl mb-3" />
              <h4 className="font-semibold text-gray-900">Passion</h4>
              <p className="text-sm text-gray-500 mt-1">
                We love what we do and it shows in the care and attention we put
                into every travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#1e88c8] text-center text-white">
        {/* TOP BADGE */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs px-4 py-1.5 rounded-full">
            <FaStar className="text-yellow-300" />
            IATA Recognized Partners
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Seamless Travel <span className="text-[#d4e157]">Extraordinary</span>{" "}
          <br />
          <span className="text-[#d4e157]">Experiences</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-white/90 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
          Ready to embark on your next journey? Our travel experts are standing
          by to help you plan the perfect trip tailored to your needs and
          budget.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {/* CALL NOW */}
          <button className="bg-[#d4e157] text-black px-6 py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition flex items-center gap-2 justify-center">
            <FaPhoneAlt />
            Call Now
          </button>

          {/* BOOK NOW */}
          <button className="bg-white text-[#1e88c8] px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition flex items-center gap-2 justify-center">
            <FaCalendarAlt />
            Book Now
          </button>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-white/90 text-xs">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            +31 104857673
          </div>

          <div className="flex items-center gap-2">
            <MdEmail />
            info@hassaantravel.nl
          </div>

          <div className="flex items-center gap-2">
            <BsClockFill />
            Mon-Sat 09:00 – 18:00
          </div>
        </div>
      </section>

      {/* <TestimonialsSection /> */}
    </main>
  );
}
