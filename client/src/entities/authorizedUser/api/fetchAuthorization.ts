import type { AuthorizationProps } from '../lib';
import type { AuthUser } from '../types';
import { apiAxios } from '../../../shared/api';

export const fetchAuthorization = async (
    data: AuthorizationProps,
): Promise<AuthUser> => {
    const response = await apiAxios.post<AuthUser>(`/api/login`, data);
    return response.data;
};
