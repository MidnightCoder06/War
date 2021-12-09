const express = require('express');
const server = express();

server.get("/", (req, res) => res.send("Hello Word"));
// ^delete this
// ... you only need a two endpoints
// GET the records
// PUT or PATCH method to update the players wins and column loss  

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
