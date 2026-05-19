import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0A1120] text-white px-6 md:px-16 py-14">

      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LEFT */}
          <div>
            <h2 className="text-xl font-bold italic">
              <span className="text-blue-400">Hassaan</span>{" "}
              <span className="text-lime-400">Travel</span>
            </h2>

            <p className="text-xs text-gray-400 mt-4 leading-relaxed max-w-xs">
              We as a company work efficiently and are very customer-oriented.
              Connection with the customer and ensuring a good trip are our
              highest priorities.
            </p>

            {/* IATA */}
            <div className="flex items-center gap-3 mt-5">
              <Image
                src="/assets/footer/iata1.webp"
                alt="iata"
                width={36}
                height={36}
              />
              <span className="text-xs text-gray-400">
                IATA Aggregated
              </span>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Airline tickets</li>
              <li className="hover:text-white transition cursor-pointer">Visa Services</li>
              <li className="hover:text-white transition cursor-pointer">Umrah Services</li>
              <li className="hover:text-white transition cursor-pointer">Hotels</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition cursor-pointer">About us</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
              <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition cursor-pointer">Conditions</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>

            <div className="space-y-4 text-sm text-gray-400">

              {/* LOCATION */}
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-blue-400 text-lg mt-1" />
                <span>Dordtselaan 67 D, 3081 BG, Rotterdam</span>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <FiMail className="text-blue-400 text-lg" />
                <span>Info@hassaantravel.nl</span>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">
                <FiPhone className="text-blue-400 text-lg" />
                <span>+31 104857673</span>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-2 pt-2">

  <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md hover:bg-blue-500 transition cursor-pointer">
    <FaFacebookF className="text-[12px]" />
  </div>

  <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md hover:bg-blue-500 transition cursor-pointer">
    <FaInstagram className="text-[12px]" />
  </div>

  <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md hover:bg-blue-500 transition cursor-pointer">
    <FaTiktok className="text-[12px]" />
  </div>

</div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

          <p>
            Copyright © 2006 - 2024 HassaanTravel | All rights reserved
          </p>

          <div className="flex items-center gap-2 opacity-80">
            <span>Powered by</span>

            <Image
              src="/assets/footer/logo.webp"
              alt="logo"
              width={18}
              height={18}
            />

            <span>IT SOLUTIONS WORLDWIDE</span>
          </div>

        </div>

      </div>
    </footer>
  );
}