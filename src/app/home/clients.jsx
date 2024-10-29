"use client";
import { Col, Container, Row } from "react-bootstrap";


import Image from "next/image";
import styles from "@/styles/home/clients.module.scss";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';




const Clients = ({ ClientsLogos }) => {
    const [emblaRefClients] = useEmblaCarousel(
        { loop: true },
        [
            AutoScroll({
                delay: 3000,
                speed: 2,
                playOnInit: true,
            })
        ]
    );

    const [emblaRefFramework] = useEmblaCarousel(
        { loop: true, direction: 'rtl' },
        [
            AutoScroll({
                delay: 3000,
                speed: 2,
                playOnInit: true,
            })
        ]
    );

    return (
        <section className={`${styles.clientsSection} p-100`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Clients</h2>
                        <p>Our animation services have earned the trust of leading global brands, delivering impactful results that drive success worldwide. </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="m-auto">
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRefClients}>
                                <div className={styles.embla__container}>
                                    {ClientsLogos.map((item, index) => (
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
                                    {ClientsLogos.map((item, index) => (
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

export default Clients;
