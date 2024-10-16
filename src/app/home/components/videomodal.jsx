import { Col, Modal, Row } from "react-bootstrap"
import styles from "@/styles/home/components/videomodal.module.scss"
import { ClosedBtn } from "@/src/app/app-constants"

const VideoModal = (props) => {
    const { iframeUrl, onHide } = props
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="videoModal"
            centered
        >
            <div className={styles.iframePopup}>
                <iframe
                    src={`https://player.vimeo.com/video/${iframeUrl}?autoplay=1&controls=0&loop=1`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen>
                </iframe>
                <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
            </div>

        </Modal >
    )
}

export default VideoModal