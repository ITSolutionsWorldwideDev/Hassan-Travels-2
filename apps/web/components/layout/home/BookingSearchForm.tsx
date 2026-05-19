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
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-10 overflow-hidden">
      
  <form
  className="
    grid grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-6

    gap-2 sm:gap-3 lg:gap-2

    items-stretch
    w-full
  "
>

        {/* FROM + TO */}
        <div className="relative sm:col-span-2 lg:col-span-2 min-w-0">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 h-full">

            {/* FROM */}
            <div className="min-w-0">
              <BookingSearchFormInputField
                label="From"
                placeHolder="Country, city or airport"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            {/* TO */}
            <div className="min-w-0">
              <BookingSearchFormInputField
                label="To"
                placeHolder="Country, city or airport"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>

          </div>

          {/* SWAP BUTTON */}
          <button
            type="button"
            onClick={handleSwap}
            className="
              hidden
              sm:flex
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-10
              h-10
              rounded-full
              border-2
              border-blue-500
              text-blue-500
              bg-white
              items-center
              justify-center
              shadow-md
              z-10
              hover:bg-blue-50
              transition
            "
          >
            <HiOutlineSwitchHorizontal size={18} />
          </button>
        </div>

        {/* DEPART */}
        <div className="w-full min-w-0">
          <DateInputField
            label="Depart"
            placeHolder="Add Date"
          />
        </div>

        {/* RETURN */}
        <div className="w-full min-w-0">
          <DateInputField
            label="Return"
            placeHolder="Add Date"
          />
        </div>

        {/* TRAVELLERS */}
        <div className="w-full min-w-0">
          <BookingSearchFormInputField
            label="Travellers & Cabin Class"
            placeHolder="1 Adult, Economy"
          />
        </div>

        {/* SEARCH BUTTON */}
       <button
  type="submit"
  className="
    bg-blue-500 hover:bg-blue-600
    text-white

    w-[100PX]
    h-[52px] sm:h-full

    rounded-xl
    font-semibold
    shadow-sm
    flex items-center justify-center
  "
>
  Search
</button>

      </form>
    </section>
  );
};

export default BookingSearchForm;