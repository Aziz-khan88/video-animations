import styles from "@/styles/home/components/clients.module.scss";
import { ClientLogo01, ClientLogo02, ClientLogo03, ClientLogo04, ClientLogo05, ClientLogo06 } from "@/src/app/app-constants"
import { Carousel, CarouselItem } from 'react-bootstrap';

const ByClients = () => {
    return (
        <Carousel interval={3000} fade={true} controls={false} indicators={false}>
            <Carousel.Item>
                <div className={styles.byClientsBox}>
                    <div className={styles.byClientsItem}>
                        <ClientLogo01 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo02 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo03 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo04 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo05 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo06 />
                    </div>
                </div>
            </Carousel.Item>
            <CarouselItem>
                <div className={styles.byClientsBox}>
                    <div className={styles.byClientsItem}>
                        <ClientLogo02 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo01 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo03 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo04 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo05 />
                    </div>
                    <div className={styles.byClientsItem}>
                        <ClientLogo06 />
                    </div>
                </div>
            </CarouselItem>
        </Carousel>

    )
}

export default ByClients