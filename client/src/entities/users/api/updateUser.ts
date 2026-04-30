import axios from 'axios';
import type { User } from '../types';

export const updateUser = async (user: User): Promise<User> => {
    const response = await axios.patch(`/api/users/${user.id}`, {
        roleId: user.roleId,
    });

    return response.data;
};
