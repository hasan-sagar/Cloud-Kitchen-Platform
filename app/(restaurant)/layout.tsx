import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Cloud Eats - Best homemade food",
  description:
    "Fresh, homemade meals from local cooks. Cloud Eats delivers comforting home-style dishes to your door—fast, real ingredients, fair prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
