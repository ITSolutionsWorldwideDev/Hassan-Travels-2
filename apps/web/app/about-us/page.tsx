// import TestimonialsSection from "@/app/components/ui/TestimonialsSection";

import CommonHeader from "@/components/ui/CommonHeader";

import OurStory from "@/components/layout/about-us/OurStory";
import OurCommitment from "@/components/layout/about-us/OurCommitment";
import MIssionAndVision from "@/components/layout/about-us/MIssionAndVision";
import IataRecognized from "@/components/layout/about-us/IataRecognized";
import Testimonials from "@/components/ui/Testimonials";

export default function AboutPage() {
  return (
    <main className="w-full text-gray-800">
      {/* HERO SECTION */}
      <CommonHeader
           heading={"Netherlands Visa Services for Pakistani & UAE \nCitizens"}
        desc="Expert Visa Services for Pakistani and UAE Travelers."
      />

      <OurStory />
      <OurCommitment />

      <MIssionAndVision />
      <IataRecognized />
      <Testimonials/>

      {/* <TestimonialsSection /> */}
    </main>
  );
}
