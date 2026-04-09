import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { removeUserApi } from '../api';

export interface RemoveUsersAction {
    type: typeof ACTION_TYPE.REMOVE_USER;
    payload: string;
}

export const removeUsersAction = (id: string) => {
    return async (dispatch: Dispatch<RemoveUsersAction>): Promise<void> => {
        await removeUserApi(id);

        dispatch({
            type: ACTION_TYPE.REMOVE_USER,
            payload: id,
        });
    };
};
