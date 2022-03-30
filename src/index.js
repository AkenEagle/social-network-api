const express = require("express");

const PORT = 4000;
const app = express();

const start = () => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

start();
