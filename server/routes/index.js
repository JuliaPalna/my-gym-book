const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./authRouter'));
router.use('/users', require('./usersRouter'));

module.exports = router;
