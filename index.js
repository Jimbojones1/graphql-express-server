import express     from 'express';
import graphqlHTTP from 'express-graphql';
import schema      from './schema';
import resolvers   from './resolvers';

const app = express();

app.get('/', (req, res) => {
  res.send('app is working')
});




app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('server is running')
});
