import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { updateUserApi } from '../api';
import type { UserProps } from '../types';

export interface UpdateUsersAction {
    type: typeof ACTION_TYPE.UPDATE_USER;
    payload: UserProps;
}

export const updateUsersAction = (user: UserProps) => {
    return async (dispatch: Dispatch<UpdateUsersAction>): Promise<void> => {
        await updateUserApi(user);

        dispatch({
            type: ACTION_TYPE.UPDATE_USER,
            payload: user,
        });
    };
};
