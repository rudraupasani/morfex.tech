import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://morfex.vercel.app"),

  title: {
    default: "Morfex Technologies | Web Development, AI Tools & SaaS Solutions",
    template: "%s | Morfex Technologies",
  },

  description:
    "Morfex Technologies builds modern websites, AI-powered tools, SaaS platforms, and high-performance web applications using React, Next.js, Node.js, and modern technologies.",

  keywords: [
    "Morfex Technologies",
    "Web Development",
    "Next.js Developer",
    "React Developer",
    "AI Web Apps",
    "SaaS Development",
    "Frontend Developer",
    "Full Stack Developer",
    "Website Development India",
    "Modern Web Applications"
  ],

  authors: [{ name: "Rudra Upasani" }],

  creator: "Rudra Upasani",

  openGraph: {
    title: "Morfex Technologies",
    description:
      "Building modern websites, SaaS platforms and AI-powered web applications with cutting-edge technologies.",
    url: "https://morfex.vercel.app",
    siteName: "Morfex Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Morfex Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Morfex Technologies",
    description:
      "Modern web development, SaaS platforms and AI tools built with React, Next.js and Node.js.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
