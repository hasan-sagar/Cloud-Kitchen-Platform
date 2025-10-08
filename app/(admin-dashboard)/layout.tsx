"use client";
import dynamic from "next/dynamic";
import React from "react";

const DashboardLayout = dynamic(
  () => import("@/components/Admin/DashboardLayout"),
  { ssr: false }
);

interface SimpleLayoutProps {
  children: React.ReactNode;
}

export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <React.Fragment>
      <DashboardLayout>{children}</DashboardLayout>
    </React.Fragment>
  );
}