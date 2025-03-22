import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Sommaire AI - Your Intelligent PDF Summarizer",
  description:
    "Experience the power of AI with Sommaire AI, the ultimate tool for summarizing PDF documents effortlessly and accurately.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
