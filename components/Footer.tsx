import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">HatHaven</h3>
            <p className="text-gray-600">Quality hats for every occasion.</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-600 hover:text-gray-900 transition-colors">Shop</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3">Connect</h4>
            {/* Add social media icons or links here */}
            <p className="text-gray-600">Follow us on social media for updates.</p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">&copy; ${new Date().getFullYear()} HatHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

