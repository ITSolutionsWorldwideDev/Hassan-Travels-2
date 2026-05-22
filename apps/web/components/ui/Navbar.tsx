"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

// ✅ JSON Configuration for Form Fields
const formFieldsConfig = [
  {
    id: "row-1",
    isRow: true,
    fields: [
      {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Uw naam",
        required: true,
      },
      {
        label: "E-mail",
        name: "email",
        type: "email",
        placeholder: "uw@email.nl",
        required: true,
      }
    ]
  },
  {
    id: "row-2",
    isRow: true,
    fields: [
      {
        label: "Telephone",
        name: "telephone",
        type: "tel",
        placeholder: "+31 123 456 789",
        required: true,
      },
      {
        label: "Employ",
        name: "employ",
        type: "text",
        placeholder: "",
        required: false,
      }
    ]
  },
  {
    id: "travelDate",
    isRow: false,
    label: "Travel date",
    name: "travelDate",
    type: "date",
    placeholder: "",
    required: true,
  },
  {
    id: "additionalWishes",
    isRow: false,
    label: "Additional wishes",
    name: "additionalWishes",
    type: "textarea",
    placeholder: "Vertel ons over uw reisplannen...",
    required: false,
    rows: 4,
  }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visaOpen, setVisaOpen] = useState(false);
  
  // ✅ Modal state control
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal Form submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Apni API ya verification logic yahan add karein
    setIsModalOpen(false);
  };

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

   
   
   
     {/* ================= ✅ DYNAMIC POPUP MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* BACKGROUND DARK OVERLAY */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsModalOpen(false)} 
          />

          {/* MODAL CARD CONTAINER */}
          <div className="bg-white rounded-2xl w-full max-w-[540px] shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 pt-6 pb-4">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                Book your trip
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* FORM BODY (RENDERED VIA MAP USING JSON OBJECTS) */}
            <form onSubmit={handleFormSubmit} className="px-6 pb-6 space-y-4">
              
              {formFieldsConfig.map((rowItem) => {
                // Check if it's a 2-column inline row layout (Name/Email or Tel/Employ)
                if (rowItem.isRow && rowItem.fields) {
                  return (
                    <div key={rowItem.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {rowItem.fields.map((field) => (
                        <div key={field.name}>
                          <label className="block text-xs font-bold text-gray-900 mb-1.5">
                            {field.label}
                          </label>
                          <input
                            required={field.required}
                            type={field.type}
                            placeholder={field.placeholder || undefined}
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors placeholder:text-gray-300 text-gray-800"
                          />
                        </div>
                      ))}
                    </div>
                  );
                }

                // Render regular single column full-width textarea configuration
                if (rowItem.type === "textarea") {
                  return (
                    <div key={rowItem.id}>
                      <label className="block text-xs font-bold text-gray-900 mb-1.5">
                        {rowItem.label}
                      </label>
                      <textarea
                        rows={rowItem.rows}
                        placeholder={rowItem.placeholder || undefined}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors placeholder:text-gray-300 resize-none text-gray-800"
                      />
                    </div>
                  );
                }

                // Render single column standard inputs (e.g. Travel Date)
                return (
                  <div key={rowItem.id}>
                    <label className="block text-xs font-bold text-gray-900 mb-1.5">
                      {rowItem.label}
                    </label>
                    <input
                      required={rowItem.required}
                      type={rowItem.type}
                      placeholder={rowItem.placeholder || undefined}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors text-gray-800"
                    />
                  </div>
                );
              })}

              {/* SUBMIT BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0F91D5] hover:bg-[#0d82c0] text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  Send request
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}