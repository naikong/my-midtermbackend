const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const fs = require('fs')
const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json')))
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
    server(req, res);
};
