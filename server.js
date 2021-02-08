const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', async (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})
