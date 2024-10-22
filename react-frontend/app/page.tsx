import type { Metadata } from "next";
import PropertyList from '../components/PropertyList';

export const metadata: Metadata = {
  title: "Zillow Clone",
  description: "A modern real estate platform built with Next.js and WordPress",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Find your place</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Real Estate & Homes For Sale</h2>
          <div className="flex gap-4">
            <select className="px-3 py-2 border rounded-md text-sm">
              <option>Sort: Newest</option>
              <option>Price (High to Low)</option>
              <option>Price (Low to High)</option>
            </select>
          </div>
        </div>
        <PropertyList />
      </main>
    </div>
  );
}