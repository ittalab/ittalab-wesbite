"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 h-16 w-full bg-[#1A1009] border-b border-[#2D2319]">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-4 hover:opacity-90 transition-opacity">
            <div className="relative h-10 w-[clamp(140px,48vw,320px)] sm:h-12 sm:w-[clamp(180px,40vw,360px)] flex-shrink-0 overflow-hidden">
              <Image
                src="/icons/ittalab.png"
                alt="Ittalab"
                fill
                priority
                className="object-contain object-left"
                sizes="(min-width: 640px) 360px, 320px"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#F5F5DC] border-b-2 border-[#EA580C]"
                      : "text-[#F5F5DC]/60 hover:text-[#F5F5DC]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* Removed 'See what we build' CTAButton from header */}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 w-6 h-6 p-0 bg-transparent"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="block w-6 h-0.5 bg-[#F5F5DC]" />
            <span className="block w-6 h-0.5 bg-[#F5F5DC]" />
            <span className="block w-6 h-0.5 bg-[#F5F5DC]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <>
          <button
            className="fixed inset-0 top-16 z-30 bg-black/20 lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-16 left-0 right-0 z-40 lg:hidden border-b border-[#2D2319] bg-[#1A1009] shadow-xl">
            <nav className="max-w-screen-xl mx-auto px-5 sm:px-8 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-3 text-base font-display tracking-tight transition-colors ${
                      isActive
                        ? "text-[#EA580C] bg-[#EA580C]/10"
                        : "text-[#F5F5DC] hover:bg-[#2D2319]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </>
  );
}