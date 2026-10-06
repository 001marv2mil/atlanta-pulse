"use client";

import FloatingNav from "@/components/FloatingNav";
import FooterWrapper from "@/components/FooterWrapper";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FloatingNav />
      <main>{children}</main>
      <FooterWrapper />
    </>
  );
}
