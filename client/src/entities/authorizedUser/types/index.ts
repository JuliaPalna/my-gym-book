import { ACTION_TYPE, type TypeRoleUser } from '../../../app/constants';

export interface AuthorizedUser {
    login: string;
    roleId: TypeRoleUser;
    // session: string;
}

export interface AxiosResponseUserAuth {
    id: string;
    login: string;
    role_id: TypeRoleUser;
    registered_at: number;
}

export interface AuthorizationAction {
    type: typeof ACTION_TYPE.SET_AUTHORIZED_USER;
    payload: AuthorizedUser;
}

export interface AuthorizationData {
    login: string;
    password: string;
}
