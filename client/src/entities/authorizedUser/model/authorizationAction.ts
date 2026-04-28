import type { Dispatch } from 'redux';
import type { AxiosResponse } from 'axios';
import { ACTION_TYPE } from '../../../app/constants';
import type {
    AuthorizationAction,
    AuthorizationData,
    AuthorizedUser,
} from '../types';
import type { User } from '../../users';

import { fetchAuthorizationApi } from '../api';

export const authorizationAction = ({ login }: AuthorizationData) => {
    return async (dispatch: Dispatch<AuthorizationAction>): Promise<void> => {
        const user: AxiosResponse<User[]> = await fetchAuthorizationApi(login);

        if (user.data.length <= 0) {
            throw new Error('Пользователь не найден');
        }

        const authorizedUser: AuthorizedUser = {
            login: user.data[0].login,
            roleId: user.data[0].roleId,
        };

        // TODO: проверка пароля

        dispatch({
            type: ACTION_TYPE.SET_AUTHORIZED_USER,
            payload: authorizedUser,
        });
    };
};
