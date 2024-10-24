'use client';

import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
import { useState } from 'react';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export default function PropertyList() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [imageLoadError, setImageLoadError] = useState<{[key: string]: boolean}>({});

  const extractDetails = (content: string) => {
    const priceMatch = content.match(/Price:\s*\$([0-9,]+)/);
    const bedroomsMatch = content.match(/Bedrooms:\s*(\d+)/);
    const bathroomsMatch = content.match(/Bathrooms:\s*(\d+)/);
    const sqftMatch = content.match(/Square Feet:\s*([0-9,]+)/);
    
    return {
      price: priceMatch ? priceMatch[1].replace(/,/g, '') : '0',
      beds: bedroomsMatch ? bedroomsMatch[1] : '0',
      baths: bathroomsMatch ? bathroomsMatch[1] : '0',
      sqft: sqftMatch ? sqftMatch[1].replace(/,/g, '') : '0'
    };
  };

  if (loading) {
    return (
      <div className="p-4 bg-blue-50 rounded">
        <p>Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 rounded">
        <h3 className="text-xl font-semibold text-red-700 mb-2">
          Temporarily Unable to Load Properties
        </h3>
        <p className="text-red-600">
          We&apos;re currently experiencing some technical difficulties. 
          Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data?.posts?.nodes.map((post: any) => {
        const details = extractDetails(post.content || '');
        const imageUrl = post?.featuredImage?.node?.sourceUrl;
        const hasImageError = imageLoadError[post.id];
        
        return (
          <div key={post.id} className="border rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="relative w-full h-48">
              {imageUrl && !hasImageError ? (
                <Image
                  src={imageUrl}
                  alt={post?.featuredImage?.node?.altText || post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  onError={() => {
                    console.error('Image load error:', imageUrl);
                    setImageLoadError(prev => ({...prev, [post.id]: true}));
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-black">{post.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">
                ${parseInt(details.price).toLocaleString()}
              </p>
              <p className="text-gray-600">
                {details.beds} bd | {details.baths} ba | {parseInt(details.sqft).toLocaleString()} sqft
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
