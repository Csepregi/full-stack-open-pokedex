const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log("server started on port 8080");
});
