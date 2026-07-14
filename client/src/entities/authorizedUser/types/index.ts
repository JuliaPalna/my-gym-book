import { ACTION_TYPE, type TypeRoleUser } from '../../../app/constants';

export interface AuthUser {
    id: string;
    roleId: TypeRoleUser;
    login: string;
}

export interface AuthorizationAction {
    type: typeof ACTION_TYPE.SET_AUTHORIZED_USER;
    payload: AuthUser;
}

export interface LogoutAction {
    type: typeof ACTION_TYPE.REMOVE_AUTHORIZED_USER;
}

export type AuthUserActions = AuthorizationAction | LogoutAction;
