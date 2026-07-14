const { JWT_SECRET } = require('../constants/index.js');
const { verify } = require('../helpers/token.js');
const User = require('../models/User');

module.exports = function hasRole(roles) {
    return (req, res, next) => {
        if (!Array.isArray(roles)) {
            return res
                .status(500)
                .json({ message: 'Повторите запрос позже' });
        }

        const isRole = roles.includes(req.user.role_id);

        if (!isRole) {
            return res
                .status(403)
                .json({ message: 'Доступ запрещен' });
        }

        next();
    };
};
