import { apiAxios } from '../../../shared';
import type { Workout, WorkoutActionValues } from '../types';

export const addWorkout = async (
    data: WorkoutActionValues,
): Promise<Workout> => {
    const response = await apiAxios.post<Workout>(`/api/workouts`, data);
    return response.data;
};
