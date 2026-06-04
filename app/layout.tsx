// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import siteMetadata from "./metadata.json"; 
import UiLayoutShell from "./components/UiLayoutShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: siteMetadata.title,
//   description: siteMetadata.description,
// };

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
      <body className="min-h-full bg-[#fffef7] text-primary-brand select-none overflow-x-hidden">
        {/* The Shell provides Navbar, Footer, and the Booking state to ALL pages */}
        <UiLayoutShell>
          {children}
        </UiLayoutShell>
      </body>
    </html>
  );
}