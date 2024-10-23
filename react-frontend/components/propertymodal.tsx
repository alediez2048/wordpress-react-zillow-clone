'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Property {
  id: string;
  title: string;
  date: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

interface PropertyModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isOpen) return null;

  const details = {
    beds: property.content?.match(/Bedrooms: (\d+)/)?.[1] || '0',
    baths: property.content?.match(/Bathrooms: (\d+)/)?.[1] || '0',
    sqft: property.content?.match(/Square Feet: ([0-9,]+)/)?.[1] || '0',
    price: property.content?.match(/Price: \$([0-9,]+)/)?.[1] || '0',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 z-10"
          >
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/3 bg-gray-200 relative h-72 md:h-[500px]">
              {property.featuredImage ? (
                <div className="relative w-full h-full">
                  <Image
                    src={property.featuredImage.node.sourceUrl}
                    alt={property.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="md:w-1/3 p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  ${Number(details.price).toLocaleString()}
                </h2>
                <p className="text-lg text-gray-600">
                  {details.beds} bd | {details.baths} ba | {Number(details.sqft).toLocaleString()} sqft
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">{property.title}</h3>

              <div className="space-y-4">
                {/* Property Details */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Property Details</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• {details.beds} Bedrooms</li>
                    <li>• {details.baths} Bathrooms</li>
                    <li>• {Number(details.sqft).toLocaleString()} Square Feet</li>
                    {isClient && (
                      <li>• Listed on {formatDate(property.date)}</li>
                    )}
                  </ul>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Contact Agent
                  </button>
                  <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}