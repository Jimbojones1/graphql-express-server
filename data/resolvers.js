import mongoose from 'mongoose';
import Friend from '../models/friend';


export const resolvers = {
  Query: {
    getOneFriend: async (root, {id}) => {

      try {

        const foundFriend = await Friend.findById(id);

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

