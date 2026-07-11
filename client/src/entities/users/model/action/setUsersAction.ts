import type { Dispatch } from 'redux';
import type { SetUsersAction } from '../../types';
import { fetchUsers } from '../../api';
import { ACTION_TYPE } from '../../../../app/constants';

export const setUsersAction = () => {
    return async (dispatch: Dispatch<SetUsersAction>): Promise<void> => {
        const users = await fetchUsers();

        dispatch({
            type: ACTION_TYPE.SET_USERS,
            payload: users,
        });
    };
};
