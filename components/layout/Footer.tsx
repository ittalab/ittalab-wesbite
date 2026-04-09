import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-[#2D2319] py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid gap-10 md:gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-[#EA580C] rounded-sm" />
                <div className="w-1.5 h-1.5 bg-[#EA580C] rounded-sm" />
                <div className="w-1.5 h-1.5 bg-[#EA580C] rounded-sm" />
                <div className="w-1.5 h-1.5 bg-[#EA580C] rounded-sm" />
              </div>
              <span className="font-display font-bold text-[#F5F5DC] text-lg">
                ITTALAB
              </span>
            </div>
            <p className="text-sm text-[#9C8A7A] max-w-xs leading-relaxed">
              From Concept to App Store.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="text-sm font-sans font-medium text-[#F5F5DC] mb-3">
                Navigate
              </h4>
              <div className="space-y-2">
                <Link
                  href="/apps"
                  className="block text-sm text-[#9C8A7A] hover:text-[#F5F5DC] transition"
                >
                  Apps
                </Link>
                <Link
                  href="/about"
                  className="block text-sm text-[#9C8A7A] hover:text-[#F5F5DC] transition"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-[#9C8A7A] hover:text-[#F5F5DC] transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-sans font-medium text-[#F5F5DC] mb-3">
                Contact
              </h4>
              <a
                href="mailto:support@ittalab.com"
                className="text-sm text-[#EA580C] hover:text-[#C2410C] transition"
              >
                support@ittalab.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2D2319] pt-8 mt-8">
          <p className="text-xs text-[#9C8A7A]">
            © 2025 Ittalab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}