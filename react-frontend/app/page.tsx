'use client';

import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';

const GET_PROPERTIES = gql`
  query GetProperties {
    posts {
      nodes {
        id
        title
        content
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

// Helper function to extract property details from content
const extractPropertyDetails = (content: string) => {
  const priceMatch = content.match(/Price: \$([0-9,]+)/);
  const bedroomsMatch = content.match(/Bedrooms: (\d+)/);
  const bathroomsMatch = content.match(/Bathrooms: (\d+)/);
  const sqftMatch = content.match(/Square Feet: ([0-9,]+)/);

  return {
    price: priceMatch ? priceMatch[1] : '',
    bedrooms: bedroomsMatch ? bedroomsMatch[1] : '',
    bathrooms: bathroomsMatch ? bathroomsMatch[1] : '',
    sqft: sqftMatch ? sqftMatch[1] : ''
  };
};

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_PROPERTIES);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Error loading properties: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find your dream home</h1>
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <input 
              type="text" 
              placeholder="Enter an address, city, or ZIP code"
              className="w-full p-3 text-gray-900 rounded border focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Properties for Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.posts.nodes.map((property: any) => {
            const details = extractPropertyDetails(property.content);

            return (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {property.featuredImage?.node?.sourceUrl && (
                  <div className="relative h-48">
                    <img
                      src={property.featuredImage.node.sourceUrl}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">${details.price}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="mr-4">{details.bedrooms} bd</span>
                    <span className="mr-4">{details.bathrooms} ba</span>
                    <span>{details.sqft} sqft</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {property.categories.nodes.map((category: any) => (
                      <span 
                        key={category.name}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}