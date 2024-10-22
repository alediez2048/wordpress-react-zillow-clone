# WordPress React Zillow Clone

This project is a full-stack application that combines a headless WordPress backend with a React frontend, inspired by Zillow's design and functionality. It demonstrates the power of using WordPress as a content management system (CMS) while leveraging the flexibility and performance of a React-based frontend.

## Project Overview

The application consists of two main parts:
1. A headless WordPress installation that serves as the backend and content management system.
2. A React frontend built with Next.js that consumes data from the WordPress backend via GraphQL.

This architecture allows for a decoupled approach, where content editors can use the familiar WordPress interface while developers can build a fast, modern frontend experience.

## Project Structure

- `wp-headless/`: Contains the WordPress installation
  - Custom post types for landing pages
  - GraphQL API enabled via WPGraphQL plugin
  - Advanced Custom Fields for extended content management
- `react-frontend/`: Contains the React/Next.js frontend application
  - Apollo Client for GraphQL data fetching
  - Tailwind CSS for styling
  - TypeScript for type safety

## WordPress Setup

1. Navigate to the `wp-headless` directory
2. Start the WordPress environment:
   ```
   wp-env start
   ```
3. Access WordPress admin at `http://localhost:8889/wp-admin`
   - Username: `admin`
   - Password: `password`
4. Install and activate the following plugins:
   - WPGraphQL: Exposes WordPress data to GraphQL queries
   - Advanced Custom Fields: Allows for custom fields on posts and pages

### Custom Post Types

The project includes a custom post type for landing pages. This allows for structured content creation specifically tailored for landing pages.

## React Frontend Setup

1. Navigate to the `react-frontend` directory
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Access the React app at `http://localhost:3000`

### Key Frontend Technologies

- Next.js: React framework for server-side rendering and routing
- Apollo Client: GraphQL client for fetching data from WordPress
- Tailwind CSS: Utility-first CSS framework for rapid UI development

## Development Workflow

1. Content Creation:
   - Use the WordPress admin (`http://localhost:8889/wp-admin`) to create and manage content
   - Utilize custom post types and fields for structured content

2. Frontend Development:
   - Develop React components in the `react-frontend/components` directory
   - Use Apollo Client hooks (e.g., `useQuery`) to fetch data from the WordPress GraphQL API
   - Implement Zillow-inspired designs using Tailwind CSS

3. GraphQL Development:
   - Explore available queries and mutations at `http://localhost:8889/graphql`
   - Extend the GraphQL schema as needed using WPGraphQL filters and actions

## Deployment Considerations

- WordPress: Deploy to a standard WordPress hosting environment
- React Frontend: Deploy to a static hosting service (e.g., Vercel, Netlify)
- Ensure CORS is properly configured on the WordPress server to allow requests from the frontend domain

## Notes

- The WordPress GraphQL endpoint is available at `http://localhost:8889/graphql`
- Keep both the WordPress environment and React development server running while working on the project
- Regularly backup your WordPress database and content

## Future Enhancements

- Implement user authentication and protected routes
- Add more Zillow-like features such as property search and favoriting
- Optimize images and implement lazy loading for better performance

## Contributing

Contributions to improve the project are welcome. Please follow these steps:
1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
