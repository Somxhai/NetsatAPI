const app = require("express")();
const cors = require("cors");
app.use(cors());
const method = require("./method");

const netsatPath = require("./NetsatAPI/netsat.json");

const syllabusCount = 169;
const facultyCount = 23;
const dataDate = "16-11-2564";
const mergedData = {
  syllabusCount: syllabusCount,
  facultyCount: facultyCount,
  dataDate: dataDate,
};
app.get("/netsat", (req, res) => {
  const data = {
    ...mergedData,
    netsat_data: netsatPath,
  };
  res.status(200).json(data);
});

app.get("/netsat/id/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json(method.getSyllabusById(id, netsatPath));
});

app.listen(8080);
module.exports = app
