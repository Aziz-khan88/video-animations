import Banner from "@/src/app/contact/compoments/banner";
import ContactForm from "@/src/app/contact/compoments/contactform";
import Testimonials from "@/src/app/home/testimonials";
import Faqs from "@/src/app/home/faq";

import { list, ClientsReview, BannerData } from "@/src/app/contact/data/data";

export default function Page() {
  return (
    <>
      <Banner contact={true} BannerData={BannerData} />
      <ContactForm />
      <Testimonials slides={ClientsReview} />
      <Faqs data={list} />
    </>
  );
}
