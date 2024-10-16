"use client";
import { useEffect, useRef, useState } from 'react';
import styles from "@/styles/home/services.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowBtn, Polygon } from "@/src/app/app-constants";
import Link from "next/link";

const services = [
    { title: '2D Animation', description: 'Discover a world of attractive 2D animations tailored to your preferences at Video Animation. From humorous shorts to mesmerizing art pieces, a 2D animation company that caters everyone. Explore our vast collections and find your next favorite animated masterpiece.', url: '/videos/servicesVideo.mp4' },
    { title: '3D Animation', description: 'Video Animation is a well-recognized 3D animation company with a team consisting of expert animators that are experienced in crafting remarkable 3D visuals. Our areas of expertise include the entertainment industry, gaming, E- learning, Hi-tech businesses and more. No matter how complex your desired 3D animation is, our team of certified animators is highly skilled at transforming your vision into a stunning reality.', url: '/videos/bannerVideo.mp4' },
    { title: 'White Board Animation', description: 'Now you can create whiteboard animations and take your brand stories to a whole new level with our whiteboard animation services. From elegant storytelling to beautifully drawn pictures and animations, we can craft a playground of limitless ideas for you and your company.', url: '/videos/servicesVideo.mp4' },
    { title: 'Hybrid & Cel', description: 'Looking for ways to increase traffic on your website and capture audience attention? We’ve got just the right thing for you, our attractive hand-drawn cel animation and hybrid animation services that will make your videos exceptionally engaging, win more attention and trust in your brand.', url: '/videos/bannerVideo.mp4' },
    { title: 'Motion Graphics', description: 'Are you looking for exquisite motion graphics animation for your website, promotional videos and social media content? We are specialists at creating the most eye-catching, smooth and informative animated motion graphics.With the help of our experts, you can transform your ideas into attractive animated motion graphics.', url: '/videos/servicesVideo.mp4' },
    { title: 'CGI-VFX', description: 'Your ideas and visions are about to transform into a perfectly realistic CGI animation, with the expertise of our exceptional CGI artists. We offer you something that other CGI animation companies do not possess: the best collaborative CGI animation services where your imagination is our top priority. Experience the ultimate taste of VFX with our CGI Video Animation.', url: '/videos/bannerVideo.mp4' },
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
