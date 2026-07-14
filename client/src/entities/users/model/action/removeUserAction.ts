import type { Dispatch } from 'redux';
import type { RemoveUserAction } from '../../types';
import { removeUser } from '../../api';
import { ACTION_TYPE } from '../../../../app/constants';

export const removeUserAction = (id: string) => {
    return async (dispatch: Dispatch<RemoveUserAction>): Promise<void> => {
        await removeUser(id);

        dispatch({
            type: ACTION_TYPE.REMOVE_USER,
            payload: id,
        });
    };
};
