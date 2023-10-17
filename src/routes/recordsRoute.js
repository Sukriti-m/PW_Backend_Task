const express = require('express');
const router = express.Router();
const {addRecord,deleteRecord } = require('../controllers/recordsController');

// Add a new record
router.post('/add', addRecord);

// Delete a record by ID
router.delete('/delete/:id', deleteRecord);

module.exports = router;
