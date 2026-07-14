import axios, { type AxiosInstance } from 'axios';

const apiAxios: AxiosInstance = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
    },
});

export { apiAxios };
