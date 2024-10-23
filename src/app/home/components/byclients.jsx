import styles from "@/styles/home/components/clients.module.scss";
import { ClientLogo01, ClientLogo02, ClientLogo03, ClientLogo04, ClientLogo05, ClientLogo06 } from "@/src/app/app-constants"

const ByClients = () => {
    return (
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
    )
}

export default ByClients