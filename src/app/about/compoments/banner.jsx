import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/about/banner.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'
import IMG from "media/about/banner.png"
import Image from 'next/image'

const Banner = ({ BannerData }) => {
    return (
        <section className={styles.mainBanner}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={7} className="my-auto">
                        <div className="tagTitle">About</div>
                        <h1>{BannerData?.title}</h1>
                        {BannerData?.desc}
                        <Link href="" className="readMoreBtn">Dive in now <ArrowBtn /></Link>
                    </Col>
                    <Col md={5} className="my-auto">
                        <Image src={IMG.src} alt='Video Animation' width={612} height={400} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner