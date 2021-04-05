const express = require('express');
const { json } = require('body-parser');

const app = express();
app.use(json());

app.get('/', (req, res, next) => {
  console.log('Hello World');
  res.json({payload: "Hello World"})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});