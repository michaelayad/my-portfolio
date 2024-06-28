import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {  Kode_Mono  } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});
const kodeMono = Kode_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--kodeMono",
});

export const metadata: Metadata = {
  title: "Maiklelo",
  description: "my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={` ${kodeMono.variable} ${inter.variable} min-h-screen` }>{children}</body>
    </html>
  );
}
