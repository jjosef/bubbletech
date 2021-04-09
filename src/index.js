const { gae_loader } = require('./util/gae');
gae_loader();

const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const { routes } = require('./routes.js')

const app = express();
app.use(json());
app.use(cors());

for (const i in routes) {
  const { method, handler, middleware } = routes[i];
  if (middleware) {
    app[method](i, middleware, handler);
  } else {
    app[method](i, handler);
  }
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});