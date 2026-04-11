import type { Dispatch } from 'redux';
import type { AxiosResponse } from 'axios';
import { ACTION_TYPE, TYPE_ROLE_USER } from '../../../app/constants';
import type {
    AuthorizationAction,
    AuthorizationData,
    AxiosResponseUserAuth,
} from '../types';
import { fetchAuthorizationApi } from '../api';
import { createUserApi } from '../api/createUser';

export const registrationAction = ({ login, password }: AuthorizationData) => {
    return async (dispatch: Dispatch<AuthorizationAction>): Promise<void> => {
        const user: AxiosResponse<AxiosResponseUserAuth[]> =
            await fetchAuthorizationApi(login);

        if (user.data[0]) {
            throw new Error(
                'Логин занят. Создайте пользователя с другим логином.',
            );
        }

        const authorizedUser = await createUserApi({
            login,
            password,
            role_id: TYPE_ROLE_USER.USER,
            registered_at: Date.now(),
        });

        dispatch({
            type: ACTION_TYPE.SET_AUTHORIZED_USER,
            payload: {
                login: authorizedUser.data.login,
                roleId: authorizedUser.data.role_id,
            },
        });
    };
};
