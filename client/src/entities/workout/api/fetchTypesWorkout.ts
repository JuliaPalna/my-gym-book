import { apiAxios } from '../../../shared';
import type { TypeWorkout } from '../types';

export const fetchTypesWorkout = async (): Promise<TypeWorkout[]> => {
    const response = await apiAxios.get<TypeWorkout[]>(`/api/workouts/types`);
    return response.data;
};
