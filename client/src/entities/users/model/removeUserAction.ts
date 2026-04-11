import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { removeUserApi } from '../api';

export interface RemoveUserAction {
    type: typeof ACTION_TYPE.REMOVE_USER;
    payload: string;
}

export const removeUserAction = (id: string) => {
    return async (dispatch: Dispatch<RemoveUserAction>): Promise<void> => {
        await removeUserApi(id);

        dispatch({
            type: ACTION_TYPE.REMOVE_USER,
            payload: id,
        });
    };
};
