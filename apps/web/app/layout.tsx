"use client"; // ✅ ADD THIS AT THE VERY TOP

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

// Remove metadata since it doesn't work with 'use client'
// export const metadata: Metadata = {
//   title: "Hassaan Travel",
//   description: "Hassaan Travel",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Hassaan Travel</title>
        <meta name="description" content="Hassaan Travel" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}