import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Make a shirt",
  description: "What does that shirt look like?!",
};

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
