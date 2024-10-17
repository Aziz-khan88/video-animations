
import { BannerData, FaqList, ClientsReview, WhyItems, WhyOption } from "@/src/app/video-editing/data/data";

import BannerClients from "@/src/app/about/bannerclients";
import Banner from "@/src/app/services/banner";
import Portfolio from "@/src/app/home/portfolio";
import KeyPoints from "@/src/app/home/keypoints";
import Packages from "@/src/app/pricing/packages";
import WhyChooes from "@/src/app/home/whychoose";
import Testimonials from "@/src/app/home/testimonials";
import Industries from "@/src/app/home/industries";
import Faq from "@/src/app/services/faq";
import Process from "@/src/app/services/process";
import ImageCta from "../services/imagecta";




export default function Page() {
    return (
        <>
            <Banner video={true} BannerData={BannerData} />
            <BannerClients />
            <Portfolio />
            <KeyPoints />
            <Process />
            <Packages />
            <ImageCta />
            <WhyChooes slides={WhyItems} options={WhyOption} />
            <Testimonials slides={ClientsReview} />
            <Industries />
            <Faq faqList={FaqList} />

        </>
    );
}
