import { AuthHeader } from "@/components/AuthHeader";
import { Metadata } from "next";
import { Inter, Quintessential } from "next/font/google";
import "../globals.css";


const quintessential = Quintessential({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quintessential",
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vestir | Welcome to Vestir",
  description: "Welcome to vestir | Men's ashion Store",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={quintessential.variable}>
      <body className={`${inter.variable} antialiased`}>
        <AuthHeader />
          {children}
      </body>
    </html>
  );
}
