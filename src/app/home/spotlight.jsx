"use client"; // Add this if you're using Next.js with React hooks
import { useEffect, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "@/styles/home/spotlight.module.scss";
import Link from "next/link";
import { ArrowBtn } from "@/src/app/app-constants";

const images = [
    { url: "/videos/spotlight/spotlight1.mp4" },
    { url: "/videos/spotlight/spotlight2.mp4" },
    { url: "/videos/spotlight/spotlight3.mp4" },
];

const SpotLight = () => {
    const videoRefs = useRef([]);

    useEffect(() => {
        const options = {
            threshold: 0.5, // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = Number(entry.target.getAttribute("data-index"));
                const video = videoRefs.current[index];

                if (entry.isIntersecting) {
                    video?.play(); // Play video if the section is in view
                } else {
                    video?.pause(); // Pause video if the section is out of view
                }
            });
        }, options); // Pass the options to the observer

        videoRefs.current.forEach((video) => {
            if (video) {
                observer.observe(video);
            }
        });

        return () => {
            videoRefs.current.forEach((video) => {
                if (video) {
                    observer.unobserve(video);
                }
            });
        };
    }, []);

    return (
        <section className={`${styles.spotlightSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={12} className="my-auto">
                        <div className={styles.sportlightContent}>
                            <div className={styles.leftText}>
                                <h4>
                                    Step
                                    <br />
                                    into the
                                </h4>
                            </div>
                            <div className={styles.rightText}>
                                <h4>Spotlight</h4>
                            </div>
                        </div>
                        <div className={styles.iamgeContainer}>
                            {images.map((item, index) => (
                                <div key={index} className={styles.imageBox}>
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)} // Assign each video to the ref array
                                        data-index={index}
                                        autoPlay
                                        muted
                                        loop
                                        preload="auto"
                                        aria-label="Background video"
                                        className={styles.bannerVideo}
                                    >
                                        <source src={item.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ))}
                            <div className={styles.sportlightCTA}>
                                <Link href="#" className="readMoreBtn bgColor">
                                    Let’s Discuss <ArrowBtn />
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SpotLight;