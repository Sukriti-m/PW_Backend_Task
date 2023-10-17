const express = require("express");
const router = express.Router();
const {
  getAllStats,
  getContractStats,
  getDepartmentStats,
  getSubDepartmentStats,
} = require("../controllers/statsController");

router.get("/all", getAllStats);
router.get("/contract", getContractStats);
router.get("/departments", getDepartmentStats);
router.get("/subdepartments", getSubDepartmentStats);

module.exports = router;
