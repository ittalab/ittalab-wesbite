import React from "react";
import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Ittalab",
  description: "Get in touch. support@ittalab.com",
};

export default function ContactPage() {
  return (
    <section className="pt-8 sm:pt-10 pb-20 sm:pb-24 min-h-screen border-t border-border flex items-start justify-center">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 w-full text-center flex flex-col items-center">
        <div className="space-y-6 flex flex-col items-center">
          <SectionLabel>{"Get in Touch"}</SectionLabel>

          <h1 className="max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#F5F5DC]">
            Let{`'`}s talk
          </h1>

          <p className="max-w-lg text-lg text-[#9C8A7A]">
            No contact forms. No autoresponders. Just email.
          </p>

          <Link
            href="mailto:support@ittalab.com"
            className="block text-xl sm:text-2xl lg:text-4xl font-display font-semibold text-[#EA580C] hover:text-[#C2410C] underline-offset-8"
          >
            support@ittalab.com
          </Link>

          <p className="max-w-md text-sm text-[#9C8A7A]">
            I read every email. Response time: usually within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}