// const express = require('express');
// const path = require('path');

// const port = process.env.PORT || 8080;
// const app = express();

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('*', (request, response) => {
//   response.sendFile(path.join(__dirname, 'client/build/index.html'));
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running http://localhost:${port}`);
// });

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);
server.use(middlewares);
server.use(router);
server.listen(8080, () => {
  console.log('JSON Server is running');
});
