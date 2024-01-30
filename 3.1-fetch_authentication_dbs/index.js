const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://Shivam2024:Shivam%402024@cluster0.er8iil9.mongodb.net/newDB"
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(name, username) {
  const user = await User.findOne({ name, username });
  return user !== null;
}

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  if (await userExists(name, username)) {
    res.status(400).json({
      msg: "User alreay exists",
    });
  } else {
    const user = new User({
      name: name,
      username: username,
      password: password,
    });

    user.save().then(() => console.log("done"));

    res.status(200).json({
      msg: "Signed Up Successfully!",
    });
  }
});

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
