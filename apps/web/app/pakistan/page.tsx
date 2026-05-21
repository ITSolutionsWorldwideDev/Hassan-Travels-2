import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";
import CommonHeader from "@/components/ui/CommonHeader";
import HeadDesImg from "@/components/ui/HeadDesImg";
import { ImCreditCard } from "react-icons/im";
import { LuHeadset } from "react-icons/lu";
import { FaPassport } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import SideIconDesc from "@/components/ui/SideIconDesc";

const visaType = {
  head: "Which Visa Do You Need?",

  data: [
    {
      title: "Tourist Visa",
      desc: "Ideal for leisure travel and exploring the Netherlands.",
      icon: <ImCreditCard />,
    },
    {
      title: "Business Visa",
      desc: "For meetings, events, and professional engagements.",
      icon: <LuHeadset />,
    },
    {
      title: "Family Visit Visa",
      desc: "Reunite with loved ones living in the Netherlands.",
      icon: <FaPassport />,
    },
    {
      title: "Student Visa",
      desc: "For academic or training opportunities (if applicable).",
      icon: <GiLaptop />,
    },
  ],
};

export default function Pakistan() {
  return (
    <main className="">
      <CommonHeader
        heading="Pakistani Family & Tourist Visa Services 
            Hassaan Travel - Simple & Fast Processing"
        desc="Expert Visa Services for Pakistani and UAE Travelers."
      />

      {/* ===== MAIN SECTION ===== */}
      {/* <section
        className="relative py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      > */}
      {/* OVERLAY */}
      {/* <div className="absolute inset-0 bg-[#cfeaf6]/70"></div> */}

      {/* <div className="relative max-w-6xl mx-auto space-y-10"> */}
      {/* ===== TOP CARD ===== */}
      <HeadDesImg
        title="What is a Pakistani Family Visa?"
        description="A Pakistani Family Visa allows foreign nationals to visit or stay in Pakistan and return with their family members who are living in Pakistan.      
            A Pakistani Family Visa is usually granted to a spouse, children, parents, etc. 
           We offer you different types of Pakistani Family Visas and our expert services to help you through the visa application process."
        imageSrc="/assets/pakistan/p1.webp"
      />

      {/* ===== REQUIRED DOCUMENTS CARD ===== */}
      <HeadDesImg
        title="The RequiredDdocuments for Pakistan Family Visa:"
        description="1. Passport (Valid for at least 6 months) 
            2. Recent passport photo (passport photo must not be older than 6 months
            3. If you are of Pakistani origin or married to a Pakistani origin, one of the following combinations: 
            . A Pakistani ID card (NIC)
            . An old/expired Pakistani passport 
            .  Birth certificate 
            . Children under the age of 17 must provide valid passports from both parents, at least one Pakistani ID of the father or mother) 
            . Marriage certificate, Marriage book, Nikkahnama or BRP extract with mention of your partner in combination with your partner's Pakistani ID (NIC, MNIC, NICOP, or POC) or your Pakistani passport.
            4. For children under the age of 17, a “Parents Consent Form” is required and it must be completed and signed by both parents. 
            "
        imageSrc="/assets/pakistan/p2.webp"
      />
      {/* </div> */}
      {/* </section> */}

      {/* OVERLAY */}
      {/* <div className="absolute inset-0 bg-[#cfeaf6]/70"></div> */}

      {/* HEADING */}
      <SideIconDesc data={visaType} />

      {/* CARDS */}

      <Faqs
        imagesLinks={[
          "/assets/pakistan/p1.webp",
          "/assets/pakistan/p2.webp",
          "/assets/pakistan/p2.webp",
        ]}
      />

      <Testimonials />
    </main>
  );
}
