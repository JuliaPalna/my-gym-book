import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { AxiosResponseWorkout } from '../types';

export const fetchWorkoutsPerMothApi = async (): Promise<
    AxiosResponse<AxiosResponseWorkout[]>
> => {
    return await axios.get(`${BASE_URL}/workouts`);
};
