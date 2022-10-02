const app = require("express")();
var cors = require('cors')
app.use(cors())
app.listen(4000);
const method = require("./method");

const engtestPath = require("./NetsatAPI/EngtestAPI/engtest.json")
const netsatPath = require("./NetsatAPI/netsat.json");
const details = require("./NetsatAPI/details.json")

app.get("/", (req, res) => {
  const data = {
    ...details,
    netsat_data: netsatPath,
    engtestPath
  };
  res.status(200).json(data);
});

app.get("/details", (req, res) => {
  res.status(200).json(details);
});

app.get("/netsat", (req, res) => {
  res.status(200).json(netsatPath);
});
app.get("/netsat/engtest", (req, res) => {
  res.status(200).json(engtestPath);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json(method.getSyllabusById(id, netsatPath));
});
