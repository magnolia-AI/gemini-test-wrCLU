import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-white dark:bg-gray-950 shadow-sm">
      <Link className="flex items-center justify-center" href="/">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Hat Store
        </span>
      </Link>
      <nav className="flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
          href="#"
        >
          Hats
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
          href="#"
        >
          Contact
        </Link>
      </nav>
      <Button variant="ghost" size="icon">
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Shopping Cart</span>
      </Button>
    </header>
  );
}

