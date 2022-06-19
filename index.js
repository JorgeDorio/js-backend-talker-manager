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
    return res.status(HTTP_OK_STATUS).json(data);
  }
    return res.status(HTTP_OK_STATUS).json([]);
});

app.get('/talker/:id', async (req, res) => {
  const data = await getData();
  const reqId = req.params;
  const talkerById = data.filter((talker) => Number(talker.id) === Number(reqId.id));
  if (talkerById.length) {
    return res.status(HTTP_OK_STATUS).json(talkerById[0]);
  } 
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

app.listen(PORT, () => {
  console.log('Online');
});
