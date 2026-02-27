import React from "react";

export const metadata = {
  title: "Admin Login | Champ Studio",
  description: "Admin login",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)]">
      {children}
    </div>
  );
}