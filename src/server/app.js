const express = require ('express');
const app = express();
const morgan = require('morgan');
const jsonParser = require('body-parser').json();

let color = 'red';
// app.use(morgan('dev'));
app.use(jsonParser);
app.use('/', express.static('public'));

app.post('/color', (req, res) => {
  color = req.body.color;
  if (['green', 'red', 'blue'].indexOf(color) < 0) return res.status(400).json({err: 'Not a valid color!'});
  res.json({message: `Color has been set to ${color}`});
});

app.get('/color', (req, res) => {
  const data = { color };
  res.json(data);
});

app.get('/button/:data', (req, res) => {
  const message = {message: `Received a request: ${req.params.data}`}
  console.log(message);
  res.json(message.message);
})

module.exports = app;