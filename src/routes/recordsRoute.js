const express = require('express');
const router = express.Router();
const {addRecord,deleteRecord } = require('../controllers/recordsController');
const authMiddleware=require('../middleware/auth');

// Add a new record
router.post('/add', authMiddleware,addRecord);

// Delete a record by ID
router.delete('/delete/:id',authMiddleware, deleteRecord);

module.exports = router;
