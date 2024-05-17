import "./globals.css";
import { Inter } from "next/font/google";
import LayoutWrapper from "@/flat/LayoutWrapper";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Senec - Marketplace Development Studio",
  description:
    "Specializing in marketplace development and scaling for early-stage startups. We transform marketplace ideas into profitable ventures.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
