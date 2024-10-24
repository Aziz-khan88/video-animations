import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/about/banner.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'
import IMG from "media/about/banner.png"
import Image from 'next/image'
import Head from 'next/head'

const Banner = ({ BannerData }) => {
    return (
        <>
            <Head>
                <link rel="preload" href={BannerData.video} as="video" type="video/mp4" />
            </Head>
            <section className={styles.mainBanner}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={7} className="my-auto">
                            <div className={styles.bannerContentBox}>
                                <div className="tagTitle">About</div>
                                <h1>{BannerData?.title}</h1>
                                {BannerData?.desc}
                                <Link href="" className="readMoreBtn">Dive in now <ArrowBtn /></Link>
                            </div>

                        </Col>
                        <Col md={5} className="my-auto">
                            <div className={styles.bannerContentBox}>
                                <Image src={IMG.src} alt='Video Animation' width={612} height={400} />
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
            </section>
        </>

    )
}

export default Banner