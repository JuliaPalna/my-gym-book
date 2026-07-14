import { apiAxios } from '../../../shared/api';

export const removeWorkout = async (id: string): Promise<void> => {
    await apiAxios.delete(`/api/workouts/${id}`);
};
