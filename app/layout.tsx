import ContactModal from "@/components/ContactModal";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { i } from "framer-motion/client";
import React from "react";
import Link from "next/link";
import About from "@/components/AboutSection";


export const metadata = {
  title: "Champ Studio",
  description: "Creative Studio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <ContactModal />
        

      
        

      </body>
    </html>
  );
}

