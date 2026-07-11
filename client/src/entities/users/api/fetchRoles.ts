import { apiAxios } from '../../../shared';
import type { RoleUser } from '../types';

export const fetchRoles = async (): Promise<RoleUser[]> => {
    const response = await apiAxios.get<RoleUser[]>(`/api/users/roles`);
    return response.data;
};
