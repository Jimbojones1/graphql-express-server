import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    email: String
    age: Int
    contacts: [Contact]
  }

  type Contact {
    firstName: String
    lastName: String
  }

  type Query {
    getOneFriend(id: ID!): Friend
    getFriends: [Friend]
  }

  enum Gender {
    MALE
    FEMALE
    DINOSAUR
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    email: String
    age: Int
    contacts: [ContactInput]
  }



  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
  }

`;


export default makeExecutableSchema({typeDefs, resolvers});
