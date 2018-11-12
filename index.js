import express     from 'express';
import graphqlHTTP from 'express-graphql';
import schema      from './schema';


const app = express();

app.get('/', (req, res) => {
  res.send('app is working')
});


const roote = { friend: () => {
  return {
    "id": 28143,
    "firstName": 'Jim',
    "lastName": 'Haff',
    "gender": 'Male',
    "language": 'AMERICAN',
    "email": 'woah.com'
  }
}};


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: roote,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('server is running')
});
