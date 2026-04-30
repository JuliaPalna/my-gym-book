import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { fetchUsers } from '../api';
import type { SetUsersAction } from '../types';

export const setUsersAction = () => {
    return async (dispatch: Dispatch<SetUsersAction>): Promise<void> => {
        const users = await fetchUsers();

        dispatch({
            type: ACTION_TYPE.SET_USERS,
            payload: users,
        });
    };
};
