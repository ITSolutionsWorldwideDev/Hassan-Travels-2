

import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function ContactForm() {
  return (
    <section className="container mx-auto relative  sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">

      {/* BACKGROUND IMAGE */}  
      <div
        className="absolute inset-0 bg-cover bg-center brightness-110 contrast-95"
        style={{ backgroundImage: "url('/images/tour.jpg')" }}
      ></div>

      {/* LIGHT SKY OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-50/70 via-blue-50/60 to-cyan-50/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

        {/* MAP */}
        <div className="order-last lg:order-first h-full">
          <iframe
            src="https://www.google.com/maps?q=Dordtselaan+67D,+3081BG+Rotterdam,+Netherlands&output=embed"
            className="rounded-2xl shadow-xl w-full h-full min-h-125 border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5 flex flex-col justify-between">

          {/* LOCATION */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md flex gap-4 items-start">
            <div className="w-11 h-11 flex items-center justify-center bg-blue-500 text-white rounded-xl text-xl shadow">
              <MdLocationOn />
            </div>
            <div>
              <h3 className="font-semibold text-[17px] text-gray-800">Rotterdam</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                Dordtselaan 67D, 3081BG Rotterdam, Netherlands
              </p>
              <p className="text-[12px] text-gray-400 mt-3 leading-relaxed">
                We are available: <br />
                <span className="font-medium text-gray-600">Monday - Saturday</span> <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md space-y-4">

  {/* NAME + EMAIL */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

    <div className="flex flex-col gap-1">
      <label className="text-[13px] font-semibold text-gray-700">
        Name
      </label>
      <input
        type="text"
        placeholder="Your Name"
        className="border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none px-4 py-3 rounded-lg text-[13px] w-full"
      />
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-[13px] font-semibold text-gray-700">
        Email
      </label>
      <input
        type="email"
        placeholder="your@email.com"
        className="border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none px-4 py-3 rounded-lg text-[13px] w-full"
      />
    </div>

  </div>

  {/* MESSAGE */}
  <div className="flex flex-col gap-1">
    <label className="text-[13px] font-semibold text-gray-700">
      Messages
    </label>
    <textarea
      placeholder="Tell us about your travel plans..."
      rows={3}
      className="border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none px-4 py-3 rounded-lg text-[13px] w-full"
    ></textarea>
  </div>

  {/* BUTTON */}
  <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2.5 rounded-lg text-[13px] shadow-sm">
    Send Now
  </button>

</div>

          {/* PHONE */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-md flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-blue-500 text-white rounded-xl text-lg shadow">
              <MdPhone />
            </div>
            <div>
              <p className="text-[12px] text-gray-400">Phone</p>
              <p className="text-[14px] font-semibold text-gray-800">+31 104857673</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-md flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-blue-500 text-white rounded-xl text-lg shadow">
              <MdEmail />
            </div>
            <div>
              <p className="text-[12px] text-gray-400">Email</p>
              <p className="text-[14px] font-semibold text-gray-800">info@hassaantravel.nl</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}