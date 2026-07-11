import { apiAxios } from '../../../shared';
import type { Workout, WorkoutActionValues } from '../types';

export const updateWorkout = async ({
    id,
    data,
}: {
    id: string;
    data: WorkoutActionValues;
}): Promise<Workout> => {
    const response = await apiAxios.patch<Workout>(`/api/workouts/${id}`, data);
    return response.data;
};
