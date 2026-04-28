import axios from 'axios';

export const removeUserApi = async (id: string): Promise<void> => {
    await axios.delete(`/api/users/${id}`);
};
