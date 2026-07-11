import type { AuthorizationProps } from '../lib';
import type { AuthUser } from '../types';
import { apiAxios } from '../../../shared';

export const fetchRegistration = async (
    data: AuthorizationProps,
): Promise<AuthUser> => {
    const response = await apiAxios.post<AuthUser>(`/api/register`, data);
    return response.data;
};
