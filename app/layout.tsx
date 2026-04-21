import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Martin's Wine List — Web Preview",
  description: "Fidelity-first web recreation of the St. Martin's Wine Bistro printed wine list.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="zoom-restore" strategy="beforeInteractive">{`
          try {
            var mode = localStorage.getItem("stmZoomMode");
            if (mode === "actual") document.documentElement.setAttribute("data-zoom", "actual");
          } catch (e) {}
        `}</Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
