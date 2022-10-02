const app = require("express")();

app.listen(4000);
const method = require("./method");

const netsatPath = require("./NetsatAPI/netsat.json");
const details = require("./NetsatAPI/details.json")

app.get("/", (req, res) => {
  const data = {
    ...details,
    netsat_data: netsatPath,
  };
  res.status(200).json(data);
});

app.get("/details", (req, res) => {
  res.status(200).json(details);
});

app.get("/netsat", (req, res) => {
  res.status(200).json(netsatPath);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json(method.getSyllabusById(id, netsatPath));
});
