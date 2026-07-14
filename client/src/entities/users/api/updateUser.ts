import { apiAxios } from '../../../shared';
import type { User } from '../types';

export const updateUser = async (user: User): Promise<User> => {
    const response = await apiAxios.patch(`/api/users/${user.id}`, {
        roleId: user.roleId,
    });

    return response.data;
};
