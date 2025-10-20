import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2b2c2f] text-gray-300 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Logo dan kontak */}
        <div className="flex items-center gap-4">
          <img
            src="/NocturnityLogo.png" // ganti dengan logo kamu di public/
            alt="Nocturnity Logo"
            className="h-10 object-contain"
          />
          <div className="text-sm leading-relaxed">
            <p>Contact Us: +62 21 7248002 | Fax: +62 21 7208782</p>
            <p>Email: bd@nocturnity.id</p>
          </div>
        </div>

        {/* Sosial media */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 text-lg">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/nocturnitycreative/"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} by Nocturnity Creative
          </p>
        </div>
      </div>
    </footer>
  );
}
