import axios from 'axios';

export const removeUser = async (id: string): Promise<void> => {
    await axios.delete(`/api/users/${id}`);
};
