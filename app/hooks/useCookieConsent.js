"use client";

import { useState, useEffect } from "react";

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState(null);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookieConsent");
      setHasConsent(consent !== null);
    };

    // Check on mount
    checkConsent();

    // Listen for changes
    window.addEventListener("cookieConsentChanged", checkConsent);

    return () => {
      window.removeEventListener("cookieConsentChanged", checkConsent);
    };
  }, []);

  return hasConsent;
}
