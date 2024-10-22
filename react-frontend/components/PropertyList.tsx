'use client';

import { useQuery, gql } from '@apollo/client';

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

// Helper function to extract price from content
const extractPrice = (content: string) => {
  const priceMatch = content.match(/Price: \$([0-9,]+)/);
  return priceMatch ? priceMatch[1] : '0';
};

// Helper function to extract beds/baths from content
const extractDetails = (content: string) => {
  const bedsMatch = content.match(/Bedrooms: (\d+)/);
  const bathsMatch = content.match(/Bathrooms: (\d+)/);
  const sqftMatch = content.match(/Square Feet: ([0-9,]+)/);

  return {
    beds: bedsMatch ? bedsMatch[1] : '0',
    baths: bathsMatch ? bathsMatch[1] : '0',
    sqft: sqftMatch ? sqftMatch[1] : '0'
  };
};

export default function PropertyList() {
  const { loading, error, data } = useQuery(TEST_QUERY);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.posts?.nodes.map((property: any) => {
        const price = extractPrice(property.content || '');
        const details = extractDetails(property.content || '');
        
        return (
          <div 
            key={property.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            {/* Image Container */}
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
              <div className="absolute top-3 right-3 bg-gray-900/75 text-white px-2 py-1 rounded">
                New
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Price */}
              <div className="text-2xl font-bold text-gray-900 mb-2">
                ${Number(price).toLocaleString()}
              </div>

              {/* Details */}
              <div className="flex items-center gap-4 text-gray-600 mb-3">
                <span>{details.beds} bd</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{details.baths} ba</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{Number(details.sqft).toLocaleString()} sqft</span>
              </div>

              {/* Address */}
              <h3 className="font-medium text-gray-900 mb-1">{property.title}</h3>
              
              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                <span>Listed on {new Date(property.date).toLocaleDateString()}</span>
                <button className="text-blue-600 hover:text-blue-800">Save</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}