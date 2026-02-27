"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import ContactModal from "./ContactModal";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <ContactModal />}
    </>
  );
}