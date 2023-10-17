const dataset = require("../data/dataset");

const addRecord = (req, res) => {
  const { name, salary, currency, department, sub_department, on_contract } =
    req.body;

  if (!name || !salary || !department || !sub_department) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newRecord = {
    name,
    salary,
    currency,
    department,
    sub_department,
    on_contract,
  };

  dataset.push(newRecord);
  res.status(201).json(dataset);
};

const deleteRecord = (req, res) => {
  const index = parseInt(req.params.id);
  const length = dataset.length;

  if (index >= length) {
    return res.status(404).json({ error: "Record not found" });
  }

  dataset.splice(index, 1);

  res.status(200).json(dataset);
};

module.exports = {
  addRecord,
  deleteRecord,
};
