import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next WH App",
  description: "Next warehouse app",
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
