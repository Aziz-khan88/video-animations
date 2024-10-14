import styles from '@/styles/thanks.module.scss'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowBtn } from '@/src/app/app-constants'
import Test01 from "media/home/testimonial/test01.webp"
import Test02 from "media/home/testimonial/test02.webp"
import Test03 from "media/home/testimonial/test03.webp"
import Testimonials from '@/src/app/home/testimonials'

const ClientsReview = [
  {
    img: Test01.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
  {
    img: Test02.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
  {
    img: Test03.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
  {
    img: Test01.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
]
export default function page() {
  return (
    <>
      <section className={styles.thanksSection}>
        <Container className="h-100">
          <Row className="h-100">
            <Col md={10} lg={8} className="m-auto">
              <div className={styles.bannerContentBox}>
                <div className={styles.bannerHeading}>
                  <h1>Thank You</h1>
                  <p>Our team is reviewing your details and will get back to you shortly. If you want to explore more about what we do or just want to know a bit more, feel free to take a look around!</p>
                  <Link href="/" className="readMoreBtn">Back to Home <ArrowBtn /></Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Testimonials slides={ClientsReview} />
    </>
  )
}
