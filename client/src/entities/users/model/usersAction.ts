import { ACTION_TYPE } from '../../../app/constants';
import type { UsersStateProps } from '../types';

interface SetUsersAction {
    type: typeof ACTION_TYPE.SET_USERS;
    payload: UsersStateProps;
}

export const setUsersAction = (data: UsersStateProps): SetUsersAction => ({
    type: ACTION_TYPE.SET_USERS,
    payload: data,
});

export type usersAction = SetUsersAction;
