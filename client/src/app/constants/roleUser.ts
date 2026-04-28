export const TYPE_ROLE_USER = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest',
} as const;

export type TypeRoleUser = (typeof TYPE_ROLE_USER)[keyof typeof TYPE_ROLE_USER];
