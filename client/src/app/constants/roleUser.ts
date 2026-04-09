export const TYPE_ROLE_USER = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest',
} as const;

export const ROLES_USER = [
    {
        id: TYPE_ROLE_USER.ADMIN,
        title: 'Администратор',
    },
    {
        id: TYPE_ROLE_USER.USER,
        title: 'Пользователь',
    },
    {
        id: TYPE_ROLE_USER.GUEST,
        title: 'Гость',
    },
];

export type TypeRoleUser = (typeof TYPE_ROLE_USER)[keyof typeof TYPE_ROLE_USER];

export type RolesUser = typeof ROLES_USER;
