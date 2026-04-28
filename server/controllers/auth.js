const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: chalk } = require('chalk');
const { generate } = require('../helpers/token.js');
const User = require('../models/User.js');
const { SALT_ROUNDS } = require('../constants/index.js');
const ROLES = require('../constants/roles.js');

async function register(login, password) {
    if (!password) {
        console.log(chalk.bgRed('Password is empty'));
        throw new Error('Password is empty');
    }

    const user = await User.findOne({ login });

    if (user) {
        console.log(chalk.bgRed('User already exists with the login'));
        throw Error('User already exists with the login');
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await User.create({ login, password: passwordHash });
    const token = generate({ id: newUser.id });

    console.log(chalk.bgGreen('User has been registered'));
    return { token, user: newUser };
}

async function login(login, password) {
    const user = await User.findOne({ login });

    if (!user) {
        console.log(chalk.bgRed('User not found'));
        throw Error('User not found');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        console.log(chalk.bgRed('Wrong password'));
        throw Error('Wrong password');
    }

    const token = generate({ id: user.id });

    console.log(chalk.bgGreen('User logged in'));
    return { token, user };
}

module.exports = {
    register,
    login,
};
