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
        res.status(error.status || 400)
            .json({ message: error.message || 'Ошибка регистрации' });
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
            .json({ message: error.message || 'Ошибка входа' });
    }
});

router.post('/logout', async (req, res) => {
    try {
        res.cookie('token', '', { httpOnly: true })
            .status(200)
            .json(null);
    } catch (error) {
        res.status(error.status || 500)
            .json(error.message || 'Ошибка выхода');
    }
});

module.exports = router;
