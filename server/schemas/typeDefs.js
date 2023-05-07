const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    books: [Book]!
  }

  type Book {
    _id: ID
    bookText: String
    bookAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookText: String!, bookAuthor: String!): Book
    addComment(bookId: ID!, commentText: String!, commentAuthor: String!): Book
    removeBook(bookId: ID!): Book
    removeComment(bookId: ID!, commentId: ID!): Book
  }
`;

module.exports = typeDefs;
