"use client"
import { useEffect } from 'react'
const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //======== Live Chat ========//
            window.__lc = window.__lc || {};
            window.__lc.license = 18818250;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            const livechat = document.createElement("script");
            livechat.async = true;
            livechat.src = "https://cdn.livechatinc.com/tracking.js";
            document.body.appendChild(livechat);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <></>
    );
}
export default Scripts