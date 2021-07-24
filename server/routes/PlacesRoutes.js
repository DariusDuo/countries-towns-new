const express = require('express');
const router = express.Router();

//create new place
router.post('/api/place/new', (req, res) => {
  console.log('you are going to create a place');
});

module.exports = router;
