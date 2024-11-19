import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Phanuphat (Oad) Srisukhawasu",
  description: `I'm Phanuphat "Oad" Srisukhawasu, a Computer Science undergraduate at
          National University of Singapore. Right now, I'm focused on two things
          I enjoy: improving everyday processes to make them faster and more
          fun, and creating interactive tools that make learning engaging and
          exciting for others.`,
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
