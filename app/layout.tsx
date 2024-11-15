import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Phanuphat (Oad) Srisukhawasu",
  description: `I'm Phanuphat "Oad" Srisukhawasu, a Computer Science undergraduate at the National University of Singapore. Join me as I explore the world of matrix computation, parallel computing, and creating interactive tools to enhance education!`,
  keywords: [
    "Portfolio",
    "Software Engineer",
    "Web Development",
    "Functional Programming",
    "Machine Learning",
    "Performance Optimization",
    "Oad",
    "Phanuphat Srisukhawasu",
    "Numerical Linear Algebra",
    "Deep Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
