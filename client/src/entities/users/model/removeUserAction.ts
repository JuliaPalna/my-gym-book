import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { removeUser } from '../api';
import type { RemoveUserAction } from '../types';

export const removeUserAction = (id: string) => {
    return async (dispatch: Dispatch<RemoveUserAction>): Promise<void> => {
        await removeUser(id);

        dispatch({
            type: ACTION_TYPE.REMOVE_USER,
            payload: id,
        });
    };
};
