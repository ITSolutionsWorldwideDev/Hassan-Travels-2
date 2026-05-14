"use client";
import { useState } from "react";
import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
// import { DatePickerDialog } from "./DatePicker";
import { DatePickerDialog } from "./DatePIckerDialog";
export default function DateInputField({label,placeHolder}:{label:string,placeHolder:string}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className=" text-white border-none rounded-xl   cursor-pointer" type="button"
      >
        <BookingSearchFormInputField label={label} placeHolder={placeHolder} />
      </button>

      {open && <DatePickerDialog onClose={() => setOpen(false)} />}
    </>
  );
}
