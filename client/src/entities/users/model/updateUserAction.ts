import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { updateUserApi } from '../api';
import type { User } from '../types';

export interface UpdateUserAction {
    type: typeof ACTION_TYPE.UPDATE_USER;
    payload: User;
}

export const updateUserAction = (user: User) => {
    return async (dispatch: Dispatch<UpdateUserAction>): Promise<void> => {
        await updateUserApi(user);

        dispatch({
            type: ACTION_TYPE.UPDATE_USER,
            payload: user,
        });
    };
};
