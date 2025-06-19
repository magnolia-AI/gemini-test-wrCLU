import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            HatHaven
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/shop" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors">
              <User className="h-6 w-6 text-gray-600" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

