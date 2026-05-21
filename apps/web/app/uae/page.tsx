// import TestimonialsSection from "@/app/components/ui/TestimonialsSection";
// import FaqSection from "../components/ui/FaqSection";
// import HeroSection from "../components/ui/HeroSection";
import VisaOptions from "@/components/layout/uae/VisaOptions";
import CommonHeader from "@/components/ui/CommonHeader";
import Faqs from "@/components/ui/Faqs";
import HeadDesImg from "@/components/ui/HeadDesImg";
import RequiredDocuments from "@/components/ui/RequiredDocuments";
import Testimonials from "@/components/ui/Testimonials";

const imageLinks = [
  "/assets/uae/f1.webp",
  "/assets/uae/f2.webp",
  "/assets/uae/f3.webp",
];

const documentRequired = [
'Valid passport with at least 6 months validity.',
'Passport-size photos meeting UAE visa specifications.',
'Flight details and proof of travel itinerary.',
'Proof of accommodation or hotel booking in the UAE.',
'Additional documents for business or family visas (if applicable).']
export default function UAEPage() {
  return (
    <main className="w-full text-gray-800">
      <CommonHeader
        heading="UAE Visa Services for Pakistani & Dutch Citizens"
        desc="Fast, reliable, and personalized support for your UAE visa application."
      />

      {/* UAE VISA OPTIONS SECTION */}
      <VisaOptions />

      {/* DETAILED CONTENT SECTION */}
      <section
        className="relative py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        {/* SAME OVERLAY */}
        <div className="absolute inset-0 bg-[#cfeaf6]/60"></div>

        {/* CONTENT */}
        <div className="relative z-10">
          <div className="w-full bg-transparent py-12 px-4 flex flex-col items-center gap-7">
            {/* ================= MAIN HERO CONTAINER ================= */}
            <HeadDesImg
              title="Explore the UAE with Hassaan Travel"
              description="Explore the vibrant land of UAE with Hassaan Travels, a hub for multinational businesses, a premium luxurious experience, and an attraction for families. Whether you have to attend business conferences, or visit world-class shopping malls and tourist attractions, Hassaan Travels is here to accommodate you through the journey fully."
              imageSrc="/assets/uae/1.webp"
            />

            {/* ================= BOTTOM NOTICE ACCORDION ================= */}

            <div className="max-w-210 w-full mt-5 bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm py-3.5 px-6 text-center">
              {/* Line 1: Main Rule */}
              <p className="font-bold text-blue-600 text-[10.5px] tracking-tight whitespace-nowrap  max-w-full">
                If your visa application is canceled, the visa costs and service
                costs are not returned
              </p>

              {/* Line 2: Details */}
              <p className="text-gray-800 text-[9.5px] font-medium mt-0.5 whitespace-nowrap  max-w-full">
                For short-term tourist single-entry visa, it is valid for 30
                days and with no extension. The visa processing fee will be 250
                AED.
              </p>
            </div>
          </div>

          {/* <div className="w-full bg-transparent py-12 px-4 flex flex-col items-center gap-10"> */}
            {/* ================= SECTION 1: UAE Visa Services ================= */}

            <HeadDesImg
              title="UAE Visa Services for Dutch Citizens:"
              description="The Dutch citizens avail the benefit of no-visa travel status. When they enter the UAE, their passport is just stamped with a visit visa once they enter the UAE, which will be valid for a maximum time of 90 days."
              imageSrc="/assets/uae/2.webp"
            />

            {/* ================= SECTION 2: Documents Required ================= */}
           <RequiredDocuments documents={documentRequired} rightImage="/assets/uae/doc.webp" title="UAE"/>
            {/* </div> */}
          {/* </div> */}
        </div>
      </section>

      <Faqs imagesLinks={imageLinks} />

      <Testimonials />
    </main>
  );
}
