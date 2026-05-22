"use client";

import React from "react";

import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
import DateInputField from "./DateInputField";

import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const BookingSearchForm = () => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <section className="relative z-10 w-full max-w-5xl md:max-w-7xl mx-auto px-4 mt-10">
      
      <form
        className="
          grid grid-cols-1
          sm:grid-cols-2
          {/* ✅ Total 11 columns banaye hain perfect proportions ke liye */}
          lg:grid-cols-11

          gap-1 md:gap-1.5

          items-stretch
          w-full
        "
      >
        {/* 1. FROM BOX - lg:col-span-2 (Bada aur baki fields ke barabar) */}
        <div className="relative w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="From"
            placeHolder="Country, city or airport"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />

          {/* SWAP BUTTON */}
          <button
            type="button"
            onClick={handleSwap}
            className="
              hidden
              lg:flex
              absolute
              top-1/2
              -right-[13px]
              -translate-y-1/2
              w-6
              h-6
              rounded-full
              border
              border-blue-500
              text-blue-500
              bg-white
              items-center
              justify-center
              shadow-sm
              z-30
              hover:bg-blue-50
              transition
            "
          >
            <HiOutlineSwitchHorizontal size={12} />
          </button>
        </div>

        {/* 2. TO BOX - lg:col-span-2 */}
        <div className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="To"
            placeHolder="Country, city or airport"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        {/* 3. DEPART BOX - lg:col-span-2 */}
        <div className="w-full min-w-0 lg:col-span-2">
          <DateInputField
            label="Depart"
            placeHolder="Add Date"
          />
        </div>

        {/* 4. RETURN BOX - lg:col-span-2 */}
        <div className="w-full min-w-0 lg:col-span-2">
          <DateInputField
            label="Return"
            placeHolder="Add Date"
          />
        </div>

        {/* 5. TRAVELLERS BOX - lg:col-span-2 (Ab yeh bhi baqi inputs jitna bada ho gaya) */}
        <div className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="Travellers & Cabin"
            placeHolder="1 Adult, Economy"
          />
        </div>
          
        {/* 6. SEARCH BUTTON - lg:col-span-1 (Strictly half size of any input field) */}
        <button
          type="submit"
          className="
            bg-[#0F91D5] hover:bg-blue-600
            text-white
            w-full
            h-[52px] lg:h-full
            lg:col-span-1
            rounded-xl
            font-semibold
            shadow-sm
            flex items-center justify-center
            transition
          "
        >
          Search
        </button>

      </form>
    </section>
  );
};

export default BookingSearchForm;