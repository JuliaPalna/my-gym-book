import type { TypeRoleUser } from '../../../app/constants';
export interface RoleUser {
    id: TypeRoleUser;
    title: string;
}

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

export type UserActions = SetUsersAction | RemoveUserAction | UpdateUserAction;
