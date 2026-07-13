const User = require('../models/User');
const { default: chalk } = require('chalk');

async function getUsers() {
    try {
        const users = await User.find();

        if (!users || users.length === 0) {
            console.log(chalk.green(`Users not found`));
            return [];
        }

        console.log(chalk.bgGreen(`Found ${users.length} users`));
        return users
    } catch(error){
        console.log(chalk.bgRed('Error fetching users:', error.message));
        error.status = 500;
        throw error;
    }
}

async function deleteUser(id) {
    const user = await User.findById(id);

    if (!user) {
        console.log(chalk.bgRed(`User not found: ${id}`));
        const error = new Error('Пользователь не найден');
        error.status = 404;
        throw error;
    }

    const result = await User.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        console.log(chalk.bgRed(`Failed to delete user: ${id}`));
        const error = new Error('Не удалось удалить пользователя');
        error.status = 500;
        throw error;
    }

    console.log(chalk.bgGreen(`User deleted: ${id}`));
    return user;
}

async function updateUser(id, data) {
    const updatedUser = await User.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    });

    if (!updatedUser) {
        console.log(chalk.bgRed(`Failed to update user: ${id}`));
        const error = new Error('Пользователь не найден');
        error.status = 404;
        throw error;
    }

    console.log(chalk.bgGreen(`User updated: ${id}`));
    return updatedUser;
}

module.exports = {
    getUsers,
    deleteUser,
    updateUser,
};
