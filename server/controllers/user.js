const User = require('../models/User');

function getUsers() {
    return User.find();
}

function deleteUser(id) {
    return User.deleteOne({ _id: id });
}

function updateUser(id, data) {
    return User.findByIdAndUpdate(id, data, { returnDocument: 'after' });
}

module.exports = {
    getUsers,
    deleteUser,
    updateUser,
};
