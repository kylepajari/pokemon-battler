const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const UserRoutes = require("./express/routes/users");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-1gjvo.mongodb.net/test?retryWrites=true"
);

const port = process.env.PORT || 4001;
const app = express();

if (true) {
  app.use(express.static("client/build"));
}

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", UserRoutes);

app.get("/", (req, res) => res.send("Default route!"));

app.listen(port, () => {
  console.log(`Express app running on localhost:${port}`);
});
