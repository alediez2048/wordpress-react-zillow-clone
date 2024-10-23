'use client';

import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import PropertyModal from './PropertyModal';

const TEST_QUERY = gql`
  query TestQuery {
    posts {
      nodes {
        id
        title
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default function PropertyList() {
  const { loading, error, data } = useQuery(TEST_QUERY);
  const [selectedProperty, setSelectedProperty] = useState(null);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-gray-100 rounded-lg h-80"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 rounded-lg">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.posts?.nodes.map((property) => {
          const price = property.content?.match(/Price: \$([0-9,]+)/)?.[1] || '0';
          const details = {
            beds: property.content?.match(/Bedrooms: (\d+)/)?.[1] || '0',
            baths: property.content?.match(/Bathrooms: (\d+)/)?.[1] || '0',
            sqft: property.content?.match(/Square Feet: ([0-9,]+)/)?.[1] || '0',
          };

          return (
            <div 
              key={property.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProperty(property)}
            >
              {/* Property Card Content (same as before) */}
              <div className="relative h-48 bg-gray-200">
                {property.featuredImage ? (
                  <img
                    src={property.featuredImage.node.sourceUrl}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  ${Number(price).toLocaleString()}
                </div>

                <div className="flex items-center gap-4 text-gray-600 mb-3">
                  <span>{details.beds} bd</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{details.baths} ba</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{Number(details.sqft).toLocaleString()} sqft</span>
                </div>

                <h3 className="font-medium text-gray-900 mb-1">{property.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          isOpen={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </>
  );
}