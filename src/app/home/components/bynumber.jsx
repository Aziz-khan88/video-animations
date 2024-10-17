import styles from "@/styles/home/components/bynumber.module.scss"

const ByNumber = () => {
    return (
        <div className={styles.byNumberBox}>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>1000<span>+</span></div>
                <h6>Projects <br />Completed</h6>
            </div>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>1 M<span>+</span></div>
                <h6>Views On Our <br />Clients Videos</h6>
            </div>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>500<span>+</span></div>
                <h6>Number <br />Of Clients</h6>
            </div>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>2000<span>+</span></div>
                <h6>Leads Won <br />By Our Videos</h6>
            </div>
        </div>
    )
}

export default ByNumber