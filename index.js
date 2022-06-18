const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const getData = async () => {
  const data = await fs.readFile('./talker.json', 'utf-8');
  const json = JSON.parse(data);
  return json;
};

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  const data = await getData();
  if (data.length) {
    return res.status(200).json(data);
  }
    return res.status(HTTP_OK_STATUS).json([]);
});

app.listen(PORT, () => {
  console.log('Online');
});
