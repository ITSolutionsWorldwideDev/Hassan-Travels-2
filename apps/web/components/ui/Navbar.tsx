"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import BookingModal from "./BookingModal"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visaOpen, setVisaOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="relative flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 bg-white shadow-sm z-40">
        
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/assets/logo.webp"
            alt="Hassaan Travel"
            width={160}
            height={40}
            className="h-8 md:h-10 w-25 md:w-30 lg:w-50 xl:w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-gray-700 font-medium">
          <Link href="/destinations" className="hover:text-[#0F91D5] transition">
            Destinations
          </Link>

          <Link href="/umrah" className="hover:text-[#0F91D5] transition">
            Umrah
          </Link>

          {/* VISA DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#0F91D5] transition">
              Visa
              <ChevronDown size={16} />
            </button>

            {/* SUBMENU */}
            <div className="absolute top-full left-0 mt-3 w-52 bg-white shadow-lg rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="/pakistan"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0F91D5]"
              >
                Pakistan 
              </Link>

              <Link
                href="/netherland"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0F91D5]"
              >
                Netherlands 
              </Link>

              <Link
                href="/uae"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0F91D5]"
              >
                UAE 
              </Link>
            </div>
          </div>

          <Link href="/packages" className="hover:text-[#0F91D5] transition">
            Packages
          </Link>

          <Link href="/about-us" className="hover:text-[#0F91D5] transition">
            About
          </Link>

          <Link href="/contact-us" className="hover:text-[#0F91D5] transition">
            Contact
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* PHONE */}
          <a
            href="tel:+31104857673"
            className="text-sm text-gray-500 hidden md:inline hover:text-blue-400 transition-colors"
            aria-label="Call +31 104857673"
          >
            +31 104857673
          </a>

          {/* DESKTOP BOOK NOW BUTTON */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block bg-lime-400 hover:bg-lime-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition cursor-pointer"
          >
            Book Now
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-2 md:hidden z-50">
            <Link className="text-gray-700 font-medium py-2" href="/destinations">
              Destinations
            </Link>

            <Link className="text-gray-700 font-medium py-2" href="/umrah">
              Umrah
            </Link>

            {/* MOBILE VISA DROPDOWN */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setVisaOpen(!visaOpen)}
                className="flex items-center gap-1 text-gray-700 font-medium py-2"
              >
                Visa
                <ChevronDown
                  size={16}
                  className={`transition-transform ${visaOpen ? "rotate-180" : ""}`}
                />
              </button>

              {visaOpen && (
                <div className="flex flex-col items-center gap-3 mt-2">
                  <Link href="/visa/pakistan" className="text-sm text-gray-600 hover:text-[#0F91D5]">
                    Pakistan Visa
                  </Link>
                  <Link href="/visa/netherlands" className="text-sm text-gray-600 hover:text-[#0F91D5]">
                    Netherlands Visa
                  </Link>
                  <Link href="/visa/uae" className="text-sm text-gray-600 hover:text-[#0F91D5]">
                    UAE Visa
                  </Link>
                </div>
              )}
            </div>

            <Link className="text-gray-700 font-medium py-2" href="/packages">
              Packages
            </Link>

            <Link className="text-gray-700 font-medium py-2" href="/about-us">
              About
            </Link>

            <Link className="text-gray-700 font-medium py-2" href="/contact-us">
              Contact
            </Link>

            {/* MOBILE BOOK NOW */}
            <div className="pt-4 border-t w-full text-center mt-3">
              <p className="text-sm text-gray-500 mb-2">+31 104857673</p>
              <button 
                onClick={() => {
                  setOpen(false); // Close mobile menu first
                  setIsModalOpen(true);
                }}
                className="bg-lime-400 px-6 py-2 rounded-full text-sm font-semibold text-white hover:bg-lime-500 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Connected Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}