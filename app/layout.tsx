import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ohweego",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-main-bg-color text-white">{children}</body>
    </html>
  );
}
