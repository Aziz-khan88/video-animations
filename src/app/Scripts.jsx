"use client";
import Script from 'next/script';
import { useEffect } from 'react';

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //======== LiveChat ========//
            window.__lc = window.__lc || {};
            window.__lc.license = 18818250;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";

            const livechat = document.createElement("script");
            livechat.async = true;
            livechat.src = "https://cdn.livechatinc.com/tracking.js";
            document.body.appendChild(livechat);
            //======== Google Tag Manager ========//
            const gtmScript = document.createElement("script");
            gtmScript.id = "google-tag-manager";
            gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-10860906782";
            gtmScript.async = true;
            gtmScript.defer = true;
            document.head.appendChild(gtmScript);

            const gtmConfigScript = document.createElement("script");
            gtmConfigScript.id = "google-tag-manager-one";
            gtmConfigScript.text = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-10860906782');
            `;
            document.head.appendChild(gtmConfigScript);
            //======== Additional Google Tag Manager ========//
            const gtmScript2 = document.createElement("script");
            gtmScript2.id = "google-tag-manager";
            gtmScript2.src = "https://www.googletagmanager.com/gtag/js?id=G-FJ46LGNLW0";
            gtmScript2.async = true;
            gtmScript2.defer = true;
            document.head.appendChild(gtmScript2);

            const gtmConfigScript2 = document.createElement("script");
            gtmConfigScript2.id = "google-tag-manager-two";
            gtmConfigScript2.text = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FJ46LGNLW0');
            `;
            document.head.appendChild(gtmConfigScript2);

        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Script>
                {`gtag('event', 'conversion', {'send_to': 'AW-10860906782/B05OCOOZ2aUDEJ6S8boo'});`}
            </Script>
            <Script>
                {`gtag('event', 'conversion', {'send_to': 'AW-10860906782/-cBLCMe7q54ZEJ6S8boo'});`}
            </Script>
        </>
    );
};

export default Scripts;