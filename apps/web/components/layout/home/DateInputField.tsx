"use client";

import { useState } from "react";
import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
import { DatePickerDialog } from "./DatePIckerDialog";

export default function DateInputField({
  label,
  placeHolder,
}: {
  label: string;
  placeHolder: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* IMPORTANT: use div instead of button */}
      <div
        onClick={() => setOpen(true)}
        className="
          w-full h-full
          cursor-pointer
          rounded-xl
        "
      >
        <div className="h-full w-full">
          <BookingSearchFormInputField
            label={label}
            placeHolder={placeHolder}
          />
        </div>
      </div>

      {open && <DatePickerDialog onClose={() => setOpen(false)} />}
    </>
  );
}