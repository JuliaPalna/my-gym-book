import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { AxiosResponseUser } from '../types';

export const fetchUsersApi = async (): Promise<
    AxiosResponse<AxiosResponseUser[]>
> => {
    return await axios.get(`${BASE_URL}/users`);
};
