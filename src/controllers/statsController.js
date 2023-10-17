const dataset = require("../data/dataset");

// API to fetch SS for salary over the entire dataset
const getAllStats = (req, res) => {
  const salaries = dataset.map((record) => Number(record.salary));
  if (salaries.length == 0) {
    return res.status(404).json({ error: "No records found" });
  }

  const mean = salaries.reduce((acc, val) => acc + val, 0) / salaries.length;
  const min = Math.min(...salaries);
  const max = Math.max(...salaries);

  res.json({ mean, min, max });
};

// API to fetch SS for salary for records which satisfy "on_contract": "true"
const getContractStats = (req, res) => {
  const contractSalaries = dataset
    .filter((record) => record.on_contract === "true")
    .map((record) => Number(record.salary));

  if (contractSalaries.length === 0) {
    return res.status(404).json({ error: "No contract records found" });
  }

  const mean =
    contractSalaries.reduce((acc, val) => acc + val, 0) /
    contractSalaries.length;
  const min = Math.min(...contractSalaries);
  const max = Math.max(...contractSalaries);

  res.json({ mean, min, max });
};

// API to fetch SS for salary for each department
const getDepartmentStats = (req, res) => {
  const stats = {};

  dataset.forEach((record) => {
    const department = record.department;
    const salary = Number(record.salary);

    if (!stats[department]) {
      stats[department] = [salary];
    } else {
      stats[department].push(salary);
    }
  });
  //console.log(stats);
  const SS = {};
  for (const department in stats) {
    const salaries = stats[department];
    const mean = salaries.reduce((acc, val) => acc + val, 0) / salaries.length;
    const min = Math.min(...salaries);
    const max = Math.max(...salaries);

    SS[department] = { mean, min, max };
  }

  res.json(SS);
};

// API to fetch SS for salary for each department and sub-department combination
const getSubDepartmentStats = (req, res) => {
  const stats = {};

  dataset.forEach((record) => {
    const department = record.department;
    const subDepartment = record.sub_department;
    const salary = Number(record.salary);

    const key = `${department}_${subDepartment}`;

    if (!stats[key]) {
      stats[key] = [salary];
    } else {
      stats[key].push(salary);
    }
  });
    //console.log(stats);

  const SS = {};
  for (const key in stats) {
    const salaries = stats[key];
    const [department, subDepartment] = key.split("_");
    const mean = salaries.reduce((acc, val) => acc + val, 0) / salaries.length;
    const min = Math.min(...salaries);
    const max = Math.max(...salaries);

    SS[key] = {
      department,
      subDepartment,
      mean,
      min,
      max,
    };
  }

  res.json(SS);
};

module.exports = {
  getAllStats,
  getContractStats,
  getDepartmentStats,
  getSubDepartmentStats,
};
