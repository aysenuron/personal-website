"use client";

import { useCookieConsent } from "../hooks/useCookieConsent";

export default function Footer() {
  const hasConsent = useCookieConsent();

  return (
    <div className="flex items-center justify-between mt-20 mb-12">
      <div className="text-sm text-gray-500">
        © 2025 Ayşenur Onaran |{" "}
        <a
          href="/privacy_policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#192de4] underline"
        >
          Privacy Policy
        </a>
      </div>
      {hasConsent && (
        <>
          <button
            onClick={() => {
              localStorage.removeItem("cookieConsent");
              window.location.reload();
            }}
            className="hover:bg-[#192de4] mt-2 text-white py-1 px-2 rounded-full cursor-pointer text-xs bg-gray-400"
          >
            <i className="fa-solid fa-cookie-bite pr-4"></i>
            Cookie Settings
          </button>
        </>
      )}
    </div>
  );
}
