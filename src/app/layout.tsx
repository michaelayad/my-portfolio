import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Mode from "./mode";
import { ToastProvider } from "@/providers/toastProvider";

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
    <html lang="en" className={clsx("select-none")}>
      <body className={` ${kodeMono.variable} ${inter.variable} min-h-screen`}>
        <Mode/>
        {children}
        <ToastProvider/>
      </body>
    </html>
  );
}
