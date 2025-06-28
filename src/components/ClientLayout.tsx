"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (!pathname) return null;

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
