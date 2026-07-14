import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../../app/constants';
import { fetchLogout } from '../../api';
import type { LogoutAction } from '../../types';

export const logoutAction = () => {
    return async (dispatch: Dispatch<LogoutAction>): Promise<void> => {
        await fetchLogout();

        dispatch({
            type: ACTION_TYPE.REMOVE_AUTHORIZED_USER,
        });
    };
};
