const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server');
const cors = require('cors');

const server = express();
const PORT = 5000; // next is by default on port 3000
const data = {
  users: [
      {
          id: 0,
          name: "nnamdi",
          age: 27
      },
      {
          id: 1,
          name: "chidume",
          age: 29
      },
      {
          id: 2,
          name: "david",
          age: 20
      }
  ]
};

server.use(cors());
server.use('/graphql', jsonGraphqlExpress.default(data));

server.get("/", (req, res) => res.redirect('/graphql'));

// ... you only need a two endpoints
// GET the records
// POST a new record of win or loss  

server.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
