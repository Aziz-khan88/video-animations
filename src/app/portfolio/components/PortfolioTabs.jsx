'use client'
import { useEffect, useState } from "react";
import styles from "@/styles/portfolio/portfolioTabs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FavIcon } from "@/src/app/app-constants";
import VideoModal from '@/src/app/home/components/videomodal';
import axios from "axios";


const tabs = [
    { label: "3D Animation", tag: 'videoAnimation3D' },
    { label: "Hybrid Animation", tag: 'videoAnimationHB' },
    { label: "2D Animation", tag: 'videoAnimation2D' },
    { label: "Cel Animation", tag: 'videoAnimationCEL' },
    { label: "Motion Graphics", tag: 'videoAnimationMG' },
    { label: "Whiteboard Animation", tag: 'videoAnimationWB' },
    // { label: "Architectural Visualization", tag: 'videoAnimationAV' },
    // { label: "Typography Animation", tag: 'videoAnimationTA' }
];

const VIMEO_ACCESS_TOKEN = '487ce35bb2408d9ea6ebad7c234cc57b';

function limitWords(text, wordLimit) {
    if (typeof text !== "string" || !text.trim()) return "";
    const words = text.split(" ");
    return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;
}

const PortfolioTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [videos, setVideos] = useState([]);
    const [videoID, setVideoID] = useState("");
    const [loading, setLoading] = useState(false);


    const fetchVimeoVideos = async (tag) => {
        setLoading(true);
        setVideos([]);
        try {
            const response = await axios.get(`https://api.vimeo.com/videos`, {
                params: {
                    query: tag,
                    per_page: 11
                },
                headers: {
                    Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`
                }
            });

            setVideos(response.data.data);
        } catch (error) {
            console.error("Error fetching videos: ", error);
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const selectedTag = tabs[activeTab].tag;
        fetchVimeoVideos(selectedTag);
    }, [activeTab]);

    // Handle tab switching
    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const handlePlayClick = (id) => {
        setModalShow(true);
        setVideoID(id);
    };

    return (
        <section className={`${styles.portfolioSection} pt-100 `}>
            <Container>
                <Row>
                    <Col>
                        <ul className={styles.tabHeaders}>
                            {/* <li>Filter By</li> */}
                            {tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    className={activeTab === index ? styles.active : ''}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col className="p-0 ">
                        {loading ? (
                            <div className={styles.videoLoader}>
                                <div className="buttonCommon loaderCommon">
                                    <div className="loading">
                                        <FavIcon />
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div className={styles.tabContent}>
                                <div className={`${styles.portfolio}`}>
                                    <div className={`${styles.gridContainer}`}>


                                        {videos.map((video, index) => (
                                            <div key={index} className={`${styles.imageBox} ${styles[`image${index + 1}`]} `}
                                            >
                                                <Image
                                                    src={video.pictures.sizes[video.pictures.sizes.length - 1].link}
                                                    alt={`Video Thumbnail ${index + 1}`}
                                                    fill
                                                />
                                                <div className={styles.bannerContentBox}>
                                                    <div className={styles.bannerHeading}>
                                                        <div className={styles.title}>{video.name}</div>
                                                        <p>{limitWords(video.description, 15)}</p>
                                                    </div>
                                                    <div className={styles.bannerButton} onClick={() => handlePlayClick(video.uri.split('/').pop())}>
                                                        <div className={`${styles.buttonSmall} buttonCommon`}>
                                                            <div>
                                                                <FavIcon />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}



                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
            <VideoModal show={modalShow} iframeUrl={videoID} onHide={() => setModalShow(false)} />
        </section>
    );
};

export default PortfolioTabs;
