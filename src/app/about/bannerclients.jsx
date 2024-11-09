"use client";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/about/bannerclients.module.scss";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const BannerClients = ({ ClientsLogos }) => {
    const [emblaRefClients] = useEmblaCarousel(
        { loop: true, dragFree: true, draggable: true },
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            })
        ]
    );

    const [emblaRefFramework] = useEmblaCarousel(
        { loop: true, direction: 'rtl', dragFree: true, draggable: true },
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            })
        ]
    );

    const ascendingLogos = [...ClientsLogos].sort((a, b) => a.logo.localeCompare(b.logo));
    const descendingLogos = [...ClientsLogos].sort((a, b) => b.logo.localeCompare(a.logo));

    return (
        <section className={`${styles.bannerClients} pb-100`}>
            <Container>
                <Row>
                    <Col md={12} className="m-auto">
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRefClients}>
                                <div className={styles.embla__container}>
                                    {ascendingLogos.map((item, index) => (
                                        <div className={styles.embla__slide} key={`client-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.logo} alt={`Client Logo ${index + 1}`} width={316} height={165} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.embla} dir="rtl">
                            <div className={styles.embla__viewport} ref={emblaRefFramework}>
                                <div className={styles.embla__container}>
                                    {descendingLogos.map((item, index) => (
                                        <div className={styles.embla__slide} key={`framework-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.logo} alt={`Framework Logo ${index + 1}`} width={316} height={165} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BannerClients;
