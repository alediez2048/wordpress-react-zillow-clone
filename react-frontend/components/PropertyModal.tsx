// components/PropertyModal.tsx
'use client';

import { Property } from '../types/property';
import Image from 'next/image';

interface PropertyModalProps {
  property: any;
  details: {
    price: string;
    beds: string;
    baths: string;
    sqft: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyModal({ property, details, isOpen, onClose }: PropertyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        >
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3">
              {property.featuredImage?.node?.sourceUrl ? (
                <div className="relative h-96">
                  <Image
                    src={property.featuredImage.node.sourceUrl}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>

            <div className="md:w-1/3 p-6">
              <h2 className="text-2xl font-bold text-black mb-4">{property.title}</h2>
              <div className="mb-6">
                <p className="text-3xl font-bold text-blue-600">
                  ${parseInt(details.price).toLocaleString()}
                </p>
                <p className="text-lg text-gray-600">
                  {details.beds} beds • {details.baths} baths • {parseInt(details.sqft).toLocaleString()} sqft
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Property Details</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium">Single Family</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Year Built</span>
                      <span className="font-medium">2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Price/sqft</span>
                      <span className="font-medium">
                        ${Math.round(parseInt(details.price) / parseInt(details.sqft)).toLocaleString()}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Agent
                  </button>
                  <button className="w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Save Property
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