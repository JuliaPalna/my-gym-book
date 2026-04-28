import { ACTION_TYPE, type TypeRoleUser } from '../../../app/constants';

export interface AuthorizedUser {
    login: string;
    roleId: TypeRoleUser;
}

export interface AuthorizationAction {
    type: typeof ACTION_TYPE.SET_AUTHORIZED_USER;
    payload: AuthorizedUser;
}

export interface AuthorizationData {
    login: string;
    password: string;
}
