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
  title: "WeBhavnagar — AI & Digital Solutions for Gujarat Businesses",
  description: "Your Digital Partner for Sustainable Business Growth. AI automation, websites, CRM, WhatsApp Business — everything your business needs in one place.",
  keywords: ["AI automation Gujarat", "digital solutions Bhavnagar", "WhatsApp Business API Gujarat", "CRM for small business", "website development Gujarat"],
  openGraph: {
    title: "WeBhavnagar — AI & Digital Solutions",
    description: "Your Digital Partner for Sustainable Business Growth in Gujarat.",
    url: "https://webhavnagar.com",
    siteName: "WeBhavnagar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WeBhavnagar",
    description: "AI & Digital Solutions for Gujarat Businesses.",
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
