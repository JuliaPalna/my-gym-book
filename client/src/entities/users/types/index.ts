import type { TypeRoleUser } from '../../../app/constants';
import type {
    RemoveUserAction,
    SetUsersAction,
    UpdateUserAction,
} from '../model';

export interface User {
    id: string;
    roleId: TypeRoleUser;
    login: string;
    registeredAt: number;
}

export type UsersProps = User[];

export interface AxiosResponseUser {
    id: string;
    login: string;
    role_id: TypeRoleUser;
    registered_at: number;
}

export type UserActions = SetUsersAction | RemoveUserAction | UpdateUserAction;
