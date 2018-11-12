import mongoose from 'mongoose';
import Friend from '../models/friend';


export const resolvers = {
  Query: {
    getFriend: ({id}) => {
      return friendDatabase[id]
      // return new Friend(id, friendDatabase[id])
    }
  },
  Mutation: {
    createFriend: async (root, {input}) => {
      try {
        const newFriend = await Friend.create(input);

        return newFriend

      } catch(err) {
        return err
      }
    },
    updateFriend: async (root, {input}) => {
      try {
        const updateFriend = await  Friend.findOneAndUpdate(input._id, input,{new: true});

        return updateFriend
      } catch(err) {
        return err
      }
    }
  }



};

