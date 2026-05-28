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
  title: "WeBhavnagar — Premium Web Solutions for Bhavnagar & Beyond",
  description: "Built by Bhavnagaris, for Bhavnagar. Premium web design & development for Havnagar businesses. Fast, beautiful websites that convert.",
  keywords: ["web design", "Bhavnagar", "Havnagar", "Gujarat", "website development", "Next.js"],
  openGraph: {
    title: "WeBhavnagar — Premium Web Solutions",
    description: "Built by Bhavnagaris, for Bhavnagar.",
    url: "https://webhavnagar.com",
    siteName: "WeBhavnagar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WeBhavnagar",
    description: "Built by Bhavnagaris, for Bhavnagar.",
    creator: "@WeBhavnagar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
