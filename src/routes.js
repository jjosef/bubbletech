import { whoami } from './handlers/auth.js';
const empty = (req, res, next) => {
  console.log(`${req.url} called`);
};

const routes = {
  // '/path/to/:define': { type: 'get|post|put|delete', handler: myHandler[, middleware: myMiddleWare] }
  '/admin': { method: 'get', handler: empty },
  '/admin/whoami': { method: 'get', handler: whoami },
};

export { routes };
