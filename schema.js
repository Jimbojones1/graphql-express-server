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
    getFriend(id: ID): Friend
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
  }

`;


export default makeExecutableSchema({typeDefs, resolvers});
