import type { Metadata } from "next";
import Navigation from '../components/navigation';
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
      <div className="bg-blue-900 text-white mb-16">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 text-white">
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters and Sort */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <h2 className="text-xl font-semibold text-black">
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
        <div className="mb-24">
          <PropertyList />
        </div>

        {/* How It Works Section */}
        <section className="py-24 bg-white mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">How Zillow Rentals Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Search Rentals", description: "Input your preferences and explore the largest rental database." },
                { step: 2, title: "Connect with Landlords", description: "Send inquiries and set up viewings directly through the app." },
                { step: 3, title: "Secure Your Rental", description: "Apply and manage all documents securely within the app." },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="mt-4 w-full h-48 bg-gray-100 rounded-lg shadow flex items-center justify-center">
                    <span className="text-gray-400">Step {step.step} Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Testimonials Section */}
        <section className="py-24 bg-gray-50 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">What Our Users Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah L.", review: "Zillow Rentals made finding my new apartment a breeze. The notifications were spot-on, and I could message the landlord directly through the app!" },
                { name: "Mike T.", review: "I love how easy it is to filter rentals based on my exact needs. Found my dream place in just a few days!" },
                { name: "Emily R.", review: "The map feature is fantastic! It helped me find a great neighborhood that I wouldn&apos;t have considered otherwise." },
                ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-2xl font-bold">4.8 out of 5 stars</p>
              <p className="text-gray-600">Based on 10,000+ reviews</p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-24 bg-white mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">See Zillow Rentals in Action</h2>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-gray-400">Video Placeholder</span>
              </div>
              <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Watch the Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {[
                { question: "How does Zillow Rentals keep listings up to date?", answer: "Our advanced algorithms and partnerships with property managers ensure that listings are constantly updated in real-time." },
                { question: "Can I apply for a rental directly through the app?", answer: "Yes, you can submit rental applications directly through the Zillow Rentals app for many listings." },
                { question: "Is there a fee to use Zillow Rentals?", answer: "No, the Zillow Rentals app is free to download and use for searching and contacting landlords." },
              ].map((faq, index) => (
                <div key={index} className="mb-8 bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-blue-600 text-white mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Find Your Next Home?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're searching for your next home or managing rental payments, Zillow Rentals has everything you need in one app. Download now and take the hassle out of renting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Download on the App Store
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Get it on Google Play
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 mb-24">
          <h2 className="text-2xl font-bold mb-12 text-black">Why Choose Zillow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="font-bold mb-4 text-black">Advanced Search</h3>
              <p className="text-gray-600">Find the right property with our powerful search filters.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="font-bold mb-4 text-black">Real-Time Updates</h3>
              <p className="text-gray-600">Get instant notifications for new listings.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="font-bold mb-4 text-black">Trusted Platform</h3>
              <p className="text-gray-600">Join millions of users finding their perfect home.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-white">Quick Links</h3>
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
