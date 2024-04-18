import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Neo4jGraphQL } from "@neo4j/graphql";
import neo4j from "neo4j-driver";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 4000;

const typeDefs = `#graphql
type User {
  userId: ID!
  userName: String!
  userEmail: String!
  userPasswordHash: String!
  userCreated: String!
  userLastLogin: String!
  posts: [Post]
  likes: [Like]
  comments: [Comment]
  followers: [Follower]
  following: [Follower]
  messages: [Message]
  reports: [Report]
  userAuth: UserAuth
  groupMembers: [GroupMember]
  devices: [Device]
  bookmarks: [Bookmark]
  blockList: [BlockList]
}

type Post {
  postId: ID!
  postContent: String
  postCreated: String!
  postUpdated: String
  location: String
  user: User!
  comments: [Comment]
  likes: [Like]
  tags: [Tag]
  reposts: [Repost]
  bookmarks: [Bookmark]
  mentions: [Mention]
}

type Comment {
  commentId: ID!
  content: String
  created: String!
  post: Post!
  likes: [CommentLike]
  replies: [CommentReply]
}

type Like {
  likeId: ID!
  userId: ID!
  postId: ID!
}

type Repost {
  repostId: ID!
  repostContent: String
  created: String!
  post: Post!
  user: User!
}

type Bookmark {
  bookmarkId: ID!
  postId: ID!
  userId: ID!
  created: String!
}

type Follower {
  followerId: ID!
  userId: ID!
  followerUserId: ID!
  created: String!
}

type Message {
  messageId: ID!
  content: String
  sentByUserId: ID!
  sentToUserId: ID!
  sentAt: String!
}

type Report {
  reportId: ID!
  content: String
  reportedByUserId: ID!
  reportedUserId: ID!
  createdAt: String!
}

type UserAuth {
  authId: ID!
  userId: ID!
  authToken: String!
  lastLogin: String!
}

type Group {
  groupId: ID!
  groupName: String!
  created: String!
  createdByUserId: ID!
  privacy: String!
  members: [GroupMember]
}

type GroupMember {
  groupMemberId: ID!
  groupId: ID!
  userId: ID!
  joined: String!
}

type Device {
  deviceId: ID!
  userId: ID!
  deviceType: String!
  deviceToken: String!
  createdAt: String!
}

type CommentLike {
  commentLikeId: ID!
  userId: ID!
  commentId: ID!
}

type CommentReply {
  commentReplyId: ID!
  content: String
  created: String!
  originalCommentId: ID!
  replyByUserId: ID!
}

type Tag {
  tagId: ID!
  label: String!
  postId: ID!
}

type BlockList {
  blockId: ID!
  blockedByUserId: ID!
  blockedUserId: ID!
  createdAt: String!
}

type Mention {
  mentionId: ID!
  mentionedUserId: ID!
  postId: ID!
  createdAt: String!
}

`;

const driver = neo4j.driver(
  "neo4j+s://7b06a2cb.databases.neo4j.io",
  neo4j.auth.basic("neo4j", "sccioIgh-VDg_gjJr93nHFGDgngqXRoA602N_MlOMx0")
);
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

async function startServer() {
  const server = new ApolloServer({
    schema: await neoSchema.getSchema(),
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Wakey Wakey kk, your server is ready at port ${port}`);
}

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
