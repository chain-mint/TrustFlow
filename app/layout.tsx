import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { NetworkError } from "@/components/web3/NetworkError";

// Lazy load modals for code splitting
const DonateModal = dynamic(() => import("@/components/donation/DonateModal").then((mod) => ({ default: mod.DonateModal })), {
  ssr: false,
});

const CreateProjectModal = dynamic(() => import("@/components/project/CreateProjectModal").then((mod) => ({ default: mod.CreateProjectModal })), {
  ssr: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transparent Charity Tracker",
  description: "A transparent blockchain-based charity tracking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <NetworkError />
          <DonateModal />
          <CreateProjectModal />
        </Providers>
      </body>
    </html>
  );
}
