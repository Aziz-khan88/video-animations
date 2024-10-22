import { BannerData, list, slides, options, ClientsReview, WhyItems, WhyOption } from "@/src/app/home/data/data";

import Banner from "@/src/app/home/banner";
import KeyPoints from "@/src/app/home/keypoints";
import Services from "@/src/app/home/services";
import Portfolio from "@/src/app/home/portfolio";
import Testimonials from "@/src/app/home/testimonials";
import WhyChooes from "@/src/app/home/whychoose";
import VideoCta from "@/src/app/home/videocta";
import Clients from "@/src/app/home/clients";
import SpotLight from "@/src/app/home/spotlight";
import Faqs from "@/src/app/home/faq";
import Industries from "@/src/app/home/industries";

export default function Home() {
  return (
    <>
      <Banner BannerData={BannerData} />
      <KeyPoints />
      <Portfolio />
      <Services />
      <SpotLight />
      <Testimonials slides={ClientsReview} />
      <WhyChooes slides={WhyItems} options={WhyOption} />
      <VideoCta />
      <Clients />
      <Industries slides={slides} options={options} />
      <Faqs data={list} />
    </>
  );
}
