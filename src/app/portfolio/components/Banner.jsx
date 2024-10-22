import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/banner.module.scss"
import Link from "next/link"
import { ArrowBtn, FavIcon } from "@/src/app/app-constants"
import { BannerData, list } from "@/src/app/portfolio/data/data"

const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="mt-auto">
                        <div className={styles.bannerContentBox}>
                            <div className={styles.bannerHeading}>
                                <h1>{BannerData?.title}</h1>
                                {BannerData?.desc}
                                <Link href="" className="readMoreBtn">Let’s Discuss <ArrowBtn /></Link>
                            </div>
                            <div className={styles.bannerButton}>
                                <div className="buttonCommon">
                                    <Link href="">
                                        <FavIcon />
                                    </Link>
                                    <span>Show Reel</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerVideo}>
                <source src='/videos/bannerVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Banner