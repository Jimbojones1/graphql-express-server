class Friend {
  constructor(id, { firstName, lastName, gender, email, language, age, contacts}){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.language = language;
    this.age      = age;
    this.contacts = contacts;
  }
}

const friendDatabase = {};

const resolvers = {
  getFriend: ({id}) => {
    return friendDatabase[id]
    // return new Friend(id, friendDatabase[id])
  },
  createFriend: ({input}) => {
    const id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    return new Friend(id, input);
  }

};

export default resolvers;
