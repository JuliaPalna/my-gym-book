import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { AxiosResponseWorkout } from '../../workouts';

export const fetchWorkoutApi = async (
    id: string,
): Promise<AxiosResponse<AxiosResponseWorkout>> => {
    return await axios.get(`${BASE_URL}/workouts/${id}`);
};
