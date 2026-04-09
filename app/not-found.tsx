import React from "react";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-end pb-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <span className="font-display font-bold text-[120px] leading-none tracking-[-0.04em] text-border">
          404
        </span>

        <h1 className="mt-4 font-display font-bold text-[48px] leading-[1.15] text-foreground">
          This page doesn{`'`}t exist.
        </h1>

        <p className="mt-4 font-sans text-base text-muted leading-[1.65]">
          You may have followed a broken link or mistyped the URL.
        </p>

        <div className="mt-8">
          <Link href="/">
            <CTAButton variant="primary">Back to home</CTAButton>
          </Link>
        </div>
      </div>
    </section>
  );
}