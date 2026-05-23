"use client";

import React from "react";

import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
import DateInputField from "./DateInputField";

import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const BookingSearchForm = () => {
  const [formData, setFormData] = React.useState({
    from: "",
    to: "",
    depart: "",
    returnDate: "",
    travellers: "",
  });

  console.log(formData)
  // HANDLE INPUT CHANGE
  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SWAP FROM & TO
  const handleSwap = () => {
    setFormData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  // FORM SUBMIT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    // API CALL / ROUTER PUSH / SEARCH LOGIC HERE
  };

  return (
    <section className="relative z-10 w-full max-w-5xl md:max-w-7xl mx-auto px-4 mt-10">
      <form
        onSubmit={handleSubmit}
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-11
          gap-1 md:gap-1.5
          items-stretch
          w-full
        "
      >
        {/* FROM */}
        <div className="relative w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="From"
            placeHolder="Country, city or airport"
            value={formData.from}
            handleChange={handleChange}
            // onChange={(e) => handleChange("from", e.target.value)}
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
              -right-3.25
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

        {/* TO */}
        <div className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="To"
            placeHolder="Country, city or airport"
            value={formData.to}
            handleChange={handleChange}
            // onChange={(e) => handleChange("to", e.target.value)}
          />
        </div>

        {/* DEPART */}
        <div className="w-full min-w-0 lg:col-span-2">
          <DateInputField
            label="Depart"
            placeHolder="Add Date"
            value={formData.depart}
            handleChange={handleChange}
            // onChange={(value) => handleChange("depart", value)}
          />
        </div>

        {/* RETURN */}
        <div className="w-full min-w-0 lg:col-span-2">
          <DateInputField
            label="Return"
            placeHolder="Add Date"
            value={formData.returnDate}
            handleChange={handleChange}
            // onChange={(value) => handleChange("returnDate", value)}
          />
        </div>

        {/* TRAVELLERS */}
        <div className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="Travellers & Cabin"
            placeHolder="1 Adult, Economy"
            value={formData.travellers}
            handleChange={handleChange}
            onChange={(e) =>
              handleChange("travellers", e.target.value)
            }
          />
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="submit"
          className="
            bg-[#0F91D5] hover:bg-blue-600
            text-white
            w-full
            h-13 lg:h-full
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