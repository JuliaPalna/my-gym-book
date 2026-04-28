import axios from 'axios';
import type { RoleUser } from '../types';

export const fetchRolesApi = async (): Promise<RoleUser[]> => {
    const response = await axios.get(`/api/users/roles`);
    return response.data;
};
