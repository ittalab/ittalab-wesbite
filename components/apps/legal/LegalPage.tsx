import Link from "next/link";
import { Children, Fragment, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  intro: ReactNode;
  backHref: string;
  backLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children: ReactNode;
};

type LegalSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  intro,
  backHref,
  backLabel,
  secondaryHref,
  secondaryLabel,
  children,
}: LegalPageProps) {
  const sections = Children.toArray(children);

  return (
    <main className="min-h-screen bg-background text-cream">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <header className="max-w-4xl pb-10 sm:pb-12 lg:pb-14">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">{updatedAt}</p>
          <div className="mt-5 space-y-4 text-sm leading-8 text-cream/80 sm:text-base">
            {intro}
          </div>
        </header>

        <div className="my-24 h-px bg-border/70 sm:my-28 lg:my-32" aria-hidden="true" />

        <div>
          {sections.map((section, index) => (
            <Fragment key={index}>
              {index > 0 ? (
                <div className="my-24 h-px bg-border/70 sm:my-28 lg:my-32" aria-hidden="true" />
              ) : null}
              {section}
            </Fragment>
          ))}
        </div>

        <footer className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              {backLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </footer>
      </div>
    </main>
  );
}

export function LegalSection({ title, children, className, id }: LegalSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "space-y-8 pt-10 sm:pt-12 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:space-y-0 lg:pt-14",
        className
      )}
    >
      <div className="lg:pt-1">
        <h2 className="font-display text-xl font-semibold leading-tight text-cream sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="space-y-5 text-sm leading-8 text-cream/80 sm:text-base">{children}</div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-3 pl-6 text-cream/80 marker:text-primary">{children}</ul>;
}

export function LegalGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}