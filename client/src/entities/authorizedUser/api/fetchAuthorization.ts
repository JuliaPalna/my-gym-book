import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { AxiosResponseUserAuth } from '../types';

export const fetchAuthorizationApi = async (
    login: string,
): Promise<AxiosResponse<AxiosResponseUserAuth[]>> => {
    return await axios.get(`${BASE_URL}/users?login=${login}`);
};
