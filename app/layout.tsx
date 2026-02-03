import "./globals.css";
import type { Metadata, Viewport } from "next";
import ClientLayout from "./ClientLayout";

/* ============================
   SEO + META
============================ */
export const metadata: Metadata = {
  title: {
    default: "NOVA Studio",
    template: "%s | NOVA Studio",
  },
  description: "Designing identity, experience & presence.",

  keywords: [
    "Design Studio",
    "UI UX Design",
    "Brand Identity",
    "Web Design",
    "Creative Studio",
    "NOVA Studio",
  ],

  authors: [{ name: "NOVA Studio" }],

  openGraph: {
    title: "NOVA Studio",
    description: "Designing identity, experience & presence.",
    siteName: "NOVA Studio",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "NOVA Studio",
    description: "Designing identity, experience & presence.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* ============================
   VIEWPORT
============================ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#071A1F", // brand color
};

/* ============================
   ROOT LAYOUT
============================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          min-h-screen
          overflow-x-hidden
          antialiased
          bg-white
          text-black
        "
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
