import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('app is working')
});


app.listen(3000, () => {
  console.log('server is running')
});