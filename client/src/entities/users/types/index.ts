import type { ACTION_TYPE, TypeRoleUser } from '../../../app/constants';
import type { AuthUser } from '../../authorizedUser';

export interface RoleUser {
    id: TypeRoleUser;
    title: string;
}

export interface User extends AuthUser {
    registeredAt: number;
}

export interface RemoveUserAction {
    type: typeof ACTION_TYPE.REMOVE_USER;
    payload: string;
}

export interface SetUsersAction {
    type: typeof ACTION_TYPE.SET_USERS;
    payload: User[];
}

export interface UpdateUserAction {
    type: typeof ACTION_TYPE.UPDATE_USER;
    payload: User;
}

export type UserActions = SetUsersAction | RemoveUserAction | UpdateUserAction;
