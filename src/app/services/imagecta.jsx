import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/services/imagecta.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'
import Image from 'next/image'


const ImageCta = ({ data }) => {
    return (
        <section className={styles.imagectaSection}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col lg-={10} className='m-auto text-center'>
                        <div className={styles.imageContent}>
                            <h2>{data.title}</h2>
                            <Link href={data.ctaLink} className="readMoreBtn bgColor">{data.ctaText}<ArrowBtn /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Image src={data.bannerImg} fill alt='bg image' />

        </section>
    )
}

export default ImageCta