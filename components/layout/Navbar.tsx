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
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-full">
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
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="block w-6 h-0.5 bg-[#F5F5DC]" />
            <span className="block w-6 h-0.5 bg-[#F5F5DC]" />
            <span className="block w-6 h-0.5 bg-[#F5F5DC]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/[0.98] flex flex-col items-center justify-center px-4">
          <Link
            href="/"
            className="absolute top-6 left-4 sm:left-6 flex items-center gap-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-10 w-[clamp(140px,48vw,280px)] overflow-hidden">
              <Image
                src="/icons/ittalab.png"
                alt="Ittalab"
                fill
                className="object-contain object-left"
                sizes="280px"
              />
            </div>
          </Link>

          {/* Close Button (X) */}
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-transparent"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-[#F5F5DC] rotate-45 -translate-y-1/2" />
              <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-[#F5F5DC] -rotate-45 -translate-y-1/2" />
            </span>
          </button>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col items-center gap-6 sm:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl sm:text-3xl font-display tracking-tight transition-colors ${
                    isActive
                      ? "text-[#EA580C]"
                      : "text-[#F5F5DC]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}