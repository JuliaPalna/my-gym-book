import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../../app/constants';
import { fetchRegistration } from '../../api';
import type { AuthorizationAction, AuthUser } from '../../types';
import type { AuthorizationProps } from '../../lib';

export const registrationAction = (data: AuthorizationProps) => {
    return async (
        dispatch: Dispatch<AuthorizationAction>,
    ): Promise<AuthUser> => {
        const user: AuthUser = await fetchRegistration(data);

        dispatch({
            type: ACTION_TYPE.SET_AUTHORIZED_USER,
            payload: user,
        });

        return user;
    };
};
