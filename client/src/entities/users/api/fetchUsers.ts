import axios from 'axios';
import type { User } from '../types';

export const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get(`/api/users`);
    return response.data;
};
