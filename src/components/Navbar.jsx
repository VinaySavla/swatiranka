"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { navLinks } from "@/lib/mockData";
import { Menu, X, Search, User, ShoppingBag, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#9bae9b] shadow-md"
            : "bg-[#9bae9b]"
        }`}
      >
        <div className="page-width">
          <div className="flex items-center justify-between h-16 lg:h-20 py-2.5 lg:py-5">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 -ml-3 text-[#121212] hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="font-heading text-2xl lg:text-3xl font-light text-[#121212] tracking-wide hover:opacity-80 transition-opacity"
            >
              Swati Ranka
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center ml-8">
              <ul className="flex items-center gap-0">
                {navLinks.map((link, idx) =>
                  link.submenu ? (
                    <li
                      key={idx}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(idx)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button className="flex items-center gap-1 px-4 py-2 text-[1.3rem] font-body font-normal text-[#121212] hover:text-white transition-colors tracking-wider uppercase">
                        <span>{link.title}</span>
                        <ChevronDown size={14} className="mt-0.5" />
                      </button>
                      {openDropdown === idx && (
                        <div className="absolute top-full left-0 bg-white shadow-lg border border-[rgba(0,0,0,0.1)] min-w-[220px] py-2 z-50">
                          {link.submenu.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              className="block px-6 py-2.5 text-[1.3rem] text-[#121212] hover:bg-[#f5f5f5] transition-colors tracking-wide"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ) : (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="px-4 py-2 text-[1.3rem] font-body font-normal text-[#121212] hover:text-white transition-colors tracking-wider uppercase"
                      >
                        {link.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <button
                className="p-2 text-[#121212] hover:text-white transition-colors hidden lg:flex"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <Link
                href="#"
                className="p-2 text-[#121212] hover:text-white transition-colors hidden lg:flex"
                aria-label="Account"
              >
                <User size={20} strokeWidth={1.5} />
              </Link>
              <button
                className="p-2 text-[#121212] hover:text-white transition-colors relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#121212] text-white text-[1rem] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Search Bar */}
        {isSearchOpen && (
          <div className="hidden lg:block bg-white border-t border-[rgba(0,0,0,0.1)]">
            <div className="page-width py-4">
              <div className="flex items-center gap-3 max-w-xl mx-auto">
                <Search size={18} className="text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-transparent border-none outline-none text-[1.4rem] text-[#121212] placeholder-gray-400 font-body tracking-wide"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-400 hover:text-[#121212] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setMobileSubmenu(null);
            }}
          />
          <div className="fixed top-0 left-0 bottom-0 w-[calc(100%-4rem)] max-w-[400px] bg-[#f5f5f5] z-50 overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[rgba(0,0,0,0.1)]">
              <span className="font-heading text-xl font-light text-[#121212]">
                Menu
              </span>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setMobileSubmenu(null);
                }}
                className="p-2 text-[#121212]"
              >
                <X size={22} />
              </button>
            </div>

            {mobileSubmenu === null ? (
              <nav className="py-2">
                {navLinks.map((link, idx) =>
                  link.submenu ? (
                    <button
                      key={idx}
                      className="flex items-center justify-between w-full px-6 py-4 text-left text-[1.4rem] font-body text-[#121212] hover:bg-[rgba(0,0,0,0.05)] transition-colors tracking-wide"
                      onClick={() => setMobileSubmenu(idx)}
                    >
                      {link.title}
                      <ChevronDown size={16} className="-rotate-90" />
                    </button>
                  ) : (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block px-6 py-4 text-[1.4rem] font-body text-[#121212] hover:bg-[rgba(0,0,0,0.05)] transition-colors tracking-wide"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )
                )}
              </nav>
            ) : (
              <div>
                <button
                  className="flex items-center gap-2 px-6 py-4 text-[1.4rem] font-body text-[#9bae9b] hover:bg-[rgba(0,0,0,0.05)] transition-colors tracking-wide w-full text-left"
                  onClick={() => setMobileSubmenu(null)}
                >
                  <ChevronDown size={16} className="rotate-90" />
                  {navLinks[mobileSubmenu].title}
                </button>
                <nav className="py-2 border-t border-[rgba(0,0,0,0.1)]">
                  {navLinks[mobileSubmenu].submenu.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={sub.href}
                      className="block px-6 py-3.5 text-[1.4rem] font-body text-[#121212] hover:bg-[rgba(0,0,0,0.05)] transition-colors tracking-wide"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setMobileSubmenu(null);
                      }}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </nav>
              </div>
            )}

            <div className="border-t border-[rgba(0,0,0,0.1)] px-6 py-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-[1.3rem] font-body text-[#121212] py-2 tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User size={18} />
                Log in
              </Link>
            </div>

            <div className="border-t border-[rgba(0,0,0,0.1)] px-6 py-4 flex gap-4">
              <a
                href="https://www.facebook.com/swatiranka.art/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#121212] hover:text-[#9bae9b] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18.9 0H1.1C.5 0 0 .5 0 1.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.7H8.1V9.4h2.6V7.1c0-2.6 1.6-4 3.9-4 1.1 0 2.1.1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 2.9h-2.6V20h5.1c.6 0 1.1-.5 1.1-1.1V1.1c0-.6-.5-1.1-1.1-1.1z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/swatiranka.art/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#121212] hover:text-[#9bae9b] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1.8c2.7 0 3 .01 4.04.06 2.08.1 3.05 1.07 3.14 3.14.05 1.04.06 1.37.06 4.04s-.01 3-.06 4.04c-.1 2.07-1.07 3.05-3.14 3.14-1.04.05-1.37.06-4.04.06s-3-.01-4.04-.06c-2.08-.1-3.05-1.07-3.14-3.14C2.77 12 2.76 11.67 2.76 10s.01-3 .06-4.04c.1-2.08 1.07-3.05 3.14-3.14C7 2.77 7.33 2.76 10 2.76V1.8zm0-1.8C7.28 0 6.94.01 5.88.06 2.96.2.2 2.96.06 5.88.01 6.94 0 7.28 0 10s.01 3.06.06 4.12c.14 2.92 2.9 5.68 5.82 5.82C6.94 19.99 7.28 20 10 20s3.06-.01 4.12-.06c2.91-.14 5.68-2.9 5.82-5.82.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12C19.8 2.97 17.04.2 14.12.06 13.06.01 12.72 0 10 0zm0 4.86a5.14 5.14 0 100 10.28 5.14 5.14 0 000-10.28zm0 8.48a3.34 3.34 0 110-6.68 3.34 3.34 0 010 6.68zm5.34-8.68a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
