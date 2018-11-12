import { buildSchema } from 'graphql';

const schema = buildSchema(`

  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    email: String
    age: Int
  }

  type Query {
    getFriend(id: ID): Friend
  }

  enum Gender {
    MALE
    FEMALE
    DINOSAUR
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    language: String
    email: String
    age: Int
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }

`);


export default schema;
