import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "家計簿アプリ",
  description: "家計を簡単に管理するアプリケーション。",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
