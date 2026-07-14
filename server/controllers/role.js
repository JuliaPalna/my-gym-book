const ROLES = require('../constants/roles');

function getRoles() {
    return [
        { id: ROLES.ADMIN, title: 'Администратор' },
        { id: ROLES.USER, title: 'Пользователь' },
    ];
}

module.exports = {
    getRoles,
};
