const express = require('express');
const app = express();
const port = 2004;

app.use('/myapi', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on 2004`);
});