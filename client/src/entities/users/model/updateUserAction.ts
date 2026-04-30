import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { updateUser } from '../api';
import type { UpdateUserAction, User } from '../types';

export const updateUserAction = (data: User) => {
    return async (dispatch: Dispatch<UpdateUserAction>): Promise<void> => {
        const user = await updateUser(data);

        dispatch({
            type: ACTION_TYPE.UPDATE_USER,
            payload: user,
        });
    };
};
