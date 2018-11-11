import express     from 'express';
import graphqlHTTP from 'express-graphql';
import schema      from './schema';


const app = express();

app.get('/', (req, res) => {
  res.send('app is working')
});


const roote = {hello: () => 'Hi Im larry'};


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: roote,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('server is running')
});
