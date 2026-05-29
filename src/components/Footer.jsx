"use client";

import Link from "next/link";
import { footerLinks } from "@/lib/mockData";

export default function Footer() {
  return (
    <footer className="bg-[#9bae9b] text-[#121212]">
      <div className="page-width pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading text-[1.8rem] font-light tracking-wide mb-5">
              Customer Support
            </h2>
            <ul className="space-y-3">
              {footerLinks.customerSupport.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-[1.5rem] font-body text-[rgba(18,18,18,0.7)] tracking-wide"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-[1.8rem] font-light tracking-wide mb-5">
              Contact Us
            </h2>
            <p className="text-[1.5rem] font-body text-[rgba(18,18,18,0.7)] tracking-wide">
              <a href={`mailto:${footerLinks.contactEmail}`} className="underline">
              {footerLinks.contactEmail}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href={footerLinks.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#121212]"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
              <path d="M18.9 0H1.1C.5 0 0 .5 0 1.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.7H8.1V9.4h2.6V7.1c0-2.6 1.6-4 3.9-4 1.1 0 2.1.1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 2.9h-2.6V20h5.1c.6 0 1.1-.5 1.1-1.1V1.1c0-.6-.5-1.1-1.1-1.1z" />
            </svg>
          </a>
          <a
            href={footerLinks.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#121212]"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 1.8c2.7 0 3 .01 4.04.06 2.08.1 3.05 1.07 3.14 3.14.05 1.04.06 1.37.06 4.04s-.01 3-.06 4.04c-.1 2.07-1.07 3.05-3.14 3.14-1.04.05-1.37.06-4.04.06s-3-.01-4.04-.06c-2.08-.1-3.05-1.07-3.14-3.14C2.77 12 2.76 11.67 2.76 10s.01-3 .06-4.04c.1-2.08 1.07-3.05 3.14-3.14C7 2.77 7.33 2.76 10 2.76V1.8zm0-1.8C7.28 0 6.94.01 5.88.06 2.96.2.2 2.96.06 5.88.01 6.94 0 7.28 0 10s.01 3.06.06 4.12c.14 2.92 2.9 5.68 5.82 5.82C6.94 19.99 7.28 20 10 20s3.06-.01 4.12-.06c2.91-.14 5.68-2.9 5.82-5.82.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12C19.8 2.97 17.04.2 14.12.06 13.06.01 12.72 0 10 0zm0 4.86a5.14 5.14 0 100 10.28 5.14 5.14 0 000-10.28zm0 8.48a3.34 3.34 0 110-6.68 3.34 3.34 0 010 6.68zm5.34-8.68a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-[rgba(18,18,18,0.25)]">
        <div className="page-width py-10">
          <div className="flex flex-col items-start gap-6">
            <p className="text-[1.2rem] font-body text-[rgba(18,18,18,0.65)] tracking-wide">
              © 2026, Swati Ranka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
