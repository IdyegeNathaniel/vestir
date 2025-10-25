import type { Metadata } from "next";
import { Quintessential, Inter} from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

const quintessential = Quintessential({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quintessential',
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vestir: Your Fave's Shop",
  description: "Your Fave's Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quintessential.variable}>
      <body
        className={`${inter.variable} antialiased`}
        style={{ backgroundColor: '#f3f3f3ff' }}
      >
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
