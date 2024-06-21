import { Inter } from "next/font/google";
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <link rel="icon" href="favicon.ico" sizes="any" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}




