const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants/index.js');
const { verify } = require('../helpers/token.js');
const User = require('../models/User');

async function authenticated(req, res, next) {
    const tokenData = verify(req.cookies.token);

    const user = await User.findOne({ _id: tokenData.id });

    if (!user) {
        res.send({ error: 'Authenticated user not found' });
        return;
    }

    req.user = user;
    next();
}

module.exports = authenticated;
