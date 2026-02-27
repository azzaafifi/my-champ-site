import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import React from "react";

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
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}