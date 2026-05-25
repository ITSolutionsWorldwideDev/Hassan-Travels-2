"use client";

import React from "react";
import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
import DateInputField from "./DateInputField";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

// ─── Types ───────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface DateRange {
  start?: string;
  end?: string;
  [key: string]: unknown;
}

interface DateFieldValue {
  tripType: string;
  mode: "specific" | "flexible";
  range: DateRange;
  flexibleMonths: string[];
}

interface FormData {
  from: string;
  to: string;
  depart: DateFieldValue | string;
  returnDate: DateFieldValue | string;
  travellers: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Safely formats date field (object or plain string) for email */
const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString("en-GB");
};

const formatDateField = (value: DateFieldValue | string): string => {
  if (typeof value === "string") {
    return value || "Not specified";
  }

  if (value.mode === "flexible" && value.flexibleMonths?.length > 0) {
    return `Flexible — Months: ${value.flexibleMonths.join(", ")}`;
  }

  const { start, end } = value.range ?? {};

  if (start && end) {
    return `${formatDate(start)} → ${formatDate(end)}`;
  }

  if (start) {
    return formatDate(start);
  }

  return "Not specified";
};

// ─── Component ────────────────────────────────────────────────────────────────

const BookingSearchForm = () => {
  const [formData, setFormData] = React.useState<FormData>({
    from: "",
    to: "",
    depart: "",
    returnDate: "",
    travellers: "",
  });

  const [status, setStatus] = React.useState<SubmitStatus>("idle");

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwap = () => {
    setFormData((prev) => ({ ...prev, from: prev.to, to: prev.from }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "flightSearch",
          recipientEmail: "maviasajjad78@gmail.com", // or make dynamic if you have user email
          from: formData.from,
          to: formData.to,
          depart: formatDateField(formData.depart),
          returnDate: formatDateField(formData.returnDate),
          travellers: formData.travellers,
          // raw objects also sent for your backend logs
          departRaw: JSON.stringify(formData.depart),
          returnDateRaw: JSON.stringify(formData.returnDate),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          from: "",
          to: "",
          depart: "",
          returnDate: "",
          travellers: "",
        });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative z-10 w-full max-w-5xl md:max-w-7xl mx-auto px-4 mt-10">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-1 md:gap-1.5 items-stretch w-full"
      >
        {/* FROM */}
        <div className="relative w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="From"
            placeHolder="Country, city or airport"
            value={formData.from}
            handleChange={(name: string, value: string) =>
              handleChange("from", value)
            }
          />
          {/* SWAP BUTTON */}
          <button
            type="button"
            onClick={handleSwap}
            className="hidden lg:flex absolute top-1/2 -right-3.25 -translate-y-1/2 w-6 h-6 rounded-full border border-blue-500 text-blue-500 bg-white items-center justify-center shadow-sm z-30 hover:bg-blue-50 transition"
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
            handleChange={(name: string, value: string) =>
              handleChange("to", value)
            }
          />
        </div>

        {/* DEPART */}
        <div className="w-full min-w-0 lg:col-span-2">
          <DateInputField
            label="Depart"
            placeHolder="Add Date"
            value={
              typeof formData.depart === "string"
                ? formData.depart
                : formatDateField(formData.depart)
            }
            handleChange={(value: string) => handleChange("depart", value)}
          />
        </div>

        {/* RETURN */}
        <div className="w-full min-w-0 lg:col-span-2">
          <DateInputField
            label="Return"
            placeHolder="Add Date"
            value={
              typeof formData.returnDate === "string"
                ? formData.returnDate
                : formatDateField(formData.returnDate)
            }
            handleChange={(value: string) => handleChange("returnDate", value)}
          />
        </div>

        {/* TRAVELLERS */}
        <div className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="Travellers & Cabin"
            placeHolder="1 Adult, Economy"
            value={formData.travellers}
            handleChange={(name: string, value: string) =>
              handleChange("travellers", value)
            }
            onChange={(e) => handleChange("travellers", e.target.value)}
          />
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#0F91D5] hover:bg-blue-600 text-white w-full h-13 lg:h-full lg:col-span-1 rounded-xl font-semibold shadow-sm flex items-center justify-center transition disabled:opacity-60"
        >
          {status === "loading" ? "..." : status === "success" ? "✓" : "Search"}
        </button>
      </form>

      {/* STATUS MESSAGES */}
      {status === "success" && (
        <p className="text-green-600 text-sm text-center mt-3">
          ✅ Search request sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center mt-3">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </section>
  );
};

export default BookingSearchForm;
