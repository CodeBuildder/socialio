# Social Media GraphQL API

This project implements a GraphQL API for a social media application. It features a comprehensive schema that enables users to interact with the platform in various ways, such as posting content, commenting, liking posts, and much more. The backend is powered by Apollo Server and uses Neo4j as the graph database for data storage and retrieval.

## Features

- User authentication and profile management
- Creation of posts with text content and media (photos and videos)
- Commenting on and liking posts and comments
- Following users and managing followers
- Sending and receiving direct messages
- Group functionalities including creating groups, joining and leaving groups, and group privacy settings
- User device registration for push notifications
- Reporting inappropriate content
- Blocking and unblocking users
- Bookmarking posts for later viewing
- Tagging system for posts

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (version 6 or higher) or Yarn (version 1.22 or higher)
- Neo4j database instance accessible

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeBuildder/socialio.git
   cd social-media-graphql-api
   ```

2. Install NPM packages:
   ```bash
   npm install
   ```

3. Configure your environment variables in a `.env` file at the root of the project:

4. Start the GraphQL server:
   ```bash
   npm run start
   ```

## Usage

Access the GraphQL playground at `http://localhost:4000/` to start making queries and mutations.

Example mutation to create a user:

```graphql
mutation {
  createUser(input: {
    userName: "johndoe",
    userEmail: "john.doe@example.com",
    userPasswordHash: "securepasswordhash",
    userCreated: "2024-01-01T00:00:00.000Z",
    userLastLogin: "2024-01-02T12:00:00.000Z"
  }) {
    userId
    userName
  }
}
```

## Contributing

If you have a feature request or bug report, please feel free to open an issue or create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add some YourFeature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

- Kaushik Kumaran - [me@kaushikk.dev](me@kaushikk.dev)
- Project Link: [https://github.com/CodeBuildder/socialio](https://github.com/CodeBuildder/socialio/new/main)
- Know more about me @ [kaushikk.dev](https://kaushikk.dev/)

## Acknowledgements

- [Neo4j](https://neo4j.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Node.js](https://nodejs.org/)
