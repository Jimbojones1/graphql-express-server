import express     from 'express';
import graphqlHTTP from 'express-graphql';
import schema      from './data/schema';
const app = express();

require('./db')

app.get('/', (req, res) => {
  res.send('app is working')
});




app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('server is running')
});
