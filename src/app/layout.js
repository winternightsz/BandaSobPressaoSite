import { Inter } from "next/font/google";
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Band",
  description: "Site da banda Sob Pressão",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}




