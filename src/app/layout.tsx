import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Serendale.ai — AI-based Blockchain Platform",
  description:
    "Fast blockchain with 120K TPS and AI-based data security. Proof of Stake consensus algorithm enables unlimited speeds.",
  openGraph: {
    title: "Serendale.ai — AI-based Blockchain Platform",
    description: "Fast blockchain with 120K TPS and AI-based data security.",
    url: "https://serendale.ai",
    siteName: "Serendale.ai",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0f] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}