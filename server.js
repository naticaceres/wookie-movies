
const express = require('express');

const app = express();

app.use(express.static('./dist/wookie-movies'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/wookie-movies/' }),
);

app.listen(process.env.PORT || 8080);
