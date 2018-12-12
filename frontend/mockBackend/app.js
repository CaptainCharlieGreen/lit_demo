const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../')));

app.get('/api/books', (req, res) => {
  res.send(require('./mockBooks.json'));
});

app.listen(3000, () => console.log('mock api backend running on localhost:3000'));
