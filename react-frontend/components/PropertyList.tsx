'use client';

import { useQuery, gql } from '@apollo/client';

const TEST_QUERY = gql`
  query TestQuery {
    posts {
      nodes {
        id
        title
        date
      }
    }
  }
`;

export default function PropertyList() {
  const { loading, error, data } = useQuery(TEST_QUERY);

  console.log('Loading:', loading);
  console.log('Error:', error);
  console.log('Data:', data);

  if (loading) {
    return (
      <div className="p-4 bg-blue-50 rounded">
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-500 rounded">
        <p>Error: {error.message}</p>
        <pre className="mt-2 text-sm">{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {data?.posts?.nodes.map((post: any) => (
        <div key={post.id} className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600 text-sm">
            Published: {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}