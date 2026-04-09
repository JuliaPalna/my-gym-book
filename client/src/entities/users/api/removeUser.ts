import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { AxiosResponseUser } from '../types';

export const removeUserApi = async (
    id: string,
): Promise<AxiosResponse<AxiosResponseUser[]>> => {
    return await axios.delete(`${BASE_URL}/users/${id}`);
};
