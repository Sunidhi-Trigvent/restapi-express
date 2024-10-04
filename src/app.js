const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// //test
// app.get("/", (req, res) => {
//   res.send("hello");
// });

//Handling POST request (creating data)

app.post("/mens", async (req, res) => {
  try {
    const { body } = req;
    const addingMensRecord = new MensRanking(body);
    const insertmens = await addingMensRecord.save();
    res.status(201).send(insertmens);
    // res.send({ message: "hello world", data: body });
  } catch (e) {
    res.status(400).send(e);
  }
});

//listening to port
app.listen(port, () => {
  console.log(`Connection is setup at ${port}`);
});
