import type { Metadata } from "next";
import Navigation from '../components/Navigation';
import PropertyList from '../components/PropertyList';

export const metadata: Metadata = {
  title: "Zillow Clone",
  description: "A modern real estate platform built with Next.js and WordPress",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Find Your Perfect Rental with Zillow
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover millions of rental listings, personalized searches, and effortless communication with landlords.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters and Sort */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Real Estate & Homes For Sale
            </h2>
            <div className="flex gap-4">
              <select className="px-3 py-2 border rounded-md text-sm">
                <option>Price (Any)</option>
                <option>Under $200k</option>
                <option>$200k-$400k</option>
                <option>$400k+</option>
              </select>
              <select className="px-3 py-2 border rounded-md text-sm">
                <option>Beds & Baths</option>
                <option>1+ bed</option>
                <option>2+ beds</option>
                <option>3+ beds</option>
              </select>
              <select className="px-3 py-2 border rounded-md text-sm">
                <option>Sort: Newest</option>
                <option>Price (High to Low)</option>
                <option>Price (Low to High)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Property Listings */}
        <PropertyList />

        {/* Features Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Why Choose Zillow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-bold mb-2">Advanced Search</h3>
              <p className="text-gray-600">Find the right property with our powerful search filters.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-bold mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">Get instant notifications for new listings.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-bold mb-2">Trusted Platform</h3>
              <p className="text-gray-600">Join millions of users finding their perfect home.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home Buying</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Mortgage Calculator</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Zillow Offers</a></li>
              </ul>
            </div>
            {/* Add more footer sections as needed */}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Zillow Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}