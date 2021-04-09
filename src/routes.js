const { whoami } = require('./handlers/auth');
const empty = (req, res, next) => {
  console.log(`${req.url} called`);
}

module.exports.routes = {
  // '/path/to/:define': { type: 'get|post|put|delete', handler: myHandler[, middleware: myMiddleWare] }
  '/admin': { method: 'get', handler: empty },
  '/admin/whoami': { method: 'get', handler: whoami },

}