export const resolvers = {
  Query: {
    getFriend: ({id}) => {
      return friendDatabase[id]
      // return new Friend(id, friendDatabase[id])
    }
  },
  Mutation: {
    createFriend: ({input}) => {
      console.log(input)
      const id = require('crypto').randomBytes(10).toString('hex');
      friendDatabase[id] = input;
      return new Friend(id, input);
    }
  }



};

export default resolvers;
