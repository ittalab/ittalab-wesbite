import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Ittalab — App Studio",
    template: "%s — Ittalab",
  },
  description: "From Concept to App Store.",
  metadataBase: new URL("https://ittalab.com"),
  openGraph: {
    siteName: "Ittalab",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[syne.variable, dmSans.variable, jetbrainsMono.variable].join(" ")}
    >
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 lg:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}