const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const cartItems = require("./routes.js");
app.use("/", cartItems);
const port = 8100;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
