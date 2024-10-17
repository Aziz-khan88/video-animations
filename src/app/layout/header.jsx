"use client"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/layout/header.module.scss"
import { ArrowBtn, ClosedIcon, DefaultLogo, NavIcon, VariantLogo } from "@/src/app/app-constants"
import { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "@/src/app/app-constants"


const SocailLinks = [
    {
        icon: <Instagram />,
        url: "#"
    },
    {
        icon: <Facebook />,
        url: "#"
    },
    {
        icon: <Twitter />,
        url: "#"
    },
    {
        icon: <Linkedin />,
        url: "#"
    },
    {
        icon: <Youtube />,
        url: "#"
    },
]
const Header = () => {
    const [showDefault, setShowDefault] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isSubMenuActive, setIsSubMenuActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDefault((prev) => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setIsActive(!isActive);
        setIsSubMenuActive(false);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
            setIsSubMenuActive(false);

        }
    };

    const toggleSubMenu = () => {
        setIsSubMenuActive((prev) => !prev);
    };

    return (
        <section className={styles.headerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} className="my-auto">
                        <Link href="/" className={styles.mainLogoBox}>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.show : styles.hide}`}>
                                <DefaultLogo />
                            </div>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.hide : styles.show}`}>
                                <VariantLogo />
                            </div>
                        </Link>
                    </Col>
                    <Col xs={6} className="my-auto">
                        <div
                            className={`${styles.menuIcon} ${isActive ? styles.active : ''}`}
                            onClick={toggleMenu}
                        >
                            {isActive ? <ClosedIcon /> : <NavIcon />}
                        </div>
                        <section className={`${styles.mainMain} ${isActive ? styles.active : ''}`}>
                            <Container>
                                <Row>
                                    <Col>
                                        <ul className={styles.mainMainItems}>
                                            <li onClick={toggleMenu}><Link href="/">Home <ArrowBtn /></Link></li>
                                            <li onClick={toggleMenu}><Link href="/portfolio">Portfolio <ArrowBtn /></Link></li>
                                            <li onClick={toggleSubMenu}>
                                                <Link href="#">Services <ArrowBtn /></Link>
                                                <ul className={`${styles.haschildMenu} ${isSubMenuActive ? styles.active : ''}`}>
                                                    <li onClick={toggleMenu}><Link href="/2d-animation" >2D Animation</Link></li>
                                                    <li><Link href="/3d-animation">3D Animation</Link></li>
                                                    <li><Link href="/whiteboard-animation">Whiteboard Animation</Link></li>
                                                    <li><Link href="/motion-graphics">Motion Graphics</Link></li>
                                                    <li><Link href="/video-editing">Video Editing</Link></li>
                                                    <li><Link href="/logo-animation">Logo Animation</Link></li>
                                                    <li><Link href="/architectural-visualization">Architectural Visualization</Link></li>
                                                    <li><Link href="/cgi-and-vfx">CGI-VFX</Link></li>
                                                    <li><Link href="/infographics">Infographics</Link></li>
                                                    <li><Link href="/hybrid-&-cel-animations">Hybrid & Cel</Link></li>
                                                </ul>

                                            </li>
                                            <li onClick={toggleMenu}><Link href="/pricing">Pricing <ArrowBtn /></Link></li>
                                            <li onClick={toggleMenu}><Link href="/about">About Us <ArrowBtn /></Link></li>
                                            <li onClick={toggleMenu}><Link href="/contact">Contact Us <ArrowBtn /></Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className={styles.headerCopyRight}>
                                            <div className={styles.leftLinks}>
                                                <ul>
                                                    <li><Link href="#">Terms of Use</Link></li>
                                                    <li><Link href="#"> Privacy Policy</Link></li>
                                                </ul>
                                            </div>
                                            <div className={styles.rightLinks}>
                                                <ul>
                                                    {SocailLinks.map((item, index) => (
                                                        <li key={index}>
                                                            <Link href={item.url}>{item.icon}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header
