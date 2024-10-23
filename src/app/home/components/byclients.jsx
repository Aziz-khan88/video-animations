import Clients01 from "media/home/clients/clients01.webp"
import Clients02 from "media/home/clients/clients02.webp"
import Clients03 from "media/home/clients/clients03.webp"
import Clients04 from "media/home/clients/clients04.webp"
import Clients05 from "media/home/clients/clients05.webp"
import Clients06 from "media/home/clients/clients06.webp"
import styles from "@/styles/home/components/clients.module.scss";
import Image from "next/image"



const ByClients = () => {
    return (
        <div className={styles.byClientsBox}>
            <div className={styles.byClientsItem}>
                <Image src={Clients01.src} width={250} height={32} alt="Clients 01" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients02.src} width={186} height={35} alt="Clients 02" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients03.src} width={190} height={61} alt="Clients 03" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients04.src} width={75} height={56} alt="Clients 04" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients05.src} width={93} height={55} alt="Clients 05" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients06.src} width={175} height={27} alt="Clients 06" />
            </div>
        </div>
    )
}

export default ByClients