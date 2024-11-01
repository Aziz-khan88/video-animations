"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/industries.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link"
import { ArrowBtn } from "@/src/app/app-constants"



const Industries = ({ slides, options }) => {
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <section className={`${styles.industriesSection} p-100`}>
            <Container>
                <Row className="headingROw">
                    <Col lg={7} md={7}>
                        <h2>Industries</h2>
                        <p>By combining creativity with purpose, we help brands communicate their message effectively and connect with their audience in a memorable way.</p>
                    </Col>
                </Row>
            </Container>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {slides.map((item, index) => (
                            <div className={`${styles.embla__slide}`} key={index}>
                                <div className={styles.industriesBox}>
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <p>{item.txt}</p>
                                    <Link href={item.url}><ArrowBtn /></Link>
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        preload="auto"
                                        aria-label="Background video"
                                        loading="eager"
                                    // poster={`https://vumbnail.com/${item.videoId}.jpg`}
                                    >
                                        <source src={item.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Industries
