import Faqs from "@/components/ui/Faqs";
import Testimonials from "@/components/ui/Testimonials";
import CommonHeader from "@/components/ui/CommonHeader";
import ContactForm from "@/components/layout/ContactForm";

const imageLinks = [
  "/assets/contact-us/1.webp",
  "/assets/contact-us/2.webp",
  "/assets/contact-us/3.webp",
];

export default function ContactPage() {
  return (
    <>
      <CommonHeader
        heading={"Netherlands Visa Services for Pakistani & UAE \nCitizens"}
        desc="Expert Visa Services for Pakistani and UAE Travelers."
      />

      <ContactForm />

      {/* ✅ FAQ with BG */}
      <Faqs
        imagesLinks={imageLinks}
        // bgImage="/assets/about-us/3.webp"
      />

      {/* ✅ Testimonials with SAME BG */}
      <Testimonials bgImage="/assets/about-us/3.webp" />
    </>
  );
}