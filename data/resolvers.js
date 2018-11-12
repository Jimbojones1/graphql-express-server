import mongoose from ('mongoose');
import Friend from '../models/friend';


export const resolvers = {
  Query: {
    getFriend: ({id}) => {
      return friendDatabase[id]
      // return new Friend(id, friendDatabase[id])
    }
  },
  Mutation: {
    createFriend: async ({input}) => {
      try {
        const newFriend = await Friend.create(input);

        return newFriend

      } catch(err) {
        return err
      }
    }
  }



};

