"use client";

export default function Footer({ className }) {
  return (
    <div className={`${className} flex items-center justify-between`}>
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
    </div>
  );
}
