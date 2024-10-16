"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Row, Col, Container } from "react-bootstrap";
import styles from "@/styles/home/portfolio.module.scss";
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { FavIcon } from '@/src/app/app-constants';
import axios from 'axios';

const OPTIONS = { align: 'center', loop: true };

const caseStudiesList = [
    { title: "2D Animation", tag: 'videoAnimation2D' },
    { title: "3D Animation", tag: 'videoAnimation3D' },
    { title: "Hybrid Animation", tag: 'videoAnimationHB' },
    { title: "Motion Graphics", tag: 'videoAnimationMG' },
    { title: "Whiteboard Animation", tag: 'videoAnimationWB' },
    { title: "Cel Animation", tag: 'videoAnimationCEL' }
];

const VIMEO_ACCESS_TOKEN = 'edbc480300bb3d020a232b2666a656a1';

const Portfolio = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    const [activeTab, setActiveTab] = useState(0);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    useEffect(() => {
        if (emblaApi) {
            setScrollSnaps(emblaApi.scrollSnapList());
            emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
        }
    }, [emblaApi]);

    const fetchVimeoVideos = async (tag) => {
        setLoading(true);
        setVideos([]);
        try {
            const response = await axios.get(`https://api.vimeo.com/videos`, {
                params: {
                    query: tag,
                    per_page: 10
                },
                headers: {
                    Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`
                }
            });
            setVideos(response.data.data);
        } catch (error) {
            console.error("Error fetching videos: ", error);
        } finally {
            setLoading(false);
            if (emblaApi) emblaApi.reInit();
        }
    };

    useEffect(() => {
        const selectedTag = caseStudiesList[activeTab].tag;
        fetchVimeoVideos(selectedTag);
    }, [activeTab]);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <section className={`${styles.portfolioSection} p-150`}>
            <Container>
                <Row>
                    <Col>
                        <h2>Portfolio</h2>
                        <ul className={styles.tabsBox}>
                            {caseStudiesList.map((study, index) => (
                                <li
                                    key={index}
                                    className={`${styles.tabsItem} ${activeTab === index ? styles.active : ''}`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {study.title}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col md={12} className='p-0'>
                        {loading ? (
                            <div className={styles.videoLoader}>
                                <div className="buttonCommon loaderCommon">
                                    <div className="loading">
                                        <FavIcon />
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <>
                                {videos.length === 0 ? (
                                    <p className={styles.messageLoader}>No videos found for this category.</p>
                                ) : (
                                    <div className={styles.embla}>
                                        <div className={styles.embla__viewport} ref={emblaRef}>
                                            <div className={styles.embla__container}>
                                                {videos.map((video, index) => (
                                                    <div className={styles.embla__slide} key={video.uri}>
                                                        <div className={styles.slideBox}>
                                                            <Image
                                                                src={video.pictures.sizes[3].link} // Use a suitable size from the array
                                                                alt={`Video Thumbnail ${index + 1}`}
                                                                fill
                                                            />
                                                            <div className={styles.videoButton}>
                                                                <div className="buttonCommon">
                                                                    <Link href={video.link} target="_blank">
                                                                        <FavIcon />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {videos.length > 0 && (
                                            <div className={styles.embla__controls}>
                                                <div className={styles.embla__dots}>
                                                    <span className={styles.left}>
                                                        {selectedIndex + 1 > 9 ? selectedIndex + 1 : `0${selectedIndex + 1}`}
                                                    </span>
                                                    {scrollSnaps.map((_, index) => (
                                                        <div
                                                            key={index}
                                                            className={`${styles.emblaPoints} ${index === selectedIndex ? styles.active : ""}`}
                                                            onClick={() => emblaApi.scrollTo(index)}
                                                        />
                                                    ))}
                                                    <span className={styles.right}>
                                                        {videos.length > 9 ? videos.length : `0${videos.length}`}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;
