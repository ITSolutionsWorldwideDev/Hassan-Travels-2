import React from "react";

export const BookingSearchFormInputField = ({
  placeHolder,
  label,
}: {
  placeHolder: string;
  label: string;
}) => {
  return (
    <div className="w-auto h-[90]">
      <label className="block border-[3px] p-4  rounded-2xl  bg-white focus-within:ring-3 focus-within:ring-blue-500">
        <span className="block truncate text-gray-700 font-semibold text-sm  lg:text-lg mb-1 text-left">
          {label}
        </span>

        <input
          type="text"
          placeholder={placeHolder}
          className=" outline-none text-gray-500 placeholder:text-gray-400  bg-transparent"
        />
      </label>
    </div>
  );
};

// export default BookingSearchFormInputField;
