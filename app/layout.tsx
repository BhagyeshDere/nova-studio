import "./globals.css";
import type { Metadata, Viewport } from "next";
import ClientLayout from "./ClientLayout";

/* ============================
   SEO + META
============================ */
export const metadata: Metadata = {
  title: {
    default: "QIRO TECH",
    template: "%s | QIRO TECH",
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

  authors: [{ name: "QIRO TECH" }],

  openGraph: {
    title: "QIRO TECH",
    description: "Designing identity, experience & presence.",
    siteName: "QIRO TECH",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "QIRO TECH",
    description: "Designing identity, experience & presence.",
  },

  /* ✅ Bigger & sharper icons */
  icons: {
    icon: [
      { url: "/favicon2.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

/* ============================
   VIEWPORT
============================ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#071A1F",
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
    <html
      lang="en"
      suppressHydrationWarning
      className="
        w-full
        max-w-[100vw]
        overflow-x-hidden
      "
    >
      <body
        className="
          min-h-[100dvh]
          w-full
          max-w-[100vw]
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
