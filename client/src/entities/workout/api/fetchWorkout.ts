import { apiAxios } from '../../../shared';
import type { Workout } from '../types';

export const fetchWorkout = async (id: string): Promise<Workout> => {
    const response = await apiAxios.get<Workout>(`/api/workouts/${id}`);
    return response.data;
};
