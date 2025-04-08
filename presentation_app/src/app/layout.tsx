import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Presentation App",
  description: "A powerful presentation tool for creating stunning slides.",
  keywords: "presentation, slides, app, create presentations, next.js app",
  openGraph: {
    title: "Presentation App",
    description: "A powerful presentation tool for creating stunning slides.",
    siteName: "Presentation App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presentation App",
    description: "Create beautiful presentations with ease.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
