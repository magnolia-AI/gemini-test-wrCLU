\
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hat Store",
  description: "The best hats on the internet!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center space-x-2">
              <HatIcon className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">HatHaven</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link className="text-gray-600 hover:text-purple-600 transition-colors" href="/">
                Home
              </Link>
              <Link className="text-gray-600 hover:text-purple-600 transition-colors" href="/shop">
                Shop
              </Link>
              <Link className="text-gray-600 hover:text-purple-600 transition-colors" href="/about">
                About
              </Link>
              <Link className="text-gray-600 hover:text-purple-600 transition-colors" href="/contact">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-purple-600 transition-colors" />
                <Badge variant="destructive" className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs">3</Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6 text-gray-600 hover:text-purple-600 transition-colors" />
              </Button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="py-8 bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-6 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} HatHaven. All rights reserved.</p>
            <p className="mt-1">
              Designed with <span className="text-purple-600">&hearts;</span> by Your Awesome AI Assistant
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Placeholder HatIcon - replace with an actual icon if you have one
function HatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" />
      <path d="M19.5 12c-2.48 0-4.5 2.02-4.5 4.5V22h-6v-5.5c0-2.48-2.02-4.5-4.5-4.5" />
    </svg>
  );
}

