import express     from 'express';
import graphqlHTTP from 'express-graphql';
import schema      from './schema';


const app = express();

app.get('/', (req, res) => {
  res.send('app is working')
});

class Friend {
  constructor(id, { firstName, lastName, gender, email, language}){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.language = language;
  }
}

const friendDatabase = {};

const roote = {
  friend: () => {
    return {
      "id": 28143,
      "firstName": 'Jim',
      "lastName": 'Haff',
      "gender": 'Male',
      "language": 'AMERICAN',
      "email": 'woah.com'
    }
  },
  createFriend: ({input}) => {
    const id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    return new Friend(id, input);
  }

};


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: roote,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('server is running')
});
