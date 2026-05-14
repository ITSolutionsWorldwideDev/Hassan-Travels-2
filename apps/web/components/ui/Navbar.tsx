"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 bg-white shadow-sm">
      {/* LOGO (SMALL ON MOBILE) */}
      <Link href="/">
        <Image
          src="/assets/logo.webp"
          alt="Hassaan Travel"
          width={160}
          height={40}
          //   fill
          className="h-8 md:h-10 w-25  md:w-30 lg:w-50 xl:w-auto object-contain"
        />
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-gray-700  font-medium">
        <Link href="/services" className="hover:text-blue-600 ">
          Services
        </Link>
        <Link href="/umrah" className="hover:text-blue-600 ">
          Umrah
        </Link>
        <Link href="/visa" className="hover:text-blue-600 ">
          Visa
        </Link>
        <Link href="/packages" className="hover:text-blue-600 ">
          Packages
        </Link>
        <Link href="/about" className="hover:text-blue-600 ">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-600 ">
          Contact
        </Link>
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {/* PHONE */}
        <span className="text-sm text-gray-500 hidden md:inline">
          +31 104857673
        </span>

        {/* BUTTON */}
        <button className="hidden md:block bg-lime-400 hover:bg-lime-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
          Book Now
        </button>

        {/* MOBILE MENU BUTTON (PRO ICON) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-5 md:hidden z-50">
          <Link className="text-gray-700 font-medium" href="/services">
            Services
          </Link>
          <Link className="text-gray-700 font-medium" href="/umrah">
            Umrah
          </Link>
          <Link className="text-gray-700 font-medium" href="/visa">
            Visa
          </Link>
          <Link className="text-gray-700 font-medium" href="/packages">
            Packages
          </Link>
          <Link className="text-gray-700 font-medium" href="/about">
            About
          </Link>
          <Link className="text-gray-700 font-medium" href="/contact">
            Contact
          </Link>

          {/* EXTRA */}
          <div className="pt-4 border-t w-full text-center">
            <p className="text-sm text-gray-500 mb-2">+31 104857673</p>
            <button className="bg-lime-400 px-6 py-2 rounded-full text-sm font-semibold">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
