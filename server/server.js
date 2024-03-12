const express = require("express");
const app = express();
const fs = require("fs").promises;
const cors = require("cors");

const readCustomer = async () => {
  const data = await fs.readFile("./db.json", "utf-8");
  console.log(JSON.parse(data));
};

const saveCustomer = async (body) => {
  const data = await fs.readFile("./db.json", "utf-8");
  const currentDB = JSON.parse(data);
  const user = currentDB.users.find((user) => user.userId == body.userId);
  if (user) {
    user.favorites.push(body.favorites[0]);
  } else {
    currentDB.users.push(body);
  }
  await fs.writeFile("./db.json", JSON.stringify(currentDB, null, 2));
};

app.use(cors());
app.use(express.json());

app.post("/api/images/save", async (req, res) => {
  await saveCustomer(req.body);
  res.status(200).send(req.body);
});

app.listen(3000, () => console.log("Server is up and running!"));
