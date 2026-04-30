import axios from 'axios';
import type { Workout } from '../types';

export const fetchWorkout = async (id: string): Promise<Workout> => {
    const response = await axios.get(`/api/workouts/${id}`);
    return response.data;
};
