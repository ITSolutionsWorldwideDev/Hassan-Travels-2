// import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
// import FaqSection from "@/app/components/ui/FaqSection";
// import HeroSection from "@/app/components/ui/HeroSection";

import React from "react";
import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";
import CommonHeader from "@/components/ui/CommonHeader";
import SideIconDesc from "@/components/ui/SideIconDesc";
// import WhySection from "../components/ui/WhySection";
import { ImCreditCard } from "react-icons/im";
import { LuHeadset } from "react-icons/lu";
import { FaPassport } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import PopularTourPackages from "@/components/layout/packages/PopularTourPackages";
import StepsToApply from "@/components/layout/umrah/StepsToApply";
import CustomTravelPackages from "@/components/ui/CustomTravelPackages";
import MutipleImageRightText from "@/components/ui/MutipleImageRightText";
import RequiredDocuments from "@/components/ui/RequiredDocuments";

const visaServices = {
  head: (
    <>
      Complete Umrah Visa Services
      <span className="text-blue-600"> for Performers</span>
    </>
  ),

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

const imageData = [
  "/assets/umrah/1.webp",
  "/assets/umrah/2.webp",
  "/assets/umrah/3.webp",
  "/assets/umrah/4.webp",
];

const faqImasgesLinks = [
  "/assets/umrah/faq1.webp",
  "/assets/umrah/faq2.webp",
  "/assets/umrah/faq3.webp",
  "/assets/umrah/faq4.webp",
];

const documentRequired=[
  'Online Saudi Umrah Visa Application','A Valid Passport','Passport-size Photo','Proof of Relationship','No-Objection Letter','Ticket'
]
const UmrahPage: React.FC = () => {
  return (
    <div className="bg-white ">
      <CommonHeader
        heading=" Apply for Your Umrah Visa Online with Hassaan  Travel"
        desc="Fast, Easy, and Reliable Umrah Visa Services for Performers from the Netherlands."
      />

      <SideIconDesc data={visaServices} />
      <RequiredDocuments  documents={documentRequired} title='Umrah' rightImage="/assets/umrah/kaba.webp"/>
      <PopularTourPackages />

      <StepsToApply />

      <CustomTravelPackages />

      <MutipleImageRightText imageData={imageData} />

      {/* <WhySection /> */}

      {/* <Faqs/> */}
      <Faqs imagesLinks={imageData} />

      {/* <TestimonialsSection /> */}
      <Testimonials />
     
    </div>
  );
};

export default UmrahPage;
