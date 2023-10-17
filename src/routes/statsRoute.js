const express = require("express");
const router = express.Router();
const {
  getAllStats,
  getContractStats,
  getDepartmentStats,
  getSubDepartmentStats,
} = require("../controllers/statsController");
const authMiddleware = require("../middleware/auth");

router.get("/all", authMiddleware, getAllStats);
router.get("/contract", authMiddleware, getContractStats);
router.get("/departments", authMiddleware, getDepartmentStats);
router.get("/subdepartments", authMiddleware, getSubDepartmentStats);

module.exports = router;
