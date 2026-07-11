const express = require('express');
const { register, login } = require('../controllers/auth');
const mapUser = require('../helpers/mapUser');

const router = express.Router({ mergeParams: true });

router.post('/register', async (req, res) => {
    try {
        const { token, user } = await register(
            req.body.login,
            req.body.password,
        );

        res.cookie('token', token, { httpOnly: true })
            .status(200)
            .json(mapUser(user));
    } catch (error) {
        res.status(error.status || 401)
            .send(error.message || 'Unknown error');
    }
});

router.post('/login', async (req, res) => {
    try {
        const { token, user } = await login(req.body.login, req.body.password);

        res.cookie('token', token, { httpOnly: true })
            .status(200)
            .json(mapUser(user));
    } catch (error) {
        res.status(error.status || 401)
            .json(error.message || 'Unknown error');
    }
});

router.post('/logout', async (req, res) => {
    try {
        res.cookie('token', '', { httpOnly: true })
            .status(200)
            .json(null);
    } catch (error) {
        res.status(error.status || 500)
            .json(error.message || 'Unknown error');
    }
});

module.exports = router;
