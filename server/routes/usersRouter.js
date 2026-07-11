const express = require('express');
const { default: chalk } = require('chalk');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const { deleteUser, getUsers, updateUser } = require('../controllers/user');
const { getRoles } = require('../controllers/role');
const mapUser = require('../helpers/mapUser');
const sendError = require('../helpers/sendError');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.get(
    '/roles',
    authenticated,
    hasRole([ROLES.ADMIN]),
    async (req, res) => {
        try {
            const roles = await getRoles();

            res.status(200).json(roles);
        } catch (error) {
            sendError(res, error);
        }
    },
);

router.get('/', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    try {
        const loadedUsers = await getUsers();
        const users = loadedUsers.map((user) => mapUser(user));

        res.status(200).json(users);
    } catch (error) {
        sendError(res, error);
    }
});

router.patch(
    '/:id',
    authenticated,
    hasRole([ROLES.ADMIN]),
    async (req, res) => {
        try {
            const updatedUser = await updateUser(req.params.id, {
                role_id: req.body.roleId,
            });

            console.log(
                chalk.bgGreen(`User has been updated: ${req.params.id}`),
            );

            res.status(200).json(mapUser(updatedUser));
        } catch (error) {
            sendError(res, error);
        }
    },
);

router.delete(
    '/:id',
    authenticated,
    hasRole([ROLES.ADMIN]),
    async (req, res) => {
        try {
            await deleteUser(req.params.id);

            console.log(
                chalk.bgGreen(`User has been removed: ${req.params.id}`),
            );

            res.status(200).json(null);
        } catch (error) {
            sendError(res, error);
        }
    },
);

module.exports = router;
