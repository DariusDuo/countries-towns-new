const express = require('express');
const PlaceModel = require('../models/Place');
const router = express.Router();

//create new place
router.post('/api/place/new', (req, res) => {
  const gotNewPlaceData = req.body;
  console.log('gotNewPlaceData', gotNewPlaceData);
  res.json('you are about to create a newplace');
});

module.exports = router;
