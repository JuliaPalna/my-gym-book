import { apiAxios } from '../../../shared';

export const removeUser = async (id: string): Promise<void> => {
    await apiAxios.delete(`/api/users/${id}`);
};
