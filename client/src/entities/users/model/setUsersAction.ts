import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { fetchUsersApi } from '../api';
import type { User } from '../types';

export interface SetUsersAction {
    type: typeof ACTION_TYPE.SET_USERS;
    payload: User[];
}

export const setUsersAction = () => {
    return async (dispatch: Dispatch<SetUsersAction>): Promise<void> => {
        const users = await fetchUsersApi();

        dispatch({
            type: ACTION_TYPE.SET_USERS,
            payload: users,
        });
    };
};
