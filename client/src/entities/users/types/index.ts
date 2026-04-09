import type { TypeRoleUser } from '../../../app/constants';

export interface UserProps {
    id: string;
    roleId: TypeRoleUser;
    login: string;
    registeredAt: number;
}

export type UsersProps = UserProps[];

export interface AxiosResponseUser {
    id: string;
    login: string;
    role_id: TypeRoleUser;
    registered_at: number;
}
