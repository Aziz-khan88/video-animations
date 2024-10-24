"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import ContactFrom from "@/src/app/home/components/contactfrom"
import Image from "next/image"
import IMG from "media/home/rotateImg.webp"
import { Facebook, FavLogo, Instagram, Linkedin, Twitter, Youtube, FooterPhone, FooterEmail, FooterWeb, FooterPin } from "@/src/app/app-constants"
import Link from "next/link"
import { useEffect, useState } from "react";
import { SocailLinks, subMenuItems } from "./data/data"


// const SocailLinks = [
//     {
//         icon: <Instagram />,
//         url: "#"
//     },
//     {
//         icon: <Facebook />,
//         url: "#"
//     },
//     {
//         icon: <Twitter />,
//         url: "#"
//     },
//     {
//         icon: <Linkedin />,
//         url: "#"
//     },
//     {
//         icon: <Youtube />,
//         url: "#"
//     },
// ]

const QuickLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Portfolio",
        url: "/portfolio"
    },
    {
        name: "Pricing",
        url: "/pricing"
    },
    {
        name: "Contact Us",
        url: "/contact"
    },
]

// const SocailLinks = [
//     {
//         name: "3D Animation",
//         url: "#"
//     },
//     {
//         name: "2D Animation",
//         url: "#"
//     },

//     {
//         name: "Motion Graphics",
//         url: "#"
//     },
//     {
//         name: "Whiteboard Animation",
//         url: "#"
//     },
//     {
//         name: "Video Editing",
//         url: "#"
//     },
//     {
//         name: "Logo Animation",
//         url: "#"
//     },

//     {
//         name: "CGI - VFX",
//         url: "#"
//     },
//     {
//         name: "Infographics",
//         url: "#"
//     },
//     {
//         name: "Hybrid & Cel",
//         url: "#"
//     },
//     {
//         name: "Architectural Visualization",
//         url: "#"
//     },
// ]


const Footer = () => {
    const [activeClass, setActiveClass] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveClass((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className={styles.topFooterSection}>
                <Container className={styles.footerBox}>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.footerBG}>
                                <div className={styles.footerContent}>
                                    <h3>Unlock Your Story’s Potential</h3>
                                    <p>Let’s Animate Your Dreams!</p>
                                    <div className={styles.rotateImg}>
                                        <Image src={IMG.src} alt="rotateImg" width={190} height={190} />
                                    </div>
                                </div>
                                <div className={styles.footerFrom}>
                                    <ContactFrom />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.FooterSection}>
                <Container >
                    <Row>
                        <Col md={12}>
                            <div className={styles.footerMenuSec}>
                                <div className={styles.menuItem}>
                                    <FavLogo />
                                    <div className={styles.linksItem}>
                                        <ul>
                                            {SocailLinks.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.url}>{item.icon}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Quick Links</h6>
                                        <ul>
                                            {QuickLinks.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.url}>{item.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Services Links</h6>
                                        <ul className={styles.serviceslinks}>
                                            {subMenuItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.path}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={`${styles.footerContent} ${styles.mainlinks}`}>
                                        <h6>Contact Info</h6>
                                        <div className={styles.contactInfo} target="_blank">
                                            <a href="tel:800-253-1448">
                                                <FooterPhone />
                                                800-253-1448</a>
                                        </div>
                                        <div className={styles.contactInfo}>
                                            <a href="mailto:queries@videoanimation.us" target="_blank">
                                                <FooterEmail />
                                                queries@videoanimation.us</a>
                                        </div>
                                        <div className={styles.contactAddress}>
                                            <div>
                                                <FooterPin />
                                            </div>
                                            <div>
                                                <a href="https://maps.app.goo.gl/xg38qKz4TR15biea8" target="_blank">
                                                    106 E 6th St suite 895, Austin, TX 78701, United States
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.contactAddress}>
                                            <div>
                                                <FooterPin />
                                            </div>
                                            <div>
                                                <a href="https://maps.app.goo.gl/CuRNM42yybePhmG2A" target="_blank">
                                                    111 N Orange Ave Suite 800, Orlando, FL 32801, United States
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.copyRightSection}>
                <Container className="h-100">
                    <Row className={`${styles.borderStyle} h-100`} >
                        <Col sm={6} className="my-auto">
                            <div className={styles.txtCopyRight}>© Copyright 2024 - Video Animation </div>
                        </Col>
                        <Col sm={6} className="my-auto">
                            <ul>
                                <li><Link href="/terms-and-conditions">Terms of Use</Link></li>
                                <li><Link href="/privacy-policy"> Privacy Policy</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.animationsection} ${activeClass ? styles.active : ""}`}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col className="mt-auto">
                            <div className={styles.animatedTxt}>Animati<span className={styles.animatedO}>o</span>n</div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Footer