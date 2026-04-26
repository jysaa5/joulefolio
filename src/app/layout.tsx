import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joulefolio",
  description: "Energy portfolio platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
