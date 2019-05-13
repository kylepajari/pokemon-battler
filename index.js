const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const UserRoutes = require("./express/routes/users");
const LeaderRoutes = require("./express/routes/leaders");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-1gjvo.mongodb.net/test?retryWrites=false",
  { useNewUrlParser: true }
);

const port = process.env.PORT || 4001;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", UserRoutes);
app.use("/leader", LeaderRoutes);

app.get("/", (req, res) => res.send("Default route!"));

app.listen(port, () => {
  console.log(`Express app running on localhost:${port}`);
});
