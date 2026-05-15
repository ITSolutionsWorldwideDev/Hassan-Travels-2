import MutipleImageRightText from "@/components/ui/MutipleImageRightText";
import Services from "@/components/layout/visas/Services";
import CommonHeader from "@/components/ui/CommonHeader";
import CenterIconHeadingDesc from "@/components/ui/CenterIconHeadingDesc";
import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";
const imageData = [
  "/assets/visa/why-1.webp",
  "/assets/visa/why-2.webp",
  "/assets/visa/why-3.webp",
  "/assets/visa/why-4.webp",
];

const faqImasgesLinks = [
  "/assets/visa/f1.webp",
  "/assets/visa/f2.webp",
  "/assets/visa/f3.webp",
  "/assets/visa/f4.webp",
];
export default function UmrahPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <CommonHeader
        heading="Affordable Visa Services for Travelers in the  Netherlands"
        desc="Get your Umrah, Pakistani, Saudia, UAE, and Netherlands visas
            quickly and easily with Hassaan Travel."
      />

      {/* OUR SERVICES SECTION */}

      <Services />

      <MutipleImageRightText imageData={imageData} />

      <CenterIconHeadingDesc />

      {/* <FaqSection /> */}
      <Faqs imagesLinks={faqImasgesLinks} />
      {/* <TestimonialsSection /> */}
      <Testimonials />

      {/* <ContactSection /> */}
    </main>
  );
}
