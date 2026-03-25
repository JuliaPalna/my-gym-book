export const ROLE_USER = {
    ADMIN: 'ADMIN',
    AUTHORIZED: 'AUTHORIZED',
    GUEST: 'GUEST',
};

export type RoleUserType = (typeof ROLE_USER)[keyof typeof ROLE_USER];
