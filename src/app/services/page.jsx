import BannerClients from "@/src/app/about/bannerclients";
import Banner from "@/src/app/services/banner";
import Portfolio from "@/src/app/home/portfolio";
import KeyPoints from "@/src/app/home/keypoints";
import Packages from "@/src/app/pricing/packages";
import WhyChooes from "@/src/app/home/whychoose";
import Testimonials from "@/src/app/home/testimonials";
import Industries from "@/src/app/home/industries";
import Faqs from "@/src/app/home/faq";
import Process from "@/src/app/services/process";

// Testimonial Image
import Test01 from "media/home/testimonial/test01.webp"
import Test02 from "media/home/testimonial/test02.webp"
import Test03 from "media/home/testimonial/test03.webp"
// Why Choose Image
import why01 from "media/home/whychoose/why01.webp"
import why02 from "media/home/whychoose/why02.webp"
import why03 from "media/home/whychoose/why03.webp"
import why04 from "media/home/whychoose/why04.webp"
import ImageCta from "@/src/app/services/imagecta";

const ClientsLogos = [
  { logo: Logo1.src },
  { logo: Logo2.src },
  { logo: Logo3.src },
  { logo: Logo4.src },
  { logo: Logo5.src },
  { logo: Logo6.src },
  { logo: Logo7.src },
  { logo: Logo8.src },
];

const FrameworkLogos = [
  { logo: FMLogo1.src },
  { logo: FMLogo2.src },
  { logo: FMLogo3.src },
  { logo: FMLogo4.src },
  { logo: FMLogo5.src },
  { logo: FMLogo6.src },
  { logo: FMLogo7.src },
  { logo: FMLogo8.src },
];

const ProcessContent = {
  title: "Process",
  text: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor arcu lectus mauris ut velit sit.",
}

const ProcessList = [
  {
    title: "Ideation",
    text: "Lorem ipsum dolor sit amet consectetur. Et sed justo felis donec lacus vel. Fringilla et lectus congue tristique leo quis. Aliquam facilisis porttitor facilisis id enim. Et dui ut orci cursus lacus nulla cursus urna lectus."
  },
  {
    title: "Development",
    text: "Lorem ipsum dolor sit amet consectetur. Et sed justo felis donec lacus vel. Fringilla et lectus congue tristique leo quis. Aliquam facilisis porttitor facilisis id enim. Et dui ut orci cursus lacus nulla cursus urna lectus."
  },
  {
    title: "Animation Production",
    text: "Lorem ipsum dolor sit amet consectetur. Et sed justo felis donec lacus vel. Fringilla et lectus congue tristique leo quis. Aliquam facilisis porttitor facilisis id enim. Et dui ut orci cursus lacus nulla cursus urna lectus."
  },
  {
    title: "Finalization",
    text: "Lorem ipsum dolor sit amet consectetur. Et sed justo felis donec lacus vel. Fringilla et lectus congue tristique leo quis. Aliquam facilisis porttitor facilisis id enim. Et dui ut orci cursus lacus nulla cursus urna lectus."
  },
]


const ClientsReview = [
  {
    img: Test01.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
  {
    img: Test02.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
  {
    img: Test03.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
  {
    img: Test01.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
]

const WhyOption = { align: 'center', loop: true }
const WhyItems = [
  {
    Img: why01.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },
  {
    Img: why02.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },
  {
    Img: why03.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },
  {
    Img: why04.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },
  {
    Img: why02.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },

]


export default function Services() {
  return (
    <>
      <Banner video={true} />
      <BannerClients />
      <Portfolio />
      <KeyPoints />
      <Process data={ProcessContent} list={ProcessList} />
      <Packages />
      <ImageCta data={ImageCtaContent} />
      <WhyChooes slides={WhyItems} options={WhyOption} />
      <Testimonials slides={ClientsReview} />
      <Industries />
      <Faqs />

    </>
  );
}
