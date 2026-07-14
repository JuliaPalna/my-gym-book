import { apiAxios } from '../../../shared';

export const fetchLogout = async (): Promise<void> => {
    await apiAxios.post(`/api/logout`);
};
