const express = require('express');
var router = express.Router();

// GET Index Page
router.get('/', (req, res, next) => {
  res.send('Express REST API test')
});

module.exports = router;