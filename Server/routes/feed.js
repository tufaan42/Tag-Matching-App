const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

router.get('/countries', feedController.getData);

router.post('/createActivities', feedController.createActivity);

router.get('/activities', feedController.acTivities);

module.exports = router;