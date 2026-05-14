import MutipleImageRightText from "@/components/ui/MutipleImageRightText";
import Services from "@/components/layout/visas/Services";
import CommonHeader from "@/components/ui/CommonHeader";
import CenterIconHeadingDesc from "@/components/ui/CenterIconHeadingDesc";
import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";

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

      <MutipleImageRightText />

      <CenterIconHeadingDesc />

      {/* <FaqSection /> */}
      <Faqs />
      {/* <TestimonialsSection /> */}
      <Testimonials />

      {/* <ContactSection /> */}
    </main>
  );
}
