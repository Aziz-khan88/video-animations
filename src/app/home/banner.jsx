"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/banner.module.scss"
import Link from "next/link"
import { ArrowBtn, FavIcon } from "@/src/app/app-constants"
import Head from "next/head"
import VideoModal from "./components/videomodal"
import { useState } from "react"

const Banner = ({ BannerData }) => {
    const [modalShow, setModalShow] = useState(false);

    const handlePlayClick = () => {
        setModalShow(true);
    };
    return (
        <>
            <Head>
                <link rel="preload" href={BannerData.video} as="video" type="video/mp4" />
            </Head>
            <section className={styles.bannerSection}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={12} className="mt-auto">
                            <div className={styles.bannerContentBox}>
                                <div className={styles.bannerHeading}>
                                    <h1>{BannerData?.title}</h1>

                                    <div className="readMoreBtn" onClick={() => handlePlayClick()}>
                                        <div>
                                            <span>Dive in now</span> <ArrowBtn />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.bannerButton}>
                                    <div className="buttonCommon">
                                        <Link href="" onClick={() => handlePlayClick()} >
                                            <FavIcon />
                                        </Link>
                                    </div>
                                </div>
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
                <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
            </section>
        </>
    )
}

export default Banner