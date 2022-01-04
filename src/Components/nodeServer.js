const express = require("express");
const cors = require("cors");
const data = require("./products copy");
   

const app = express();
app.use(cors())
app.get("/", (req, res) => {
  res.send(data);
});


app.listen(3030);


