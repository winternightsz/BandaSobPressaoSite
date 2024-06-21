"use client";
import { Inter } from "next/font/google";
import './globals.css';
import { usePathname } from "next/navigation";
import { isHomePage } from "../utils/utils";
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  
  const pathname = usePathname();
  const homePage = pathname === "/";

  return (
    <html lang="en">
      <body>
        <Header isHomePage={homePage ? "sim" : "nao"}  />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}




