import axios, { type AxiosResponse } from 'axios';
import { BASE_URL, type TypeRoleUser } from '../../../app/constants';
import type { AxiosResponseUserAuth } from '../types';

export const createUserApi = async (user: {
    login: string;
    password: string;
    role_id: TypeRoleUser;
    registered_at: number;
}): Promise<AxiosResponse<AxiosResponseUserAuth>> => {
    return await axios.post(`${BASE_URL}/users`, user);
};
