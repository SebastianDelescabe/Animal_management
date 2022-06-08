const express = require('express');
const animalsRoute = require('./animalsRoute')

const router = express.Router();

router.use('/animals', animalsRoute)

module.exports = router;