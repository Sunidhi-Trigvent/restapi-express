const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

//test
app.get("/", (req, res) => {
  res.send("hello");
});

//listening to port
app.listen(port, () => {
  console.log(`Connection is setup at ${port}`);
});
