const app = require("express")();

app.listen(4000);
const method = require("./method");

const netsatPath = require("./NetsatAPI/netsat.json");

const mergedData = {
  syllabusCount: 169,
  facultyCount: 23,
  dataDate: "16-11-2564",
};
app.get("/", (req, res) => {
  const data = {
    ...mergedData,
    netsat_data: netsatPath,
  };
  res.status(200).json(data);
});

app.get("/details", (req, res) => {
  res.status(200).json(mergedData);
});

app.get("/netsat", (req, res) => {
  res.status(200).json(netsatPath);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json(method.getSyllabusById(id, netsatPath));
});
