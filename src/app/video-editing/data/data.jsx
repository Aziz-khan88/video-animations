// Testimonial Image
import Test01 from "media/home/testimonial/test01.webp"
import Test02 from "media/home/testimonial/test02.webp"
import Test03 from "media/home/testimonial/test03.webp"
// Why Choose Image
import why01 from "media/home/whychoose/why01.webp"
import why02 from "media/home/whychoose/why02.webp"
import why03 from "media/home/whychoose/why03.webp"
import why04 from "media/home/whychoose/why04.webp"


export const BannerData = {
    title: "The Finest Video Editing Services",
    desc: "Are you struggling with video editing for your content? Let us help you! We’re a video editing service provider, with experience of helping thousands of Content Creators in achieving millions of views on their videos. Partner with the best video editing team!"
}

export const ClientsReview = [
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

export const WhyOption = { align: 'center', loop: true }
export const WhyItems = [
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

export const FaqList = [
    {
        title: "What is included in video editing services?",
        txt: (
            <>
                <p>
                    Following stages are implemented in video editing
                </p>
                <ol>
                    <li>Selection of footage or clips</li>
                    <li>Cutting and trimming of clips</li>
                    <li>Placement of clips with right sequence</li>
                    <li>Color effects and mixing</li>
                    <li>Motion movements, transitions etc.</li>
                    <li>Responding to client’s requests and feedback</li>
                </ol>
            </>

        ),
    },
    {
        title: "How much does video editing cost?",
        txt: (
            <p>
                It starts at a reasonable price of $1.25 per minute and could go to $10 or more. If your content is lengthy, the hourly rate for video is around $75, with best editing footage and clips.
            </p>
        ),
    },
    {
        title: "How much does a video editor cost?",
        txt: (
            <>
                <p>
                    It would cost you $75 to $150 per hour, which is quite reasonable for hiring a highly skilled video editing professional for your project.
                </p>
            </>
        ),
    },
    {
        title: "How long does video editing take?",
        txt: (
            <p>
                For best and high-end results, it takes up to 30 minutes to 1.5 hours to professionally edit a minute of a video.
            </p>
        ),
    }
]