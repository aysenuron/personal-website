"use client";

import { useEffect, useState } from "react";

export default function CookieBanner({ forceShow = false }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (forceShow) {
      setVisible(true);
      return;
    }

    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      loadAnalytics();
    }
  }, [forceShow]);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    loadAnalytics();
    setVisible(false);
    // Trigger custom event
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
    // Trigger custom event
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  const loadAnalytics = () => {
    if (window.gtag) return; // don’t double-inject
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-YXYJQJ2LRF"; // my GA4 ID
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-YXYJQJ2LRF");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-2 left-2 right-2 rounded-2xl lg:rounded-full bg-neutral-200 text-black text-center lg:text-left px-2 lg:px-4 py-2 flex flex-col md:flex-row items-center justify-between text-xs z-50">
      <p className="mb-2 md:mb-0">
        This site uses Google Analytics 4 for statistics. You can accept or
        reject cookies.{" "}
        <a
          href="/privacy_policy.pdf"
          target="_blank"
          className="underline hover:text-red-600"
        >
          Learn more
        </a>
      </p>
      <div className="flex gap-2">
        <button
          onClick={acceptCookies}
          className="bg-[#192de4] hover:bg-[#1920e4] px-3 py-0.5 rounded-full text-white cursor-pointer"
        >
          Accept
        </button>
        <button
          onClick={rejectCookies}
          className="bg-red-600 hover:bg-red-700 px-3 py-0.5 rounded-full cursor-pointer text-white"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
