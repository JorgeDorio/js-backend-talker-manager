const express = require('express');
const router = require('./router');
const { SUCCESS } = require('./HTTP_STATUS');

const PORT = '3000';

const app = express();

app.use(express.json());
app.use(router);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(SUCCESS).send();
});

app.listen(PORT, () => console.log('Online'));
