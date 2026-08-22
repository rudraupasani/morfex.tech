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
    default: "Morfex Technologies — Software Studio",
    template: "%s | Morfex Technologies",
  },

  description:
    "Morfex Technologies is a software studio building web applications, SaaS platforms, AI tools and digital products engineered for speed, clarity and longevity.",

  keywords: [
    "Morfex Technologies",
    "Software Studio",
    "Web Development",
    "Next.js Developer",
    "React Developer",
    "AI Web Apps",
    "SaaS Development",
    "Frontend Developer",
    "Full Stack Developer",
    "Website Development India",
  ],

  authors: [{ name: "Rudra Upasani" }],
  creator: "Rudra Upasani",

  openGraph: {
    title: "Morfex Technologies — Software Studio",
    description:
      "Building web applications, SaaS platforms and AI-powered digital products with precision.",
    url: "https://morfex.vercel.app",
    siteName: "Morfex Technologies",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Morfex Technologies" }],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Morfex Technologies — Software Studio",
    description: "Modern web development, SaaS and AI tools built with React, Next.js and Node.js.",
    images: ["/og-image.png"],
  },

  robots: { index: true, follow: true },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Dark mode hydration — prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('morfex-theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
