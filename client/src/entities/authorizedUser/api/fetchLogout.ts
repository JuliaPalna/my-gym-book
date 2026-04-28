import axios from 'axios';

export const fetchLogout = async (): Promise<void> => {
    await axios.post(`/api/logout`);
};
