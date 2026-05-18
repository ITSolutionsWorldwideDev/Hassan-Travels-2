import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import SideIconDesc from "@/components/ui/SideIconDesc";
import { Eye, Target } from "lucide-react";
import { title } from "process";
import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const data = {
  head: (
    <>
      Mission, Vision & <span className="text-blue-600">Values</span>
    </>
  ),
  details:
    "Guided by our core principles, we strive to deliver exceptional travel experiences that exceed expectations",

  data: [
    {
      icon: <Target />,
      title: "Our Mission",
      desc: "To provide seamless, personalized, and affordable travel solutions that connect people to their loved ones, sacred destinations, and dream locations across the globe. We are committed to delivering exceptional service, building lasting relationships, and making every journey a memorable experience through expertise, innovation, and unwavering dedication to customer satisfaction.",
    },
    {
      icon: <Eye />,
      title: "Our Mission",
      desc: "To provide seamless, personalized, and affordable travel solutions that connect people to their loved ones, sacred destinations, and dream locations across the globe. We are committed to delivering exceptional service, building lasting relationships, and making every journey a memorable experience through expertise, innovation, and unwavering dedication to customer satisfaction.",
    },
  ],
};
const MIssionAndVision = () => {
  return (
    <section className="relative py-20 px-6 bg-[#eef7fc] overflow-hidden">
      <img
        src="/assets/about-us/3.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* HEADING */}

        {/* SUBTEXT */}
        {/* <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
           
            </p> */}

        {/* CARDS */}

        <SideIconDesc data={data} />
      </div>
    </section>
  );
};

export default MIssionAndVision;
