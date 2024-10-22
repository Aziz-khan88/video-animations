import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/services/banner.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'
import Image from 'next/image'
import Img1 from "@/public/services/banner/portrait.webp"

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
            <video
                autoPlay
                muted
                loop
                preload="auto"
                aria-label="Background video"
                className={styles.bannerVideo}
                loading="eager"
            >
                <source src={BannerData.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section >
    )
}
export default Banner