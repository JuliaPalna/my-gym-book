import axios from 'axios';
import type { Workout, WorkoutActionProps } from '../types';

export const addWorkout = async (
    data: WorkoutActionProps,
): Promise<Workout> => {
    const response = await axios.post(`/api/workouts`, data);
    return response.data;
};
