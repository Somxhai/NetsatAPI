const app = require("express")();
const cors = require("cors");
app.use(cors());
app.listen(4000, '127.0.0.1');
const method = require("./method");

const netsat = require("./NetsatAPI/netsat.json");
const details = require("./NetsatAPI/details.json");

app.get("/", (req, res) => {
  const data = {
    ...details,
    netsat,
  };
  res.status(200).json(data);
});

app.get("/details", (req, res) => {
  res.status(200).json(details);
});

app.get("/netsat", (req, res) => {
  res.status(200).json(netsat);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json(method.getSyllabusById(id, netsat));
});
