import "./globals.css";
import { Inter } from "next/font/google";
import LayoutWrapper from "@/flat/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Senec - Premium Startup Development Studio",
  description:
    "Specializing in MVP development, post-MVP development, and scaling for early-stage startups. Leveraging unique tools like ThriftMVP and Senec.ai, we transform funded concepts into profitable ventures.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

export default RootLayout;
