"use client";
import { ArrowBtn } from "@/src/app/app-constants"
import VideoModal from "@/src/app/home/components/videomodal"
import { useState } from "react"

const CommonButton = ({ color }) => {
    // const [modalShow, setModalShow] = useState(false);

    // const handlePlayClick = () => {
    //     setModalShow(true);
    // };

    const handleChat = () => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-10860906782/uExNCM3Tq54ZEJ6S8boo'
            });
        }
        if (typeof window !== 'undefined' && window.LC_API) {
            window.LC_API.open_chat_window();
        }
    };

    return (
        <>
            {/* <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className={`readMoreBtn ${color ? 'bgColor' : ''}`} onClick={() => handlePlayClick()}>
                <div>
                    <span>Dive in now</span> <ArrowBtn />
                </div>
            </div> */}

            <div className={`readMoreBtn ${color ? 'bgColor' : ''}`} onClick={() => handleChat()}>
                <div>
                    <span>Dive in now</span> <ArrowBtn />
                </div>
            </div>
        </>


    )
}

export default CommonButton