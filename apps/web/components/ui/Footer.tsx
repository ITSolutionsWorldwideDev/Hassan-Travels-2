import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#071827] text-white px-4 sm:px-8 md:px-16 py-10 sm:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {/* LEFT LOGO + TEXT */}
        <div>
          <h2 className="text-xl font-bold italic">
            <span className="text-blue-400">Hassaan</span>{" "}
            <span className="text-lime-400">Travel</span>
          </h2>

          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            We are a company work efficiently and serve our customer-oriented.
            Connection with the customer and ensuring a good trip are our
            highest priority.
          </p>

          <div className="mt-4 text-xs text-gray-400">IATA Aggregated</div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>Airline Tickets</li>
            <li>Visa Services</li>
            <li>Umrah Services</li>
            <li>Hotels</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>About us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Conditions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2 wrap-break-word">
              📍 Dordtselaan 67D, 3081BG, Rotterdam
            </div>

            <div className="flex items-center gap-2 wrap-break-word">
              ✉️ info@hassaantravel.nl
            </div>

            <div className="flex items-center gap-2">📞 +31 104857673</div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-6 flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-2 text-center sm:text-left">
        <p>Copyright © 2006 - 2024 HassaanTravel | All rights reserved</p>

        <p className="flex items-center justify-center sm:justify-start gap-2">
          <span>Powered by</span>

          <Image
            src="/assets/footer.webp"
            alt="logo"
            width={16}
            height={16}
            className="object-contain"
          />

          <span>IT SOLUTIONS WORLDWIDE</span>
        </p>
      </div>
    </footer>
  );
}
