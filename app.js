require("dotenv").config();
const express = require("express");
const recordsRoute = require("./src/routes/recordsRoute");
const statsRoute = require("./src/routes/statsRoute");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is working");
});

const apiPrefix = "/api/v1";
app.use(`${apiPrefix}/records`, recordsRoute);
app.use(`${apiPrefix}/stats`, statsRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports=app;