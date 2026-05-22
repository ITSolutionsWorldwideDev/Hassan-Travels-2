"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import {
  FaPlane,
  FaUser,
  FaPassport,
  FaEnvelope,
} from "react-icons/fa";

type TripType = "Round Trip" | "One Way" | "Multi-City";

type FormDataType = {
  [key: string]: string;
};

type FieldType = {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
};

type SectionType = {
  title: string;
  icon: React.ReactNode;
  fields: FieldType[];
};

const formSections: SectionType[] = [
  {
    title: "Flight Details",
    icon: <FaPlane size={12} className="text-[#0F91D5]" />,
    fields: [
      { label: "From (Departure City)", name: "from" },
      { label: "To (Destination City)", name: "to" },
      { label: "Departure Date", name: "departure", type: "date" },
      { label: "Return Date", name: "return", type: "date" },
      { label: "Your Class", name: "travelClass", full: true },
    ],
  },
  {
    title: "Passenger Information",
    icon: <FaUser size={12} className="text-[#0F91D5]" />,
    fields: [
      { label: "Given Name", name: "firstName" },
      { label: "Middle Name", name: "middleName" },
      { label: "Last Name", name: "lastName" },
      { label: "Nationality", name: "nationality" },
      { label: "Date of Birth", name: "dob", type: "date", full: true },
    ],
  },
  {
    title: "Passport Information",
    icon: <FaPassport size={12} className="text-[#0F91D5]" />,
    fields: [
      { label: "Passport Number", name: "passport" },
      { label: "Date of Issue", name: "issueDate", type: "date" },
      {
        label: "Date of Expiry",
        name: "expiryDate",
        type: "date",
        full: true,
      },
    ],
  },
  {
    title: "Contact Information",
    icon: <FaEnvelope size={12} className="text-[#0F91D5]" />,
    fields: [
      { label: "Email Address", name: "email", type: "email" },
      { label: "Phone Number", name: "phone", type: "tel" },
    ],
  },
];

const TicketRequestForm = () => {
  const [tripType, setTripType] = useState<TripType>("Round Trip");
  const [formData, setFormData] = useState<FormDataType>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      tripType,
      ...formData,
    });
    // API Call Here
  };

  return (
    <section className="relative w-full min-h-[70vh] py-12 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden flex justify-center items-center">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-30 w-full h-full">
        <Image
          src="/assets/bgimage/h1.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* LIGHT GRADIENT OVERLAY */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)]"></div>

      {/* LIGHT WHITE OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-white/35"></div>

      {/* FORM CARD CONTAINER */}
      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            <span className="text-black">Air Ticket</span>{" "}
            <span className="text-[#0F91D5]">Request Form</span>
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Fill out the form below and our travel experts will find you the best flight deals
            <br className="hidden sm:inline" /> within 24 hours
          </p>
        </div>

        {/* TRIP TYPE SELECTION (Updated with Brand Colors) */}
        <div className="flex gap-3 mb-6">
          {(["Round Trip", "One Way", "Multi-City"] as TripType[]).map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setTripType(type)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all shadow-xs ${
                tripType === type
                  ? "bg-[#0F91D5] text-white shadow-md shadow-blue-500/10"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {formSections.map((section) => (
            <div key={section.title} className="mb-8">
              <div className="flex items-center gap-2 mb-4 font-semibold text-sm text-gray-900">
                {section.icon}
                {section.title}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {section.fields.map((field) => {
                  // Dynamic Check: Agar trip type "One Way" hai toh return date hide kar dein
                  if (tripType === "One Way" && field.name === "return") {
                    return null;
                  }

                  return (
                    <div
                      key={field.name}
                      className={field.full ? "sm:col-span-2" : ""}
                    >
                      <label className="text-xs text-gray-600 mb-1 block">
                        {field.label}
                      </label>

                      <input
                        required={!(tripType === "One Way" && field.name === "return")}
                        type={field.type || "text"}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md text-sm focus:border-[#0F91D5] focus:ring-1 focus:ring-[#0F91D5]/30 outline-none transition-all bg-white/80"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* SUBMIT BUTTON (Updated with Brand Colors) */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0F91D5] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-md transition-all duration-200 hover:bg-blue-600 hover:shadow-lg"
            >
              Submit Request
            </button>
          </div>
          <p className="text-[#666666] text-center mt-5 text-xs sm:text-sm">
            Our team will review your request and send you the best flight options within 24 hours
          </p>
        </form>
      </div>
    </section>
  );
};

export default TicketRequestForm;