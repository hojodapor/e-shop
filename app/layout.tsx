import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Home/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/Home/Footer";
import StoreProvider from "../StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online shop",
  description: "E-commerce shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
