import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chivez FOKAM BEKO | Portfolio",
  description:
    "Portfolio professionnel de Chivez FOKAM BEKO — Comptabilité, Finance, Contrôle et Audit.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}