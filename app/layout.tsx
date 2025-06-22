import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Porsche Site | Muhammed Sanjid",
  description: "Porsche Site by muhammed sanjid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <PorscheDesignSystemProvider>
          {children}
          <Analytics />
        </PorscheDesignSystemProvider>
      </body>
    </html>
  );
}
