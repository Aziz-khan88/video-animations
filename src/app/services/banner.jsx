import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/services/banner.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'
import Image from 'next/image'
import Img1 from "@/public/services/banner/portrait.webp"

const data = {
    title: (<>Want to Jump <br className='d-none d-md-block' /> Straight in & Get the Video Made?</>),
    content: "Want to get the right kind of video made? One that ensures that your brand objectives are met? One that spurs the customer into taking action? If yes, then you’re just a few steps away from getting a video like this. So, let’s get Video Animation, shall we?",
}

const Banner = ({ video, BannerData }) => {
    return (

        <section className={`${styles.mainBanner} ${video ? styles.pricingPage : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={7} className='my-auto'>
                        <div className={styles.bannerContent}>
                            <h1>{BannerData?.title}</h1>
                            <p>{BannerData?.desc}</p>
                            <Link href="" className="readMoreBtn bgColor">Dive in now <ArrowBtn /></Link>
                        </div>
                    </Col>
                    <Col md={5} className='my-auto text-center'>
                        <div className={styles.bannerImageBox}>
                            <Image src={Img1} width={422} height={649} alt="Services" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
export default Banner