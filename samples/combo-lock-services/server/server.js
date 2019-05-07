const express = require('express');
const app = express();
const PORT = 4000;

const secrets = {};

let id = 0;
const nextId = () => {
  id++;
  return id;
};

const randDigit = () => Math.floor(Math.random()*10);

const createNewSecret = () => {
  id = nextId();
  secrets[id] = [ randDigit(), randDigit(), randDigit() ];
  console.log(secrets[id]);
  return { id, length: secrets[id].length };
};

app.post('/secret', (req, res) => {
  const info = createNewSecret();
  res.json( info  );
});


app.post('/check/:id', express.json(), (req, res) => {
  const sequence = req.body.sequence;
  const id = req.params.id;
  res.json( sequence.join('') === secrets[id].join('') );
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );
