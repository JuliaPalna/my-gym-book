import axios from 'axios';
import type { User } from '../../users';

export const fetchRegistration = async (
    login: string,
    password: string,
): Promise<User> => {
    const response = await axios.post(`/api/register`, { login, password });
    return response.data;
};
