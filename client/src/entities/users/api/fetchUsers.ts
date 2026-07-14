import { apiAxios } from '../../../shared';
import type { User } from '../types';

export const fetchUsers = async (): Promise<User[]> => {
    const response = await apiAxios.get<User[]>(`/api/users`);
    return response.data;
};
