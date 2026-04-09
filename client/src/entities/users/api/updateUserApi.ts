import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { AxiosResponseUser, UserProps } from '../types';

export const updateUserApi = async (
    user: UserProps,
): Promise<AxiosResponse<AxiosResponseUser[]>> => {
    return await axios.put(`${BASE_URL}/users/${user.id}`, {
        id: user.id,
        login: user.login,
        role_id: user.roleId,
        registered_at: user.registeredAt,
    });
};
