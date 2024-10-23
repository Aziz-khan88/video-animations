import { slides, options } from "@/src/app/home/data/data";
import Clients from "@/src/app/home/clients";
import Faqs from "@/src/app/home/faq";
import Industries from "@/src/app/home/industries";
import Testimonials from "@/src/app/home/testimonials";
import Banner from "@/src/app/portfolio/components/Banner";
import PortfolioTabs from "@/src/app/portfolio/components/PortfolioTabs";

import { BannerData, list } from "@/src/app/portfolio/data/data"


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

export default function page() {
    return (
        <div>
            <Banner BannerData={BannerData} />
            <PortfolioTabs />
            <Clients />
            <Testimonials slides={ClientsReview} />
            <Industries slides={slides} options={options} />
            <Faqs data={list} />
        </div>
    )
}
