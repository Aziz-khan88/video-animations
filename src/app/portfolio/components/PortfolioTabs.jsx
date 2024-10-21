'use client'
import { useEffect, useState } from "react";
import styles from "@/styles/portfolio/portfolioTabs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FavIcon } from "@/src/app/app-constants";
import VideoModal from '@/src/app/home/components/videomodal';
import axios from "axios";


const tabs = [
    { label: "2D Animation", tag: 'videoAnimation2D' },
    { label: "3D Animation", tag: 'videoAnimation3D' },
    { label: "Hybrid Animation", tag: 'videoAnimationHB' },
    { label: "Motion Graphics", tag: 'videoAnimationMG' },
    { label: "Whiteboard Animation", tag: 'videoAnimationWB' },
    { label: "Cel Animation", tag: 'videoAnimationCEL' }
];

const VIMEO_ACCESS_TOKEN = 'edbc480300bb3d020a232b2666a656a1';

// Function to limit words in a description
function limitWords(text, wordLimit) {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
}

const PortfolioTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [videos, setVideos] = useState([]);
    const [videoID, setVideoID] = useState("");
    const [loading, setLoading] = useState(false);



    // Fetch Vimeo videos based on the selected tab
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
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    // Fetch videos when active tab changes
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
                                                    src={video.pictures.sizes[6].link}
                                                    fill
                                                    alt={video.name}
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
