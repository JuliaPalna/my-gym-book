import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { fetchAuthorization } from '../api';
import type { AuthorizationAction, AuthorizationData } from '../types';
import type { User } from '../../users';

export const authorizationAction = ({ login, password }: AuthorizationData) => {
    return async (dispatch: Dispatch<AuthorizationAction>): Promise<User> => {
        const data: User = await fetchAuthorization(login, password);

        dispatch({
            type: ACTION_TYPE.SET_AUTHORIZED_USER,
            payload: data,
        });

        return data;
    };
};
