const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/root.html'))
})

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/bundle.js'));
});

app.get('/root.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/root.css'));
});

app.get('/x/api/books', (req, res) => {
  res.send(require('./mockBooks.json'));
});

app.post('/x/api/books', (req, res) => {
  res.send(req.body);
});

app.get('/x/api/sales', (req, res) => {
  res.send(require('./mockSales.json'));
});

app.listen(3000, () => console.log('mock api backend running on localhost:3000'));
