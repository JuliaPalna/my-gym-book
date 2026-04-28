import { ACTION_TYPE } from '../../../app/constants';
import type { User } from '../../users';

export interface AuthorizationAction {
    type: typeof ACTION_TYPE.SET_AUTHORIZED_USER;
    payload: User;
}

export interface LogoutAction {
    type: typeof ACTION_TYPE.REMOVE_AUTHORIZED_USER;
}

export interface AuthorizationData {
    login: string;
    password: string;
}

export type AuthUserActions = AuthorizationAction | LogoutAction;
