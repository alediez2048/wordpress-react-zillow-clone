// components/Navigation.tsx
'use client';

export default function Navigation() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              {/* Logo */}
              <span className="text-blue-600 text-2xl font-bold">Zillow</span>
            </div>
            {/* Navigation */}
            <nav>
              <ul className="flex space-x-8">
                <li><a href="#buy" className="text-gray-600 hover:text-gray-900">Buy</a></li>
                <li><a href="#rent" className="text-gray-600 hover:text-gray-900">Rent</a></li>
                <li><a href="#sell" className="text-gray-600 hover:text-gray-900">Sell</a></li>
                <li><a href="#home-loans" className="text-gray-600 hover:text-gray-900">Home Loans</a></li>
              </ul>
            </nav>
          </div>
          <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}