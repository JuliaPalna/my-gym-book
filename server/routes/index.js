const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./authRouter'));
router.use('/users', require('./usersRouter'));
router.use('/workouts', require('./workoutsRouter'));

module.exports = router;
