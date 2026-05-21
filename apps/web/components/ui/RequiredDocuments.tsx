import React from "react";
import Image from "next/image";

interface RequiredDocumentsProps {
  documents?: string[];
  title: string;
  rightImage?: string;
}

const RequiredDocuments: React.FC<RequiredDocumentsProps> = ({
  documents,
  title,
  rightImage = "/assets/uae/doc.webp",
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 px-4 md:px-0 z-10 relative">
      {/* 🌟 CONTAINER: Updated background to match the top card (bg-slate-200/80), along with matching border and shadow */}
      <div className="bg-slate-200/80 backdrop-blur-md rounded-[2.5rem] border border-white/40 shadow-xl shadow-slate-300/30 py-6 px-8 md:p-10 flex flex-col md:flex-row items-center gap-10">
        
        {/* ================= LEFT SIDE: IMAGE CONTAINER ================= */}
        <div className="w-full md:w-[42%] relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden">
          <Image
            src={rightImage}
            alt={`${title} Visa Application Documents`}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* ================= RIGHT SIDE: TEXT DETAILS ================= */}
        <div className="w-full md:w-[58%] text-left flex flex-col justify-center">
          {/* 🌟 CHANGES MADE HERE: changed text-[#0D94D6] to text-blue-600 */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-5 tracking-tight">
            <span className="text-blue-600">Documents Required</span> for {title}{" "}
            Visa Application
          </h2>

          {/* BULLET POINTS */}
          <ul className="text-gray-800 text-xs md:text-sm space-y-3 list-disc pl-5 font-normal leading-relaxed">
            {documents &&
              documents.map((item, index) => (
                <li key={index} className="tracking-tight">
                  {item}
                </li>
              ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default RequiredDocuments;