// import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
// import FaqSection from "../components/ui/FaqSection";
// import HeroSection from "../components/ui/HeroSection";
import CommonHeader from "@/components/ui/CommonHeader";
import Faqs from "@/components/ui/Faqs";
import HeadDesImg from "@/components/ui/HeadDesImg";
import SideIconDesc from "@/components/ui/SideIconDesc";
import Testimonials from "@/components/ui/Testimonials";
import { FaPassport } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { ImCreditCard } from "react-icons/im";
import { LuHeadset } from "react-icons/lu";

const visaType = {
  head: "Which Visa Do You Need?",

  data: [
    {
      title: "E-Visa Services",
      desc: "Fast and easy processing of your Umrah visa through e-visa.",
      icon: <ImCreditCard />,
    },
    {
      title: "Document Assistance",
      desc: "Help with collecting the necessary documents for a smooth visa application process.",
      icon: <LuHeadset />,
    },
    {
      title: "Group & Family Visa Options",
      desc: "Special services for families and groups traveling together.",
      icon: <FaPassport />,
    },
    {
      title: "Visa Tracking",
      desc: "Track your Umrah visa status and get updates directly from Hassaan Travel.",
      icon: <GiLaptop />,
    },
  ],
};

const imageLinks = [
  "/assets/netherland/net1.webp",
  "/assets/netherland/travel-3.webp",
  "/assets/netherland/travel-3.webp",
];
export default function NetherlandsPage() {
  return (
    <main className="">
      <CommonHeader
        heading="Netherlands Visa Services for Pakistani & UAE Citizens"
        desc="Expert Visa Services for Pakistani and UAE Travelers."
      />

      <section
        className="relative py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        {/* SAME OVERLAY */}
        <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

        {/* CONTENT */}
        <div className="relative z-10">
          <div className="w-full bg-transparent py-12 px-4 flex flex-col items-center gap-7">
            {/* ================= SECTION 1 ================= */}

            <HeadDesImg
              title="Simplifying Your Netherlands Visa Process"
              description="Citizens of the UAE can travel to the Netherlands without a visa for short stays, typically up to 90 days within a 180-day period, for tourism or business purposes."
              imageSrc="/assets/netherland/net1.webp"
            />
            {/* ================= NOTE ================= */}
            <div className="max-w-210 w-full bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm py-3.5 px-6 text-center">
              {/* Line 1: Main Rule */}
              <p className="font-bold text-blue-600 text-[10.5px] tracking-tight whitespace-nowrap overflow-x-auto max-w-full">
                If your visa application is canceled, the visa costs and service
                costs are not returned
              </p>

              {/* Line 2: Details */}
              <p className="text-gray-800 text-[9.5px] font-medium mt-0.5 whitespace-nowrap overflow-x-auto max-w-full">
                For short-term tourist single-entry visa, it is valid for 30
                days and with no extension. The visa processing fee will be 250
                AED.
              </p>
            </div>
          </div>

          {/* ================= SECTION 2 ================= */}
          <HeadDesImg
            title="Visa-Free Travel for UAE Citizens"
            description="UAE citizens can travel to the Netherlands for tourism and business purposes without having a visa if they have an Emirati passport. The Netherlands allows them to stay for a short period of time, for up to 90 days"
            imageSrc="/assets/netherland/net2.webp"
          />

          {/* ================= VISA TYPES ================= */}

          <SideIconDesc data={visaType} />

          <div className="max-w-6xl mx-auto mt-14 px-4"></div>
        </div>
      </section>

      <Faqs imagesLinks={imageLinks} />
      <Testimonials />
    </main>
  );
}
