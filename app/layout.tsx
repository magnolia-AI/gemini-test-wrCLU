import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hat Store",
  description: "A modern storefront for selling hats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Hat Store</Link>
            <ul className="flex space-x-4">
              <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Hat Store. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

