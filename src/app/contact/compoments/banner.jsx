import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/about/banner.module.scss"

const Banner = ({ contact }) => {
    return (
        <section className={`${styles.mainBanner} ${contact ? styles.contactpage : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={8} className="m-auto text-center">
                        <h1><span>Let’s</span> Create Something Beyond Ordinary, Our Team Would Love To Hear Your Idea</h1>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Banner