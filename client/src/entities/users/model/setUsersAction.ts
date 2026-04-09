import type { Dispatch } from 'redux';
import type { AxiosResponse } from 'axios';
import { ACTION_TYPE } from '../../../app/constants';
import { fetchUsersApi } from '../api';
import type { AxiosResponseUser, UserProps } from '../types';

export interface SetUsersAction {
    type: typeof ACTION_TYPE.SET_USERS;
    payload: UserProps[];
}

export const setUsersAction = () => {
    return async (dispatch: Dispatch<SetUsersAction>): Promise<void> => {
        const loadedUsers: AxiosResponse<AxiosResponseUser[]> =
            await fetchUsersApi();

        const users: UserProps[] = loadedUsers.data.map((user) => {
            return {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                registeredAt: user.registered_at,
            };
        });

        dispatch({
            type: ACTION_TYPE.SET_USERS,
            payload: users,
        });
    };
};
