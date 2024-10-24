"use client";
import { useEffect, useRef, useState } from 'react';
import styles from "@/styles/home/services.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowBtn, Polygon } from "@/src/app/app-constants";
import Link from "next/link";

const services = [
    { title: '3D Animation', description: 'Take your visuals to the next level with our 3D animations that create a truly immersive experience for your viewers.', url: 'https://player.vimeo.com/progressive_redirect/playback/1022023406/rendition/1080p/file.mp4?loc=external&signature=01ab571dd3266c76e65141c995e11cea92b2d77db4a5bfb6d3d6daf6544ec385' },
    { title: 'Hybrid Animation', description: 'Mix the charm of hand-drawn animation with modern techniques to create something truly unique and emotionally engaging for your brand.', url: 'https://player.vimeo.com/progressive_redirect/playback/1022023731/rendition/1080p/file.mp4?loc=external&signature=c3232b91ee2ece397f163f6bd1b81ae8c7ed468ed8d41d9790d767e07aa276f7' },
    { title: '2D Animation', description: 'Transform your ideas into lively 2D animations that engage, entertain, and resonate with your target audience.', url: 'https://player.vimeo.com/progressive_redirect/playback/1021823941/rendition/1080p/file.mp4?loc=external&signature=a44c0ee3eb885a7b95935c6480f4140d16e748efb46839981f3100041645c60b' },
    { title: 'Cel Animation', description: 'Mix the charm of hand-drawn animation with modern techniques to create something truly unique and emotionally engaging for your brand.', url: 'https://player.vimeo.com/progressive_redirect/playback/1022023605/rendition/1080p/file.mp4?loc=external&signature=608c68c99f6b66e42aa661b73e7a14bcf26b2ea7ae5b52b1ae625ecc3965246c' },
    { title: 'Motion Graphics', description: 'Make your message pop with motion graphics that are visually striking, easy to follow, and crafted to grab attention.', url: 'https://player.vimeo.com/progressive_redirect/playback/1022023885/rendition/1080p/file.mp4?loc=external&signature=d8d79b2b5fe7009e6b9ebc6e361d0fd2a5d6fea3649702491612d624d4c1b14d' },
    { title: 'White Board Animation', description: 'We simplify your complex ideas with whiteboard animations that tell your story in a way that’s clear, creative, and memorable.', url: 'https://player.vimeo.com/progressive_redirect/playback/1022024033/rendition/1080p/file.mp4?loc=external&signature=3941c10b9a4cba87801ae0d4fa97710743fcb098bd244177e3ba6a1912a22da8' },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRef = useRef(null);
    const observerRef = useRef(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoElement.play();
                } else {
                    videoElement.pause();
                }
            });
        };

        // Initialize observer only if it hasn't been created
        if (!observerRef.current) {
            observerRef.current = new IntersectionObserver(handleIntersection, {
                threshold: 0.5,
            });
        }

        // Observe the video element
        if (videoElement) {
            observerRef.current.observe(videoElement);
        }

        // Cleanup on unmount or when video changes
        return () => {
            if (videoElement) {
                observerRef.current.unobserve(videoElement);
            }
        };
    }, [activeIndex]); // Run effect when activeIndex changes

    useEffect(() => {
        // Play the new video when activeIndex changes
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.load(); // Load the new video source
            videoElement.play(); // Start playing if the element is in view
        }
    }, [activeIndex]); // Run effect when activeIndex changes

    return (
        <section className={styles.serviceSection}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.serviceBox}>
                            <h2>Services</h2>
                            <ul className={styles.serviceItemBox}>
                                {services.map((service, index) => (
                                    <li
                                        key={index}
                                        className={`${styles.serviceItem} ${activeIndex === index ? styles.active : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        <h4><Polygon />{service.title}</h4>
                                        <p>{service.description}</p>
                                        <Link href="">
                                            Let’s Discuss <ArrowBtn />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video
                ref={videoRef}
                muted
                loop
                preload="auto"
                aria-label="Background video"
                className={styles.bannerVideo}
            >
                <source src={services[activeIndex].url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default Services;
