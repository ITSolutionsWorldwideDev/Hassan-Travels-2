import React from "react";
import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
import DateInputField from "./DateInputField";

const BookingSearchForm = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-10">
      <form
        className=" rounded-2xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6   gap-1 items-center overflow-hidden w-full"
        aria-label="Travel Search Form"
      >
        {/* FROM */}

        <BookingSearchFormInputField
          label="From"
          placeHolder="Country, city or airport"
        />

        {/* TO */}
        <BookingSearchFormInputField
          label="To"
          placeHolder="Country, city or airport"
        />

        {/* DEPART */}
        <DateInputField label="Depart" placeHolder="Add Date" />
        {/* RETURN */}
        <DateInputField label="Return" placeHolder="Add Date" />

        {/* TRAVELLERS */}
        <BookingSearchFormInputField label="Travellers & Cabin Class" placeHolder="1 Adult, Economy"/>

        {/* BUTTON */}
        <button
          type="submit"
          aria-label="Subscribe for travel updates"
          className="bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white h-[90] w-25 py-5 font-semibold whitespace-nowrap  "
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default BookingSearchForm;
