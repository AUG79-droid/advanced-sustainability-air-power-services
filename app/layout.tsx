import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advanced Sustainability in Air Power Services",
  description:
    "A complete online specialisation in evidence-based in-service sustainability decisions for Air Power Services.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
