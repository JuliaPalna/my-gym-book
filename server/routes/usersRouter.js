const express = require('express');
const { default: chalk } = require('chalk');
const { deleteUser, getUsers, updateUser } = require('../controllers/user');
const { getRoles } = require('../controllers/role');
const mapUser = require('../helpers/mapUser');
const sendError = require('../helpers/sendError');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
    try {
        const loadedUsers = await getUsers();
        const users = loadedUsers.map((user) => mapUser(user));

        res.status(200).json(users);
    } catch (error) {
        sendError(res, error);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = await updateUser(req.params.id, {
            role_id: req.body.roleId,
        });

        chalk.bgGreen(`Update user: ${req.params.id}`);
        res.status(200).json(mapUser(updatedUser));
    } catch (error) {
        sendError(res, error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await deleteUser(req.params.id);

        chalk.bgGreen(`Remove user: ${req.params.id}`);
        res.status(200).json(null);
    } catch (error) {
        sendError(res, error);
    }
});

router.get('/roles', async (req, res) => {
    try {
        const roles = await getRoles();

        res.status(200).json(roles);
    } catch (error) {
        sendError(res, error);
    }
});

module.exports = router;
