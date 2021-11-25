const express = require('express');
const server = express();

server.get("/", (req, res) => res.send("Hello Word"));

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
