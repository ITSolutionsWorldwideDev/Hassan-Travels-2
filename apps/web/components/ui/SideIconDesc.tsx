import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface SideIconDescProps {
  data: { head?: string | React.ReactNode; details?: string; data: Props[] };
}

const SideIconDesc = ({ data }: SideIconDescProps) => {
  return (
<<<<<<< HEAD
    /* Removed the hardcoded background image, padding, and container limitations */
    <div className="relative w-full overflow-hidden">
      
      {/* ❌ REMOVED THE DARK OVERLAY LAYER FROM HERE */}

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        {/* TITLE */}
        <div className="text-center">
          {/* Changed text color to text-gray-900 so it reads clearly on your light background */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {data.head}
          </h2>

          <p className="text-gray-600 mt-2 mb-12 px-2 max-w-2xl mx-auto">
            {data.details}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 sm:gap-8">
          {data.data.map((item, i) => (
            <div
              key={i}
              /* Changed card background from transparent white (bg-white/60) to pure solid white (bg-white) so it pops exactly like Image 1 */
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition flex-1"
            >
              {/* ICON */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center rounded-xl bg-[#058BD0] text-white text-lg sm:text-xl shadow">
                {item.icon}
              </div>

              <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
=======
    <section
      className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-cover bg-center bg-no-repeat relative container mx-auto"
      style={{ backgroundImage: "url('/images/tour.jpg')" }}
    >
      <div className=" text-center">
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold">{data.head}</h2>

        <p className="text-gray-600 mt-2 mb-12 px-2">{data.details}</p>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 sm:gap-8 px-0 sm:px-4 md:px-8">
        {data.data.map((item, i) => (
          <div
            key={i}
            className="bg-white/40 backdrop-blur-lg border  border-white/40 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition"
          >
            {/* ICON */}
            <div className="w-12 h-12 sm:w-14 sm:h-14  mb-4 flex items-center justify-center rounded-xl bg-blue-500 text-white text-lg sm:text-xl shadow">
              {item.icon}
            </div>

            <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>

            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      
      {/* PARTNERS */}
    </section>
    
>>>>>>> 48a964bb4df34b33f08e05f0588519ed826bb463
  );
};

export default SideIconDesc;