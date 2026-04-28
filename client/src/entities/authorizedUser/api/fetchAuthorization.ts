import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { User } from '../../users';

export const fetchAuthorizationApi = async (
    login: string,
): Promise<AxiosResponse<User[]>> => {
    return await axios.get(`${BASE_URL}/users?login=${login}`);
};
