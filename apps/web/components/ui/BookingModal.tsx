"use client";

import { X } from "lucide-react";

// Form Fields Configuration
const formFieldsConfig = [
  {
    id: "row-1",
    isRow: true,
    fields: [
      { label: "Name", name: "name", type: "text", placeholder: "Your Name", required: true },
      { label: "E-mail", name: "email", type: "email", placeholder: "your@email.com", required: true }
    ]
  },
  {
    id: "row-2",
    isRow: true,
    fields: [
      { label: "Telephone", name: "telephone", type: "tel", placeholder: "+31 123 456 789", required: true },
      { label: "Employ", name: "employ", type: "text", placeholder: "", required: false }
    ]
  },
  {
    id: "travelDate",
    isRow: false,
    label: "Travel date",
    name: "travelDate",
    type: "date",
    placeholder: "",
    required: true,
  },
  {
    id: "additionalWishes",
    isRow: false,
    label: "Additional wishes",
    name: "additionalWishes",
    type: "textarea",
    placeholder: "Tell us about your travel plans…",
    required: false,
    rows: 4,
  }
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Apni API ya verification logic yahan add karein
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* BACKGROUND DARK OVERLAY */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose} 
      />

      {/* MODAL CARD CONTAINER */}
      <div className="bg-white rounded-2xl w-full max-w-[540px] shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4">
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">
            Book your trip
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* FORM BODY */}
        <form onSubmit={handleFormSubmit} className="px-6 pb-6 space-y-4">
          {formFieldsConfig.map((rowItem) => {
            // 2-column inline row layout (Name/Email or Tel/Employ)
            if (rowItem.isRow && rowItem.fields) {
              return (
                <div key={rowItem.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rowItem.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-bold text-gray-900 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        required={field.required}
                        type={field.type}
                        placeholder={field.placeholder || undefined}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors placeholder:text-gray-300 text-gray-800"
                      />
                    </div>
                  ))}
                </div>
              );
            }

            // Textarea row
            if (rowItem.type === "textarea") {
              return (
                <div key={rowItem.id}>
                  <label className="block text-xs font-bold text-gray-900 mb-1.5">
                    {rowItem.label}
                  </label>
                  <textarea
                    rows={rowItem.rows}
                    placeholder={rowItem.placeholder || undefined}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors placeholder:text-gray-300 resize-none text-gray-800"
                  />
                </div>
              );
            }

            // Standard input (Travel Date)
            return (
              <div key={rowItem.id}>
                <label className="block text-xs font-bold text-gray-900 mb-1.5">
                  {rowItem.label}
                </label>
                <input
                  required={rowItem.required}
                  type={rowItem.type}
                  placeholder={rowItem.placeholder || undefined}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors text-gray-800"
                />
              </div>
            );
          })}

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#0F91D5] hover:bg-[#0d82c0] text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm cursor-pointer"
            >
              Send request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}