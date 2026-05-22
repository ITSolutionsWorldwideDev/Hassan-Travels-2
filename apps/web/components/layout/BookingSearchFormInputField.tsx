"use client";
import React from "react";

interface Props {
  placeHolder: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BookingSearchFormInputField = ({
  placeHolder,
  label,
  value,
  onChange,
}: Props) => {
  return (
    <div className="h-21.25 flex flex-col justify-center px-5 bg-white rounded-xl shadow-sm">

      {/* LABEL */}
     <span className="text-gray-800 font-bold text-sm mb-1 text-left">
  {label}
</span>

      {/* INPUT */}
      <input
        type="text"
        placeholder={placeHolder}
        value={value || ""}
        onChange={onChange ?? (() => {})}
        className="
          bg-transparent
          outline-none
          text-gray-900
          placeholder:text-gray-400
          text-base sm:text-base
          font-medium
          text-left
        "
      />

    </div>
  );
};