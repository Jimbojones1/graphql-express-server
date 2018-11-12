import mongoose from 'mongoose';
import Friend from '../models/friend';


export const resolvers = {
  Query: {
    getOneFriend: async (root, {id}) => {
      console.log(root,' dskljfldsj')
      try {
        console.log(id, ' this is id')
        const foundFriend = await Friend.findById(id);
        console.log(foundFriend, 'this is foundFriend')
        return foundFriend;

      } catch(err) {
        console.log(err, ' this is')
        return err
      }
      // return new Friend(id, friendDatabase[id])
    },
    getFriends: async () => {
      try {
        const friends = await Friend.find();

        return friends;

      } catch(err){
        return err
      }
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
    },
    deleteFriend: async (id) => {
      try {
        await Friend.findOneAndDelete(id)

        return 'Friend has been deleted'
      } catch(err){
        return err
      }
    }
  }



};

