const express = require("express");
const app = express();
const zod = require("zod");

const schma = zod.array(zod.number());

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
  //   country: zod.literal("IN").or(zod.literal("US")),
});

let count = 0;
function calculateNumberOfRequests(req, res, next) {
  console.log(count++);
  next();
}
function userValidator(req, res, next) {
  let username = req.headers.username;
  let pwd = req.headers.password;
  if (username != "admin" || pwd != "admin") {
    res.status(401).json({
      msg: "Wrong creds",
    });
  }
  next();
}

function kidneysValidator(req, res, next) {
  let kidneyId = req.query.id;

  if (kidneyId == 1 || kidneyId == 2) {
    res.status(200).json({
      msg: "You have total " + kidneyId + " kidneys",
    });
  } else {
    if (!kidneyId) res.status(401).send("Where is the kidney id?");
    else res.status(401).send("Wrong number of kidneys");
  }
  next();
}

// app.use(calculateNumberOfRequests, userValidator, kidneysValidator);

app.get("/kidneys", (req, res) => {
  res.status(200).json({
    msg: "logged in ",
  });
});

app.use(express.json());

app.post("/kidneys", (req, res) => {
  const response = schema.safeParse(req.body);

  res.send(response);
});

app.use((err, req, res, next) => {
  res.json({
    msg: "Something wrong with server",
  });
});

app.listen(3000, () => console.log("running!"));
