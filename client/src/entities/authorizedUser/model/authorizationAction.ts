import type { Dispatch } from 'redux';
import type { AxiosResponse } from 'axios';
import { ACTION_TYPE } from '../../../app/constants';
import type {
    AuthorizationAction,
    AuthorizationData,
    AuthorizedUser,
    AxiosResponseUserAuth,
} from '../types';
import { fetchAuthorizationApi } from '../api';

export const authorizationAction = ({ login, password }: AuthorizationData) => {
    return async (dispatch: Dispatch<AuthorizationAction>): Promise<void> => {
        const user: AxiosResponse<AxiosResponseUserAuth[]> =
            await fetchAuthorizationApi(login);

        if (user.data.length <= 0) {
            throw new Error('Пользователь не найден');
        }

        const authorizedUser: AuthorizedUser = {
            login: user.data[0].login,
            roleId: user.data[0].role_id,
        };

        // TODO: проверка пароля

        dispatch({
            type: ACTION_TYPE.SET_AUTHORIZED_USER,
            payload: authorizedUser,
        });
    };
};
