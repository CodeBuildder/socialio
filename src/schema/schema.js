export const typeDefs = `#graphql
type User {
  id: ID! 
  userName: String!
  userEmail: String!
  userPasswordHash: String!
  userCreated: String!
  posts: [Post!]
 
}

type Post {
  id: ID!
  postContent: String!
  postCreated: String!
  user: User!
  comments: [Comment!]
 
}

type Comment {
  id: ID!
  content: String!
  created: String!
  post: Post!
  user: User!

}

type Query {
  posts: [Post]
  post(id: ID!): Post
  users: [User]
  user(id: ID!): User
  comments: [Comment]
  comment(id: ID!): Comment
}

type Mutation {
  addUser(user: AddUser!):  User
  deleteUser (id: ID!): [User]
  updateUser(id: ID!, updates: EditUser!): User
}

input AddUser {
  userName: String!,
  userEmail: String!
  userPasswordHash: String!
}
input EditUser {
  userName: String,
  userEmail: String,
  userPasswordHash: String
}

`;
