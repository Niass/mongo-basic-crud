const express = require("express");
require("./db/mongoose");
const wilderRouter = require("./routes/wilders");
const app = express();
app.use(express.json());
app.use(wilderRouter);

app.listen(3000, () => console.log("Server is running on port  3000"));
