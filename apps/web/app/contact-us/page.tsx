import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

import Faqs from "@/components/ui/Faqs";
import Testimonials from "@/components/ui/Testimonials";
import CommonHeader from "@/components/ui/CommonHeader";
import ContactForm from "@/components/layout/ContactForm";
const imageLinks=['/assets/contact-us/1.webp','/assets/contact-us/2.webp','/assets/contact-us/3.webp']
export default function ContactPage() {
    
  return (
    <>
      <CommonHeader
        heading="Netherlands Visa Services for Pakistani & UAE Citizens"
        desc="Expert Visa Services for Pakistani and UAE Travelers."
      />

      {/* <ContactSection /> */}
      <ContactForm/>

      <Faqs imagesLinks={imageLinks}/>
      <Testimonials />
    </>
  );
}
