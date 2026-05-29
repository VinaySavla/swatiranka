"use client";

import Image from "next/image";
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
            <div className="flex items-center gap-6 mt-6">
              <a
                href={footerLinks.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#121212]"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={18}
                  height={18}
                />
              </a>
              <a
                href={footerLinks.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#121212]"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                />
              </a>
            </div>
          </div>
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
