import val from "../db/dataval.js";
import timestamp from "time-stamp";

export const resolvers = {
  Query: {
    users() {
      return val.users;
    },
    user(_, args) {
      return val.users.find((user) => user.id === args.id);
    },
    posts() {
      return val.posts;
    },
    post(_, args) {
      return val.posts.find((post) => post.id === args.id);
    },
    comments() {
      return val.comments;
    },
    comment(_, args) {
      return val.comments.find((comment) => comment.id === args.id);
    },
  },
  User: {
    posts(parent) {
      return val.posts.filter((post) => post.userId === parent.id);
    },
  },
  Post: {
    comments(parent) {
      return val.comments.filter((comment) => comment.postId === parent.id);
    },
    user(parent) {
      return val.users.find((user) => user.id === parent.userId);
    },
  },
  Comment: {
    post(parent) {
      return val.posts.find((post) => post.id === parent.postId);
    },
    user(parent) {
      return val.users.find((user) => user.id === parent.userId);
    },
  },
  Mutation: {
    addUser(_, args) {
      let user = {
        ...args.user,
        id: Math.floor(Math.random() * 10000).toString(),
        userCreated: timestamp("MM-DD-YYYYTmm:ss:msZ"),
      };
      val.users.push(user);
      return user;
    },
    deleteUser(_, args) {
      val.users = val.users.filter((user) => user.id !== args.id);
      return val.users;
    },
    updateUser(_, args) {
      val.users = val.users.map((user) => {
        if (user.id === args.id) {
          return { ...user, ...args.updates };
        }
        return user;
      });
      return val.users.find((user) => user.id === args.id);
    },
  },
};
