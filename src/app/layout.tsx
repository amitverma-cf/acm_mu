import type { Metadata } from "next";
import { Bricolage_Grotesque, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACM chapter at MU",
  description: "ACM chapter at MU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${darkerGrotesque.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
