const { JWT_SECRET } = require('../constants/index.js');
const { verify } = require('../helpers/token.js');
const User = require('../models/User');

module.exports = function hasRole(roles) {
    return (req, res, next) => {
        const isRole = roles.includes(req.user.role_id);

        if (!isRole) {
            res.send({ error: 'Access denied' });
            return;
        }

        next();
    };
};
