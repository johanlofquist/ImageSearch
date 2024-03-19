const express = require("express");
const app = express();
const fs = require("fs").promises;
const cors = require("cors");
const { requestSchema } = require("./schemas/request.schema");

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

const getFavorites = async (userId) => {
  const data = await fs.readFile("./db.json", "utf-8");
  const currentDB = JSON.parse(data);
  const user = currentDB.users.find((user) => user.userId == userId);
  if (user) {
    return user.favorites;
  }
};

app.use(cors());
app.use(express.json());

app.post("/api/images/save", async (req, res) => {
  const { error } = requestSchema.validate(req.body, { abortEarly: false });
  console.log(error);

  if (error) {
    return res.status(400).json(error);
  }

  await saveCustomer(req.body);
  res.status(200).send(req.body);
});

app.get("/api/images/getfavorites:id", async (req, res) => {
  favorites = await getFavorites(req.params.id);
  res.status(200).send(favorites);
});

app.listen(3000, () => console.log("Server is up and running!"));
