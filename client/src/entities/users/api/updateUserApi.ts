import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { AxiosResponseUser, User } from '../types';

export const updateUserApi = async (
    user: User,
): Promise<AxiosResponse<AxiosResponseUser[]>> => {
    return await axios.put(`${BASE_URL}/users/${user.id}`, {
        login: user.login,
        role_id: user.roleId,
        registered_at: user.registeredAt,
    });
};
