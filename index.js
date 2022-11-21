const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello , starting with your first project in node js');
});

app.get('/about', (req, res) => {
  res.send('Hello , I am the best coder of the world! K U!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:5000`);
});
