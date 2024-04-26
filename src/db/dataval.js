let users = [
  {
    id: "1",
    userName: "Alice Johnson",
    userEmail: "alice@example.com",
    userPasswordHash: "hashedPasswordAlice123",
    userCreated: "2024-04-25T08:00:00Z",
  },
  {
    id: "2",
    userName: "Bob Smith",
    userEmail: "bosb@example.com",
    userPasswordHash: "hashedPasswordBob123",
    userCreated: "2024-04-26T10:00:00Z",
  },
  {
    id: "3",
    userName: "Bobby Smith",
    userEmail: "bobby@example.com",
    userPasswordHash: "hashedPasswordBob123",
    userCreated: "2024-04-26T11:00:00Z",
  },
  {
    id: "4",
    userName: "Boba Smith",
    userEmail: "boba@example.com",
    userPasswordHash: "hashedPasswordBob123",
    userCreated: "2024-04-26T12:00:00Z",
  },
];

let posts = [
  {
    id: "101",
    postContent: "Hello, this is my first post!",
    postCreated: "2024-04-25T09:00:00Z",
    userId: "1",
  },
  {
    id: "102",
    postContent: "All about GraphQL and Apollo",
    postCreated: "2024-04-26T10:00:00Z",
    userId: "2",
  },
  {
    id: "103",
    postContent: "All about GraphQL and Apollos",
    postCreated: "2024-04-26T10:00:00Z",
    userId: "3",
  },
  {
    id: "105",
    postContent: "All about GraphQLq and Apollo",
    postCreated: "2024-04-26T10:00:00Z",
    userId: "3",
  },
  {
    id: "106",
    postContent: "All about GraphQL and Apollox",
    postCreated: "2024-04-26T10:00:00Z",
    userId: "4",
  },
  {
    id: "104",
    postContent: "All about GraphQL and Apollog",
    postCreated: "2024-04-26T10:00:00Z",
    userId: "4",
  },
];

let comments = [
  {
    id: "201",
    content: "Great post, Alice!",
    created: "2024-04-25T10:30:00Z",
    postId: "101",
    userId: "1",
  },
  {
    id: "202",
    content: "Very informative, thanks for sharing!",
    created: "2024-04-26T11:15:00Z",
    postId: "102",
    userId: "1",
  },
  {
    id: "206",
    content: "Very informative, thanks for sharing!",
    created: "2024-04-26T11:15:00Z",
    postId: "102",
    userId: "2",
  },
  {
    id: "203",
    content: "Very informatinve, thanks for sharing!",
    created: "2024-04-26T11:15:00Z",
    postId: "103",
    userId: "1",
  },
  {
    id: "207",
    content: "Amnzng Info!",
    created: "2024-04-26T11:15:00Z",
    postId: "103",
    userId: "3",
  },
  {
    id: "208",
    content: "Awesome Stuff!",
    created: "2024-04-26T11:15:00Z",
    postId: "103",
    userId: "4",
  },
  {
    id: "204",
    content: "Very informative, thanks for sharing!",
    created: "2024-04-26T11:15:00Z",
    postId: "104",
    userId: "4",
  },
  {
    id: "216",
    content: "Dude! That is littt!",
    created: "2024-04-26T11:15:00Z",
    postId: "105",
    userId: "3",
  },
];

export default { users, posts, comments };
