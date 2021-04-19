import { gae_loader } from './util/gae.js';
gae_loader();

import express from 'express';
import bp from 'body-parser';
import cors from 'cors';

import { db } from './config/db.js';
import { routes } from './routes.js';

const { json } = bp;

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
db.on('error', (err) => {
  console.error(err);
  process.exit(37707);
});
db.once('open', () => {
  console.log(`Connected to DB mongodb://${db.host}:${db.port}`);
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });
});
