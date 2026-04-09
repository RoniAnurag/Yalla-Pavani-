import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script'; // 1. Import the Script component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yalla Pavani | Portfolio',
  description: 'High-end scrollytelling personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 2. Paste the AdSense script here inside the head tag */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9566685609954398"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
