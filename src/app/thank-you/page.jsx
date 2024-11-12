import styles from '@/styles/thanks.module.scss'
import Link from 'next/link'
import Script from 'next/script'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowBtn } from '@/src/app/app-constants'
import Testimonials from '@/src/app/home/testimonials'
import { ClientsReview } from '@/src/app/home/data/data'


export default function page() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-10860906782" id="gtagCode"></Script>
      <Script id="gtagCode2">
        {
          ` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10860906782');
          `
        }
      </Script>
      <Script id="gtagCode3">
        {`gtag('event', 'conversion', {'send_to': 'AW-10860906782/wwg4CN6ysqQZEJ6S8boo'});`}
      </Script>

      <section className={styles.thanksSection}>
        <Container className="h-100">
          <Row className="h-100">
            <Col md={10} lg={8} className="m-auto">
              <div className={styles.bannerContentBox}>
                <div className={styles.bannerHeading}>
                  <h1>Thank You</h1>
                  <p>Our team is reviewing your details and will get back to you shortly. If you want to explore more about what we do or just want to know a bit more, feel free to take a look around!</p>
                  <div className="readMoreBtn">
                    <div>
                      <Link href="/"><span>Back to Home</span> <ArrowBtn /></Link>
                    </div>
                  </div>
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
